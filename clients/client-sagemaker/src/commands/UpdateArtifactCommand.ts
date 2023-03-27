// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateArtifactRequest, UpdateArtifactResponse } from "../models/models_4";
import {
  deserializeAws_json1_1UpdateArtifactCommand,
  serializeAws_json1_1UpdateArtifactCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link UpdateArtifactCommand}.
 */
export interface UpdateArtifactCommandInput extends UpdateArtifactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateArtifactCommand}.
 */
export interface UpdateArtifactCommandOutput extends UpdateArtifactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateArtifactRequest
 *   ArtifactArn: "STRING_VALUE", // required
 *   ArtifactName: "STRING_VALUE",
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PropertiesToRemove: [ // ListLineageEntityParameterKey
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateArtifactCommandInput - {@link UpdateArtifactCommandInput}
 * @returns {@link UpdateArtifactCommandOutput}
 * @see {@link UpdateArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 *
 */
export class UpdateArtifactCommand extends $Command<
  UpdateArtifactCommandInput,
  UpdateArtifactCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateArtifactCommandInput, UpdateArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateArtifactCommandOutput> {
    return deserializeAws_json1_1UpdateArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
