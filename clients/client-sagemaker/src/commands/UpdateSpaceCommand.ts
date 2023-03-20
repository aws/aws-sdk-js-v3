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

import { UpdateSpaceRequest, UpdateSpaceResponse } from "../models/models_4";
import {
  deserializeAws_json1_1UpdateSpaceCommand,
  serializeAws_json1_1UpdateSpaceCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandInput extends UpdateSpaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandOutput extends UpdateSpaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings of a space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateSpaceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateSpaceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateSpaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSpaceCommandInput - {@link UpdateSpaceCommandInput}
 * @returns {@link UpdateSpaceCommandOutput}
 * @see {@link UpdateSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 *
 */
export class UpdateSpaceCommand extends $Command<
  UpdateSpaceCommandInput,
  UpdateSpaceCommandOutput,
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
  constructor(readonly input: UpdateSpaceCommandInput) {
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
  ): Handler<UpdateSpaceCommandInput, UpdateSpaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSpaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateSpaceCommand";
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
  private serialize(input: UpdateSpaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSpaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSpaceCommandOutput> {
    return deserializeAws_json1_1UpdateSpaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
