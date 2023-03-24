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

import {
  PutEmailIdentityDkimSigningAttributesRequest,
  PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog,
  PutEmailIdentityDkimSigningAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand,
  serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 *
 * The input for {@link PutEmailIdentityDkimSigningAttributesCommand}.
 */
export interface PutEmailIdentityDkimSigningAttributesCommandInput
  extends PutEmailIdentityDkimSigningAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityDkimSigningAttributesCommand}.
 */
export interface PutEmailIdentityDkimSigningAttributesCommandOutput
  extends PutEmailIdentityDkimSigningAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Used to configure or change the DKIM authentication settings for an email domain
 *             identity. You can use this operation to do any of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Update the signing attributes for an identity that uses Bring Your Own DKIM
 *                     (BYODKIM).</p>
 *             </li>
 *             <li>
 *                <p>Update the key length that should be used for Easy DKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using no DKIM authentication to using Easy DKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using no DKIM authentication to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using Easy DKIM to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using BYODKIM to using Easy DKIM.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = {
 *   EmailIdentity: "STRING_VALUE", // required
 *   SigningAttributesOrigin: "AWS_SES" || "EXTERNAL", // required
 *   SigningAttributes: {
 *     DomainSigningSelector: "STRING_VALUE",
 *     DomainSigningPrivateKey: "STRING_VALUE",
 *     NextSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 *   },
 * };
 * const command = new PutEmailIdentityDkimSigningAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutEmailIdentityDkimSigningAttributesCommandInput - {@link PutEmailIdentityDkimSigningAttributesCommandInput}
 * @returns {@link PutEmailIdentityDkimSigningAttributesCommandOutput}
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandOutput} for command's `response` shape.
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
 *
 */
export class PutEmailIdentityDkimSigningAttributesCommand extends $Command<
  PutEmailIdentityDkimSigningAttributesCommandInput,
  PutEmailIdentityDkimSigningAttributesCommandOutput,
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
  constructor(readonly input: PutEmailIdentityDkimSigningAttributesCommandInput) {
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
  ): Handler<PutEmailIdentityDkimSigningAttributesCommandInput, PutEmailIdentityDkimSigningAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEmailIdentityDkimSigningAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutEmailIdentityDkimSigningAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog,
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
    input: PutEmailIdentityDkimSigningAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
