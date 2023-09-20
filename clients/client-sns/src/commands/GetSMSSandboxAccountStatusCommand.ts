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

import { GetSMSSandboxAccountStatusInput, GetSMSSandboxAccountStatusResult } from "../models/models_0";
import { de_GetSMSSandboxAccountStatusCommand, se_GetSMSSandboxAccountStatusCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSMSSandboxAccountStatusCommand}.
 */
export interface GetSMSSandboxAccountStatusCommandInput extends GetSMSSandboxAccountStatusInput {}
/**
 * @public
 *
 * The output of {@link GetSMSSandboxAccountStatusCommand}.
 */
export interface GetSMSSandboxAccountStatusCommandOutput extends GetSMSSandboxAccountStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target
 *             Amazon Web Services Region.</p>
 *          <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
 *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 *                 SMS messages only to verified destination phone numbers. For more information, including how to
 *                 move out of the sandbox to send messages without restrictions,
 *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
 *                 the <i>Amazon SNS Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSSandboxAccountStatusCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSSandboxAccountStatusCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = {};
 * const command = new GetSMSSandboxAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSMSSandboxAccountStatusResult
 * //   IsInSandbox: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetSMSSandboxAccountStatusCommandInput - {@link GetSMSSandboxAccountStatusCommandInput}
 * @returns {@link GetSMSSandboxAccountStatusCommandOutput}
 * @see {@link GetSMSSandboxAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetSMSSandboxAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class GetSMSSandboxAccountStatusCommand extends $Command<
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
  SNSClientResolvedConfig
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
  constructor(readonly input: GetSMSSandboxAccountStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSMSSandboxAccountStatusCommandInput, GetSMSSandboxAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSMSSandboxAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetSMSSandboxAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSimpleNotificationService",
        operation: "GetSMSSandboxAccountStatus",
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
  private serialize(input: GetSMSSandboxAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSMSSandboxAccountStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSMSSandboxAccountStatusCommandOutput> {
    return de_GetSMSSandboxAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
