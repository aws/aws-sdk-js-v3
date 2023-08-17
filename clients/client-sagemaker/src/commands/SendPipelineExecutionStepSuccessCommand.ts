// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { SendPipelineExecutionStepSuccessRequest, SendPipelineExecutionStepSuccessResponse } from "../models/models_4";
import {
  de_SendPipelineExecutionStepSuccessCommand,
  se_SendPipelineExecutionStepSuccessCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendPipelineExecutionStepSuccessCommand}.
 */
export interface SendPipelineExecutionStepSuccessCommandInput extends SendPipelineExecutionStepSuccessRequest {}
/**
 * @public
 *
 * The output of {@link SendPipelineExecutionStepSuccessCommand}.
 */
export interface SendPipelineExecutionStepSuccessCommandOutput
  extends SendPipelineExecutionStepSuccessResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Notifies the pipeline that the execution of a callback step succeeded and provides a
 *         list of the step's output parameters. When a callback step is run, the pipeline generates
 *         a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SendPipelineExecutionStepSuccessCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SendPipelineExecutionStepSuccessCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // SendPipelineExecutionStepSuccessRequest
 *   CallbackToken: "STRING_VALUE", // required
 *   OutputParameters: [ // OutputParameterList
 *     { // OutputParameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new SendPipelineExecutionStepSuccessCommand(input);
 * const response = await client.send(command);
 * // { // SendPipelineExecutionStepSuccessResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendPipelineExecutionStepSuccessCommandInput - {@link SendPipelineExecutionStepSuccessCommandInput}
 * @returns {@link SendPipelineExecutionStepSuccessCommandOutput}
 * @see {@link SendPipelineExecutionStepSuccessCommandInput} for command's `input` shape.
 * @see {@link SendPipelineExecutionStepSuccessCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class SendPipelineExecutionStepSuccessCommand extends $Command<
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
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
  constructor(readonly input: SendPipelineExecutionStepSuccessCommandInput) {
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
  ): Handler<SendPipelineExecutionStepSuccessCommandInput, SendPipelineExecutionStepSuccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendPipelineExecutionStepSuccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SendPipelineExecutionStepSuccessCommand";
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
  private serialize(
    input: SendPipelineExecutionStepSuccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SendPipelineExecutionStepSuccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendPipelineExecutionStepSuccessCommandOutput> {
    return de_SendPipelineExecutionStepSuccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
