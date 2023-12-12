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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { SendWorkflowStepActionRequest, SendWorkflowStepActionResponse } from "../models/models_0";
import { de_SendWorkflowStepActionCommand, se_SendWorkflowStepActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandInput extends SendWorkflowStepActionRequest {}
/**
 * @public
 *
 * The output of {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandOutput extends SendWorkflowStepActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Pauses or resumes image creation when the associated workflow runs a
 * 			<code>WaitForAction</code> step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, SendWorkflowStepActionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, SendWorkflowStepActionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // SendWorkflowStepActionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   action: "RESUME" || "STOP", // required
 *   reason: "STRING_VALUE",
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new SendWorkflowStepActionCommand(input);
 * const response = await client.send(command);
 * // { // SendWorkflowStepActionResponse
 * //   stepExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendWorkflowStepActionCommandInput - {@link SendWorkflowStepActionCommandInput}
 * @returns {@link SendWorkflowStepActionCommandOutput}
 * @see {@link SendWorkflowStepActionCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepActionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class SendWorkflowStepActionCommand extends $Command<
  SendWorkflowStepActionCommandInput,
  SendWorkflowStepActionCommandOutput,
  ImagebuilderClientResolvedConfig
> {
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
  constructor(readonly input: SendWorkflowStepActionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendWorkflowStepActionCommandInput, SendWorkflowStepActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendWorkflowStepActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "SendWorkflowStepActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "SendWorkflowStepAction",
      },
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
  private serialize(input: SendWorkflowStepActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendWorkflowStepActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendWorkflowStepActionCommandOutput> {
    return de_SendWorkflowStepActionCommand(output, context);
  }
}
