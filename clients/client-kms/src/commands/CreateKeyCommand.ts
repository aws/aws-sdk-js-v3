// smithy-typescript generated code
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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  CreateKeyRequest,
  CreateKeyRequestFilterSensitiveLog,
  CreateKeyResponse,
  CreateKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1CreateKeyCommand, serializeAws_json1_1CreateKeyCommand } from "../protocols/Aws_json1_1";

export interface CreateKeyCommandInput extends CreateKeyRequest {}
export interface CreateKeyCommandOutput extends CreateKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and
 *       Region.</p>
 *          <p>In addition to the required parameters, you can use the optional parameters to specify a key policy, description, tags, and other useful elements for any key type.</p>
 *          <note>
 *             <p>KMS is replacing the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *          </note>
 *
 *          <p>To create different types of KMS keys, use the following guidance:</p>
 *
 *          <dl>
 *             <dt>Symmetric encryption KMS key</dt>
 *             <dd>
 *                <p>To create a symmetric encryption KMS key, you aren't required to specify any parameters. The default value for
 *             <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, and the default value for
 *             <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, create a symmetric encryption KMS key. For technical details, see
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default">
 *               SYMMETRIC_DEFAULT key spec</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p>If you need a key for basic encryption and decryption or you
 *             are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Asymmetric KMS keys</dt>
 *             <dd>
 *                <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify
 *             the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter
 *             to determine whether the KMS key will be used to encrypt and decrypt or sign and verify.
 *             You can't change these properties after the KMS key is created.</p>
 *                <p>Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, or an SM2 key pair (China Regions only). The private key in an asymmetric
 *             KMS key never leaves KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key
 *             so it can be used outside of KMS. KMS keys with RSA or SM2 key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both).
 *             KMS keys with ECC key pairs can be used only to sign and verify messages.
 *             For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>HMAC KMS key</dt>
 *             <dd>
 *                <p>To create an HMAC KMS key, set the <code>KeySpec</code> parameter to a
 *           key spec value for HMAC KMS keys. Then set the <code>KeyUsage</code> parameter to
 *           <code>GENERATE_VERIFY_MAC</code>. You must set the key usage even though
 *           <code>GENERATE_VERIFY_MAC</code> is the only valid key usage value for HMAC KMS keys.
 *           You can't change these properties after the KMS key is created.</p>
 *                <p>HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use
 *             HMAC keys to generate (<a>GenerateMac</a>) and verify (<a>VerifyMac</a>) HMAC codes for messages up to 4096 bytes.</p>
 *                <p>HMAC KMS keys are not supported in all Amazon Web Services Regions. If you try to create an HMAC
 *             KMS key in an Amazon Web Services Region in which HMAC keys are not supported, the
 *               <code>CreateKey</code> operation returns an
 *             <code>UnsupportedOperationException</code>. For a list of Regions in which HMAC KMS keys
 *             are supported, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in
 *               KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Multi-Region primary keys</dt>
 *             <dt>Imported key material</dt>
 *             <dd>
 *                <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region,
 *             use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create
 *             a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID
 *             and key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its
 *             primary key to a replica key, use the <a>UpdatePrimaryRegion</a>
 *             operation.</p>
 *                <p>You can create multi-Region KMS keys for all supported KMS key types: symmetric
 *             encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric
 *             signing KMS keys. You can also create multi-Region keys with imported key material.
 *             However, you can't create multi-Region keys in a custom key store.</p>
 *                <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dd>
 *                <p>To import your own key material, begin by creating a symmetric encryption KMS key with no key
 *             material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code>
 *             with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token, and use the public key to encrypt
 *             your key material. Then, use <a>ImportKeyMaterial</a> with your import token
 *             to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *                <p>This feature supports only symmetric encryption KMS keys, including multi-Region symmetric encryption KMS keys. You cannot import key
 *             material into any other type of KMS key.</p>
 *                <p>To create a multi-Region primary key with imported key material, use the
 *               <code>Origin</code> parameter of <code>CreateKey</code> with a value of
 *               <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of
 *               <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Custom key store</dt>
 *             <dd>
 *                <p>To create a symmetric encryption KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, use the
 *               <code>CustomKeyStoreId</code> parameter to specify the custom key store. You must also
 *             use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The
 *             CloudHSM cluster that is associated with the custom key store must have at least two active
 *             HSMs in different Availability Zones in the Amazon Web Services Region. </p>
 *                <p>Custom key stores support only symmetric encryption KMS keys. You cannot create an
 *             HMAC KMS key or an asymmetric KMS key in a custom key store. For information about
 *             custom key stores in KMS see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom key stores in KMS</a> in
 *             the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot use this operation to
 *       create a KMS key in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the
 *         <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related
 *       permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create
 *         KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
      inputFilterSensitiveLog: CreateKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateKeyResponseFilterSensitiveLog,
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
