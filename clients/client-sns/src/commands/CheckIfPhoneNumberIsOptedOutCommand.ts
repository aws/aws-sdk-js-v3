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

import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/models_0";
import { de_CheckIfPhoneNumberIsOptedOutCommand, se_CheckIfPhoneNumberIsOptedOutCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckIfPhoneNumberIsOptedOutCommand}.
 */
export interface CheckIfPhoneNumberIsOptedOutCommandInput extends CheckIfPhoneNumberIsOptedOutInput {}
/**
 * @public
 *
 * The output of {@link CheckIfPhoneNumberIsOptedOutCommand}.
 */
export interface CheckIfPhoneNumberIsOptedOutCommandOutput
  extends CheckIfPhoneNumberIsOptedOutResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Accepts a phone number and indicates whether the phone holder has opted out of
 *             receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number
 *             that is opted out.</p>
 *          <p>To resume sending messages, you can opt in the number by using the
 *                 <code>OptInPhoneNumber</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // CheckIfPhoneNumberIsOptedOutInput
 *   phoneNumber: "STRING_VALUE", // required
 * };
 * const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
 * const response = await client.send(command);
 * // { // CheckIfPhoneNumberIsOptedOutResponse
 * //   isOptedOut: true || false,
 * // };
 *
 * ```
 *
 * @param CheckIfPhoneNumberIsOptedOutCommandInput - {@link CheckIfPhoneNumberIsOptedOutCommandInput}
 * @returns {@link CheckIfPhoneNumberIsOptedOutCommandOutput}
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandInput} for command's `input` shape.
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class CheckIfPhoneNumberIsOptedOutCommand extends $Command<
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
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
  constructor(readonly input: CheckIfPhoneNumberIsOptedOutCommandInput) {
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
  ): Handler<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckIfPhoneNumberIsOptedOutCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CheckIfPhoneNumberIsOptedOutCommand";
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
  private serialize(input: CheckIfPhoneNumberIsOptedOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckIfPhoneNumberIsOptedOutCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> {
    return de_CheckIfPhoneNumberIsOptedOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
