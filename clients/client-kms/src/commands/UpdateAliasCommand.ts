import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateAliasRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAliasCommand,
  serializeAws_json1_1UpdateAliasCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateAliasCommandInput extends UpdateAliasRequest {}
export interface UpdateAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an existing KMS alias with a different KMS key. Each alias
 *       is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias
 *       and the KMS key must be in the same Amazon Web Services account and Region.</p>
 *          <note>
 *             <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          </note>
 *          <p>The current and new KMS key must be the same type (both symmetric or both asymmetric), and
 *       they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>).
 *       This restriction prevents errors in code that uses aliases. If you must assign an alias to a
 *       different type of KMS key, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p>
 *          <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name,
 *       use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to
 *       create a new alias.</p>
 *          <p>Because an alias is not a property of a KMS key, you can create, update, and delete the
 *       aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from
 *       the <a>DescribeKey</a> operation. To get the aliases of all KMS keys in the account,
 *       use the <a>ListAliases</a> operation. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the alias (IAM policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the current KMS key (key policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the new KMS key (key policy).</p>
 *             </li>
 *          </ul>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateAliasCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateAliasCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAliasCommand extends $Command<
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAliasCommandOutput> {
    return deserializeAws_json1_1UpdateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
