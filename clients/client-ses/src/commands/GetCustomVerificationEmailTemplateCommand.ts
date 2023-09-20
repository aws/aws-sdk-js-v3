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

import {
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
} from "../models/models_0";
import {
  de_GetCustomVerificationEmailTemplateCommand,
  se_GetCustomVerificationEmailTemplateCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCustomVerificationEmailTemplateCommand}.
 */
export interface GetCustomVerificationEmailTemplateCommandInput extends GetCustomVerificationEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomVerificationEmailTemplateCommand}.
 */
export interface GetCustomVerificationEmailTemplateCommandOutput
  extends GetCustomVerificationEmailTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the custom email verification template for the template name you
 *             specify.</p>
 *          <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetCustomVerificationEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new GetCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomVerificationEmailTemplateResponse
 * //   TemplateName: "STRING_VALUE",
 * //   FromEmailAddress: "STRING_VALUE",
 * //   TemplateSubject: "STRING_VALUE",
 * //   TemplateContent: "STRING_VALUE",
 * //   SuccessRedirectionURL: "STRING_VALUE",
 * //   FailureRedirectionURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCustomVerificationEmailTemplateCommandInput - {@link GetCustomVerificationEmailTemplateCommandInput}
 * @returns {@link GetCustomVerificationEmailTemplateCommandOutput}
 * @see {@link GetCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link CustomVerificationEmailTemplateDoesNotExistException} (client fault)
 *  <p>Indicates that a custom verification email template with the name you specified does
 *             not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class GetCustomVerificationEmailTemplateCommand extends $Command<
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: GetCustomVerificationEmailTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCustomVerificationEmailTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetCustomVerificationEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "GetCustomVerificationEmailTemplate",
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
  private serialize(
    input: GetCustomVerificationEmailTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCustomVerificationEmailTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput> {
    return de_GetCustomVerificationEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
