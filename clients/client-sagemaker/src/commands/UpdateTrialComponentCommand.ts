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

import { UpdateTrialComponentRequest, UpdateTrialComponentResponse } from "../models/models_4";
import { de_UpdateTrialComponentCommand, se_UpdateTrialComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link UpdateTrialComponentCommand}.
 */
export interface UpdateTrialComponentCommandInput extends UpdateTrialComponentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrialComponentCommand}.
 */
export interface UpdateTrialComponentCommandOutput extends UpdateTrialComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates one or more properties of a trial component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateTrialComponentRequest
 *   TrialComponentName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Status: { // TrialComponentStatus
 *     PrimaryStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *     Message: "STRING_VALUE",
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Parameters: { // TrialComponentParameters
 *     "<keys>": { // TrialComponentParameterValue Union: only one key present
 *       StringValue: "STRING_VALUE",
 *       NumberValue: Number("double"),
 *     },
 *   },
 *   ParametersToRemove: [ // ListTrialComponentKey256
 *     "STRING_VALUE",
 *   ],
 *   InputArtifacts: { // TrialComponentArtifacts
 *     "<keys>": { // TrialComponentArtifact
 *       MediaType: "STRING_VALUE",
 *       Value: "STRING_VALUE", // required
 *     },
 *   },
 *   InputArtifactsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   OutputArtifacts: {
 *     "<keys>": {
 *       MediaType: "STRING_VALUE",
 *       Value: "STRING_VALUE", // required
 *     },
 *   },
 *   OutputArtifactsToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateTrialComponentCommandInput - {@link UpdateTrialComponentCommandInput}
 * @returns {@link UpdateTrialComponentCommandOutput}
 * @see {@link UpdateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrialComponentCommandOutput} for command's `response` shape.
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
export class UpdateTrialComponentCommand extends $Command<
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
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
  constructor(readonly input: UpdateTrialComponentCommandInput) {
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
  ): Handler<UpdateTrialComponentCommandInput, UpdateTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTrialComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateTrialComponentCommand";
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
  private serialize(input: UpdateTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTrialComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrialComponentCommandOutput> {
    return de_UpdateTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
