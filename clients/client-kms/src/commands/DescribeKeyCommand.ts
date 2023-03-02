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
  DescribeKeyRequest,
  DescribeKeyRequestFilterSensitiveLog,
  DescribeKeyResponse,
  DescribeKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeKeyCommand,
  serializeAws_json1_1DescribeKeyCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandInput extends DescribeKeyRequest {}
/**
 * The output of {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandOutput extends DescribeKeyResponse, __MetadataBearer {}

/**
 * <p>Provides detailed information about a KMS key. You can run <code>DescribeKey</code> on a
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed
 *         key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
 *          <p>This detailed information includes the key ARN, creation date (and deletion date, if
 *       applicable), the key state, and the origin and expiration date (if any) of the key material.
 *       It includes fields, like <code>KeySpec</code>, that help you distinguish different types of
 *       KMS keys. It also displays the key usage (encryption, signing, or generating and verifying
 *       MACs) and the algorithms that the KMS key supports. </p>
 *          <p>For <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region keys</a>,
 *         <code>DescribeKey</code> displays the primary key and all related replica keys. For KMS keys
 *       in <a href="kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>, it includes
 *       information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS
 *       keys in <a href="kms/latest/developerguide/keystore-external.html">external key stores</a>, it
 *       includes the custom key store ID and the ID of the external key.</p>
 *          <p>
 *             <code>DescribeKey</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Aliases associated with the KMS key. To get this information, use <a>ListAliases</a>.</p>
 *             </li>
 *             <li>
 *                <p>Whether automatic key rotation is enabled on the KMS key. To get this information, use
 *             <a>GetKeyRotationStatus</a>. Also, some key states prevent a KMS key from
 *           being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation
 *             Works</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Tags on the KMS key. To get this information, use <a>ListResourceTags</a>.</p>
 *             </li>
 *             <li>
 *                <p>Key policies and grants on the KMS key. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p>
 *             </li>
 *          </ul>
 *          <p>In general, <code>DescribeKey</code> is a non-mutating operation. It returns data about
 *       KMS keys, but doesn't change them. However, Amazon Web Services services use <code>DescribeKey</code> to
 *       create <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services
 *         managed keys</a> from a <i>predefined Amazon Web Services alias</i> with no key
 *       ID.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListResourceTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DescribeKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @example To get details about a KMS key
 * ```javascript
 * // The following example gets metadata for a symmetric encryption KMS key.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "111122223333",
 *     "Arn": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "CreationDate": "2017-07-05T14:04:55-07:00",
 *     "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
 *     "Description": "",
 *     "Enabled": true,
 *     "EncryptionAlgorithms": [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeySpec": "SYMMETRIC_DEFAULT",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "ENCRYPT_DECRYPT",
 *     "MultiRegion": false,
 *     "Origin": "AWS_KMS"
 *   }
 * }
 * *\/
 * // example id: get-key-details-1
 * ```
 *
 * @example To get details about an RSA asymmetric KMS key
 * ```javascript
 * // The following example gets metadata for an asymmetric RSA KMS key used for signing and verification.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "111122223333",
 *     "Arn": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "CreationDate": 1571767572.317,
 *     "CustomerMasterKeySpec": "RSA_2048",
 *     "Description": "",
 *     "Enabled": false,
 *     "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeySpec": "RSA_2048",
 *     "KeyState": "Disabled",
 *     "KeyUsage": "SIGN_VERIFY",
 *     "MultiRegion": false,
 *     "Origin": "AWS_KMS",
 *     "SigningAlgorithms": [
 *       "RSASSA_PKCS1_V1_5_SHA_256",
 *       "RSASSA_PKCS1_V1_5_SHA_384",
 *       "RSASSA_PKCS1_V1_5_SHA_512",
 *       "RSASSA_PSS_SHA_256",
 *       "RSASSA_PSS_SHA_384",
 *       "RSASSA_PSS_SHA_512"
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-details-about-an-rsa-asymmetric-kms-key-2
 * ```
 *
 * @example To get details about a multi-Region key
 * ```javascript
 * // The following example gets metadata for a multi-Region replica key. This multi-Region key is a symmetric encryption key. DescribeKey returns information about the primary key and all of its replicas.
 * const input = {
 *   "KeyId": "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "111122223333",
 *     "Arn": "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *     "CreationDate": 1586329200.918,
 *     "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
 *     "Description": "",
 *     "Enabled": true,
 *     "EncryptionAlgorithms": [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     "KeyId": "mrk-1234abcd12ab34cd56ef1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "ENCRYPT_DECRYPT",
 *     "MultiRegion": true,
 *     "MultiRegionConfiguration": {
 *       "MultiRegionKeyType": "PRIMARY",
 *       "PrimaryKey": {
 *         "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *         "Region": "us-west-2"
 *       },
 *       "ReplicaKeys": [
 *         {
 *           "Arn": "arn:aws:kms:eu-west-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           "Region": "eu-west-1"
 *         },
 *         {
 *           "Arn": "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           "Region": "ap-northeast-1"
 *         },
 *         {
 *           "Arn": "arn:aws:kms:sa-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           "Region": "sa-east-1"
 *         }
 *       ]
 *     },
 *     "Origin": "AWS_KMS"
 *   }
 * }
 * *\/
 * // example id: to-get-details-about-a-multi-region-key-3
 * ```
 *
 * @example To get details about an HMAC KMS key
 * ```javascript
 * // The following example gets the metadata of an HMAC KMS key.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "123456789012",
 *     "Arn": "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "CreationDate": 1566160362.664,
 *     "CustomerMasterKeySpec": "HMAC_256",
 *     "Description": "Development test key",
 *     "Enabled": true,
 *     "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "GENERATE_VERIFY_MAC",
 *     "MacAlgorithms": [
 *       "HMAC_SHA_256"
 *     ],
 *     "MultiRegion": false,
 *     "Origin": "AWS_KMS"
 *   }
 * }
 * *\/
 * // example id: to-get-details-about-an-hmac-kms-key-4
 * ```
 *
 * @example To get details about a KMS key in an AWS CloudHSM key store
 * ```javascript
 * // The following example gets the metadata of a KMS key in an AWS CloudHSM key store.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "123456789012",
 *     "Arn": "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "CloudHsmClusterId": "cluster-1a23b4cdefg",
 *     "CreationDate": 1646160362.664,
 *     "CustomKeyStoreId": "cks-1234567890abcdef0",
 *     "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
 *     "Description": "CloudHSM key store test key",
 *     "Enabled": true,
 *     "EncryptionAlgorithms": [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeySpec": "SYMMETRIC_DEFAULT",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "ENCRYPT_DECRYPT",
 *     "MultiRegion": false,
 *     "Origin": "AWS_CLOUDHSM"
 *   }
 * }
 * *\/
 * // example id: to-get-details-about-a-kms-key-in-an-AWS-CloudHSM-key-store-5
 * ```
 *
 * @example To get details about a KMS key in an external key store
 * ```javascript
 * // The following example gets the metadata of a KMS key in an external key store.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyMetadata": {
 *     "AWSAccountId": "123456789012",
 *     "Arn": "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "CreationDate": 1646160362.664,
 *     "CustomKeyStoreId": "cks-1234567890abcdef0",
 *     "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
 *     "Description": "External key store test key",
 *     "Enabled": true,
 *     "EncryptionAlgorithms": [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeySpec": "SYMMETRIC_DEFAULT",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "ENCRYPT_DECRYPT",
 *     "MultiRegion": false,
 *     "Origin": "EXTERNAL_KEY_STORE",
 *     "XksKeyConfiguration": {
 *       "Id": "bb8562717f809024"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-details-about-a-kms-key-in-an-external-key-store-6
 * ```
 *
 */
export class DescribeKeyCommand extends $Command<
  DescribeKeyCommandInput,
  DescribeKeyCommandOutput,
  KMSClientResolvedConfig
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

  constructor(readonly input: DescribeKeyCommandInput) {
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
  ): Handler<DescribeKeyCommandInput, DescribeKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DescribeKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeKeyCommandOutput> {
    return deserializeAws_json1_1DescribeKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
