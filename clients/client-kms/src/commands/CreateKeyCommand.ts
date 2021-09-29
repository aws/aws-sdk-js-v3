import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateKeyRequest, CreateKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateKeyCommand, serializeAws_json1_1CreateKeyCommand } from "../protocols/Aws_json1_1";
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

export interface CreateKeyCommandInput extends CreateKeyRequest {}
export interface CreateKeyCommandOutput extends CreateKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region.</p>
 *          <note>
 *             <p>KMS is replacing the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *          </note>
 *
 *          <p>You can use the <code>CreateKey</code> operation to create symmetric or asymmetric KMS keys.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Symmetric KMS keys</b> contain a 256-bit symmetric key that
 *           never leaves KMS unencrypted. To use the KMS key, you must call KMS. You can use a
 *           symmetric KMS key to encrypt and decrypt small amounts of data, but they are typically used to
 *           generate <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data
 *             keys</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-key-pairs">data keys pairs</a>. For details,
 *           see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Asymmetric KMS keys</b> can contain an RSA key pair or an
 *           Elliptic Curve (ECC) key pair. The private key in an asymmetric KMS key never leaves KMS
 *           unencrypted. However, you can use the <a>GetPublicKey</a> operation to download
 *           the public key so it can be used outside of KMS. KMS keys with RSA key pairs can be used to
 *           encrypt or decrypt data or sign and verify messages (but not both). KMS keys with ECC key
 *           pairs can be used only to sign and verify messages.</p>
 *             </li>
 *          </ul>
 *          <p>For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *
 *
 *          <p>To create different types of KMS keys, use the following guidance:</p>
 *
 *          <dl>
 *             <dt>Asymmetric KMS keys</dt>
 *             <dd>
 *                <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify
 *             the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter
 *             to determine whether the KMS key will be used to encrypt and decrypt or sign and verify.
 *             You can't change these properties after the KMS key is created.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Symmetric KMS keys</dt>
 *             <dd>
 *                <p>When creating a symmetric KMS key, you don't need to specify the
 *               <code>KeySpec</code> or <code>KeyUsage</code> parameters. The default value for
 *               <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, and the default value for
 *               <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, are the only valid values for
 *             symmetric KMS keys. </p>
 *                <p> </p>
 *             </dd>
 *             <dt>Multi-Region primary keys</dt>
 *             <dt>Imported key material</dt>
 *             <dd>
 *                <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region,
 *             use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create
 *             a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID and
 *             key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its
 *             primary key to a replica key, use the <a>UpdatePrimaryRegion</a>
 *             operation.</p>
 *                <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p>You can create symmetric and asymmetric multi-Region keys and multi-Region keys with
 *             imported key material. You cannot create multi-Region keys in a custom key store.</p>
 *                <p> </p>
 *             </dd>
 *             <dd>
 *                <p>To import your own key material, begin by creating a symmetric KMS key with no key
 *             material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code>
 *             with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token, and use the public key to encrypt
 *             your key material. Then, use <a>ImportKeyMaterial</a> with your import token
 *             to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>. You
 *             cannot import the key material into an asymmetric KMS key.</p>
 *                <p>To create a multi-Region primary key with imported key material, use the
 *               <code>Origin</code> parameter of <code>CreateKey</code> with a value of
 *               <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of
 *               <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Custom key store</dt>
 *             <dd>
 *                <p>To create a symmetric KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, use the
 *               <code>CustomKeyStoreId</code> parameter to specify the custom key store. You must also
 *             use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The
 *             CloudHSM cluster that is associated with the custom key store must have at least two active
 *             HSMs in different Availability Zones in the Amazon Web Services Region. </p>
 *                <p>You cannot create an asymmetric KMS key in a custom key store. For information about
 *             custom key stores in KMS see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Using Custom Key Stores</a> in
 *             the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>Cross-account use</b>:  No. You cannot use this operation to
 *       create a KMS key in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the
 *         <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related
 *       permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ScheduleKeyDeletion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateKeyCommand extends $Command<CreateKeyCommandInput, CreateKeyCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateKeyCommandInput) {
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
  ): Handler<CreateKeyCommandInput, CreateKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyCommandOutput> {
    return deserializeAws_json1_1CreateKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
