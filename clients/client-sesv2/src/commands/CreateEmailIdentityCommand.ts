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

import {
  CreateEmailIdentityRequest,
  CreateEmailIdentityRequestFilterSensitiveLog,
  CreateEmailIdentityResponse,
} from "../models/models_0";
import { de_CreateEmailIdentityCommand, se_CreateEmailIdentityCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEmailIdentityCommand}.
 */
export interface CreateEmailIdentityCommandInput extends CreateEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link CreateEmailIdentityCommand}.
 */
export interface CreateEmailIdentityCommandOutput extends CreateEmailIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the process of verifying an email identity. An <i>identity</i> is
 *             an email address or domain that you use when you send email. Before you can use an
 *             identity to send email, you first have to verify it. By verifying an identity, you
 *             demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
 *             permission to send email from the identity.</p>
 *          <p>When you verify an email address, Amazon SES sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *          <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code>
 *             object, this operation provides a set of DKIM tokens. You can convert these tokens into
 *             CNAME records, which you then add to the DNS configuration for your domain. Your domain
 *             is verified when Amazon SES detects these records in the DNS configuration for your domain.
 *             This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
 *          <p>Alternatively, you can perform the verification process by providing your own
 *             public-private key pair. This verification method is known as Bring Your Own DKIM
 *             (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation
 *             has to include the <code>DkimSigningAttributes</code> object. When you specify this
 *             object, you provide a selector (a component of the DNS record name that identifies the
 *             public key to use for DKIM authentication) and a private key.</p>
 *          <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
 *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 *             domain. Your domain is verified when Amazon SES detects these records in the DNS
 *             configuration for your domain. For some DNS providers, it can take 72 hours or more to
 *             complete the domain verification process.</p>
 *          <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateEmailIdentityRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DkimSigningAttributes: { // DkimSigningAttributes
 *     DomainSigningSelector: "STRING_VALUE",
 *     DomainSigningPrivateKey: "STRING_VALUE",
 *     NextSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 *   },
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new CreateEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // { // CreateEmailIdentityResponse
 * //   IdentityType: "EMAIL_ADDRESS" || "DOMAIN" || "MANAGED_DOMAIN",
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
 * // };
 *
 * ```
 *
 * @param CreateEmailIdentityCommandInput - {@link CreateEmailIdentityCommandInput}
 * @returns {@link CreateEmailIdentityCommandOutput}
 * @see {@link CreateEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
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
export class CreateEmailIdentityCommand extends $Command<
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
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
  constructor(readonly input: CreateEmailIdentityCommandInput) {
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
  ): Handler<CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEmailIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateEmailIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEmailIdentityRequestFilterSensitiveLog,
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
  private serialize(input: CreateEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEmailIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEmailIdentityCommandOutput> {
    return de_CreateEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
