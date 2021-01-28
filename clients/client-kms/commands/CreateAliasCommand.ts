import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateAliasRequest } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAliasCommand,
  serializeAws_json1_1CreateAliasCommand,
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

export type CreateAliasCommandInput = CreateAliasRequest;
export type CreateAliasCommandOutput = __MetadataBearer;

/**
 * <p>Creates a display name for a customer managed customer master key (CMK). You can use an
 *       alias to identify a CMK in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. You can change the CMK associated with the alias at any
 *       time.</p>
 *          <p>Aliases are easier to remember than key IDs. They can also help to simplify your
 *       applications. For example, if you use an alias in your code, you can change the CMK your code
 *       uses by associating a given alias with a different CMK. </p>
 *          <p>To run the same code in multiple AWS regions, use an alias in your code, such as
 *         <code>alias/ApplicationKey</code>. Then, in each AWS Region, create an
 *         <code>alias/ApplicationKey</code> alias that is associated with a CMK in that Region. When
 *       you run your code, it uses the <code>alias/ApplicationKey</code> CMK for that AWS Region
 *       without any Region-specific code.</p>
 *          <p>This operation does not return a response. To get the alias that you created, use the
 *         <a>ListAliases</a> operation.</p>
 *
 *          <p>To use aliases successfully, be aware of the following information.</p>
 *          <ul>
 *             <li>
 *                <p>Each alias points to only one CMK at a time, although a single CMK can have multiple
 *           aliases. The alias and its associated CMK must be in the same AWS account and Region.
 *         </p>
 *             </li>
 *             <li>
 *                <p>You can associate an alias with any customer managed CMK in the same AWS account and
 *           Region. However, you do not have permission to associate an alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed
 *             CMK</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">AWS owned CMK</a>. </p>
 *             </li>
 *             <li>
 *                <p>To change the CMK associated with an alias, use the <a>UpdateAlias</a>
 *           operation. The current CMK and the new CMK must be the same type (both symmetric or both
 *           asymmetric) and they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or
 *             <code>SIGN_VERIFY</code>). This restriction prevents cryptographic errors in code that
 *           uses aliases.</p>
 *             </li>
 *             <li>
 *                <p>The alias name must begin with <code>alias/</code> followed by a
 *       name, such as <code>alias/ExampleAlias</code>. It can contain only alphanumeric characters,
 *       forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with
 *       <code>alias/aws/</code>. The <code>alias/aws/</code> prefix is reserved for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed CMKs</a>.
 * </p>
 *             </li>
 *             <li>
 *                <p>The alias name must be unique within an AWS Region. However, you can use the same
 *           alias name in multiple Regions of the same AWS account. Each instance of the alias is
 *           associated with a CMK in its Region.</p>
 *             </li>
 *             <li>
 *                <p>After you create an alias, you cannot change its alias name. However, you can use the
 *             <a>DeleteAlias</a> operation to delete the alias and then create a new alias
 *           with the desired name.</p>
 *             </li>
 *             <li>
 *                <p>You can use an alias name or alias ARN to identify a CMK in AWS KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> and in the <a>DescribeKey</a> operation. However, you cannot use
 *           alias names or alias ARNs in API operations that manage CMKs, such as <a>DisableKey</a> or <a>GetKeyPolicy</a>. For information about the
 *           valid CMK identifiers for each AWS KMS API operation, see the descriptions of the
 *             <code>KeyId</code> parameter in the API operation documentation.</p>
 *             </li>
 *          </ul>
 *
 *          <p>Because an alias is not a property of a CMK, you can delete and change the aliases of a
 *       CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases and alias ARNs of CMKs in each AWS
 *       account and Region, use the <a>ListAliases</a> operation.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAliasCommandInput) {
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
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAliasCommandOutput> {
    return deserializeAws_json1_1CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
