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

import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import { de_GetEmailIdentityCommand, se_GetEmailIdentityCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEmailIdentityCommand}.
 */
export interface GetEmailIdentityCommandInput extends GetEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailIdentityCommand}.
 */
export interface GetEmailIdentityCommandOutput extends GetEmailIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a specific identity, including the identity's verification
 *             status, sending authorization policies, its DKIM authentication status, and its custom
 *             Mail-From settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetEmailIdentityRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new GetEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailIdentityResponse
 * //   IdentityType: "EMAIL_ADDRESS" || "DOMAIN" || "MANAGED_DOMAIN",
 * //   FeedbackForwardingStatus: true || false,
 * //   VerifiedForSendingStatus: true || false,
 * //   DkimAttributes: { // DkimAttributes
 * //     SigningEnabled: true || false,
 * //     Status: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE" || "NOT_STARTED",
 * //     Tokens: [ // DnsTokenList
 * //       "STRING_VALUE",
 * //     ],
 * //     SigningAttributesOrigin: "AWS_SES" || "EXTERNAL",
 * //     NextSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 * //     CurrentSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 * //     LastKeyGenerationTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   MailFromAttributes: { // MailFromAttributes
 * //     MailFromDomain: "STRING_VALUE", // required
 * //     MailFromDomainStatus: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE", // required
 * //     BehaviorOnMxFailure: "USE_DEFAULT_VALUE" || "REJECT_MESSAGE", // required
 * //   },
 * //   Policies: { // PolicyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   VerificationStatus: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE" || "NOT_STARTED",
 * // };
 *
 * ```
 *
 * @param GetEmailIdentityCommandInput - {@link GetEmailIdentityCommandInput}
 * @returns {@link GetEmailIdentityCommandOutput}
 * @see {@link GetEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class GetEmailIdentityCommand extends $Command<
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: GetEmailIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEmailIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetEmailIdentityCommand";
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
  private serialize(input: GetEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEmailIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEmailIdentityCommandOutput> {
    return de_GetEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
