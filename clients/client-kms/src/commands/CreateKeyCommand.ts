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
 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region.
 *       You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services
 *       services let you use KMS keys that you create and manage to protect your service
 *       resources.</p>
 *          <p>A KMS key is a logical representation of a cryptographic key. In addition to the key
 *       material used in cryptographic operations, a KMS key includes metadata, such as the key ID,
 *       key policy, creation date, description, and key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html">Managing keys</a> in the
 *       <i>Key Management Service Developer Guide</i>
 *          </p>
 *          <p>Use the parameters of <code>CreateKey</code> to specify the type of KMS key, the source of
 *       its key material, its key policy, description, tags, and other properties.</p>
 *          <note>
 *             <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *          </note>
 *
 *
 *          <p>To create different types of KMS keys, use the following guidance:</p>
 *
 *          <dl>
 *             <dt>Symmetric encryption KMS key</dt>
 *             <dd>
 *                <p>By default, <code>CreateKey</code> creates a symmetric encryption KMS key with key
 *             material that KMS generates. This is the basic and most widely used type of KMS key, and
 *             provides the best performance.</p>
 *                <p>To create a symmetric encryption KMS key, you don't need to specify any parameters.
 *             The default value for <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, the default
 *             value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, and the default value for
 *               <code>Origin</code>, <code>AWS_KMS</code>, create a symmetric encryption KMS key with
 *             KMS key material.</p>
 *                <p>If you need a key for basic encryption and decryption or you are creating a KMS key
 *             to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key.
 *             The key material in a symmetric encryption key never leaves KMS unencrypted. You can
 *             use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but
 *             they are typically used to generate data keys and data keys pairs. For details, see
 *               <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p>
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
 *                <p>To create an HMAC KMS key, set the <code>KeySpec</code> parameter to a key spec
 *             value for HMAC KMS keys. Then set the <code>KeyUsage</code> parameter to
 *               <code>GENERATE_VERIFY_MAC</code>. You must set the key usage even though
 *               <code>GENERATE_VERIFY_MAC</code> is the only valid key usage value for HMAC KMS keys.
 *             You can't change these properties after the KMS key is created.</p>
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
 *                <p>To import your own key material into a KMS key, begin by creating a symmetric
 *             encryption KMS key with no key material. To do this, use the <code>Origin</code>
 *             parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use
 *               <a>GetParametersForImport</a> operation to get a public key and import
 *             token, and use the public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For
 *             step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *                <p>This feature supports only symmetric encryption KMS keys, including multi-Region
 *             symmetric encryption KMS keys. You cannot import key material into any other type of KMS
 *             key.</p>
 *                <p>To create a multi-Region primary key with imported key material, use the
 *               <code>Origin</code> parameter of <code>CreateKey</code> with a value of
 *               <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of
 *               <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-import.html ">Importing key material into
 *               multi-Region keys</a>. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Custom key store</dt>
 *             <dd>
 *                <p>A <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> lets you protect your Amazon Web Services resources using keys in a backing key
 *             store that you own and manage. When you request a cryptographic operation with a KMS key
 *             in a custom key store, the operation is performed in the backing key store using its
 *             cryptographic keys.</p>
 *                <p>KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an CloudHSM cluster and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an
 *             external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store,
 *             KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS
 *             key. When you create a KMS key in an external key store, you specify an existing
 *             encryption key in the external key manager.</p>
 *                <note>
 *                   <p>Some external key managers provide a simpler method for creating a KMS key in an
 *               external key store. For details, see your external key manager documentation.</p>
 *                </note>
 *                <p>Before you create a KMS key in a custom key store, the <code>ConnectionState</code>
 *             of the key store must be <code>CONNECTED</code>. To connect the custom key store, use
 *             the <a>ConnectCustomKeyStore</a> operation. To find the
 *               <code>ConnectionState</code>, use the <a>DescribeCustomKeyStores</a>
 *             operation.</p>
 *                <p>To create a KMS key in a custom key store, use the <code>CustomKeyStoreId</code>.
 *             Use the default <code>KeySpec</code> value, <code>SYMMETRIC_DEFAULT</code>, and the
 *             default <code>KeyUsage</code> value, <code>ENCRYPT_DECRYPT</code> to create a symmetric
 *             encryption key. No other key type is supported in a custom key store.</p>
 *                <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key store</a>, use the
 *               <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM
 *             cluster that is associated with the custom key store must have at least two active HSMs
 *             in different Availability Zones in the Amazon Web Services Region.</p>
 *                <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key store</a>, use the <code>Origin</code> parameter
 *             with a value of <code>EXTERNAL_KEY_STORE</code> and an <code>XksKeyId</code> parameter
 *             that identifies an existing external key.</p>
 *                <note>
 *                   <p>Some external key managers provide a simpler method for creating a KMS key in an
 *               external key store. For details, see your external key manager documentation.</p>
 *                </note>
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

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateKeyCommand.getEndpointParameterInstructions()));

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
