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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { TagCertificateAuthorityRequest, TagCertificateAuthorityRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1TagCertificateAuthorityCommand,
  serializeAws_json1_1TagCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";

export interface TagCertificateAuthorityCommandInput extends TagCertificateAuthorityRequest {}
export interface TagCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify
 * 			and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You
 * 			specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag
 * 			by using a key-value pair. You can apply a tag to just one private CA if you want to
 * 			identify a specific characteristic of that CA, or you can apply the same tag to multiple
 * 			private CAs if you want to filter for a common relationship among those CAs. To remove
 * 			one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 *          <note>
 *             <p>To attach tags to a private CA during the creation procedure, a CA administrator
 * 				must first associate an inline IAM policy with the
 * 					<code>CreateCertificateAuthority</code> action and explicitly allow tagging. For
 * 				more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA
 * 					at the time of creation</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, TagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, TagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new TagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link TagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class TagCertificateAuthorityCommand extends $Command<
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
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

  constructor(readonly input: TagCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TagCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "TagCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagCertificateAuthorityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagCertificateAuthorityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1TagCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
