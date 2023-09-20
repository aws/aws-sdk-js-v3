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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GetParametersForImportRequest,
  GetParametersForImportResponse,
  GetParametersForImportResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetParametersForImportCommand, se_GetParametersForImportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandInput extends GetParametersForImportRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandOutput extends GetParametersForImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the public key and an import token you need to import or reimport key material for
 *       a KMS key. </p>
 *          <p>By default, KMS keys are created with key material that KMS generates. This operation
 *       supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a>, an advanced feature that lets you generate and import the cryptographic
 *       key material for a KMS key. For more information about importing key material into KMS, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Before calling <code>GetParametersForImport</code>, use the <a>CreateKey</a>
 *       operation with an <code>Origin</code> value of <code>EXTERNAL</code> to create a KMS key with
 *       no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key,
 *       asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material
 *       into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of
 *       any supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. You can also use
 *         <code>GetParametersForImport</code> to get a public key and import token to <a href="kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the original key
 *         material</a> into a KMS key whose key material expired or was deleted.</p>
 *          <p>
 *             <code>GetParametersForImport</code> returns the items that you need to import your key
 *       material.</p>
 *          <ul>
 *             <li>
 *                <p>The public key (or "wrapping key") of an RSA key pair that KMS generates.</p>
 *                <p>You will use this public key to encrypt ("wrap") your key material while it's in
 *           transit to KMS. </p>
 *             </li>
 *             <li>
 *                <p>A import token that ensures that KMS can decrypt your key material and associate it
 *           with the correct KMS key.</p>
 *             </li>
 *          </ul>
 *          <p>The public key and its import token are permanently linked and must be used together. Each
 *       public key and import token set is valid for 24 hours. The expiration date and time appear in
 *       the <code>ParametersValidTo</code> field in the <code>GetParametersForImport</code> response.
 *       You cannot use an expired public key or import token in an <a>ImportKeyMaterial</a>
 *       request. If your key and token expire, send another <code>GetParametersForImport</code>
 *       request.</p>
 *          <p>
 *             <code>GetParametersForImport</code> requires the following information:</p>
 *          <ul>
 *             <li>
 *                <p>The key ID of the KMS key for which you are importing the key material.</p>
 *             </li>
 *             <li>
 *                <p>The key spec of the public key ("wrapping key") that you will use to encrypt your key
 *           material during import.</p>
 *             </li>
 *             <li>
 *                <p>The wrapping algorithm that you will use with the public key to encrypt your key
 *           material.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the same or a different public key spec and wrapping algorithm each time you
 *       import or reimport the same key material. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetParametersForImportCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetParametersForImportCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GetParametersForImportRequest
 *   KeyId: "STRING_VALUE", // required
 *   WrappingAlgorithm: "RSAES_PKCS1_V1_5" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "RSA_AES_KEY_WRAP_SHA_1" || "RSA_AES_KEY_WRAP_SHA_256", // required
 *   WrappingKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096", // required
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForImportResponse
 * //   KeyId: "STRING_VALUE",
 * //   ImportToken: "BLOB_VALUE",
 * //   PublicKey: "BLOB_VALUE",
 * //   ParametersValidTo: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetParametersForImportCommandInput - {@link GetParametersForImportCommandInput}
 * @returns {@link GetParametersForImportCommandOutput}
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To download the public key and import token for a symmetric encryption KMS key
 * ```javascript
 * // The following example downloads a public key and import token to import symmetric encryption key material. It uses the default wrapping key spec and the RSAES_OAEP_SHA_256 wrapping algorithm.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "WrappingAlgorithm": "RSAES_OAEP_SHA_1",
 *   "WrappingKeySpec": "RSA_2048"
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImportToken": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "ParametersValidTo": "2023-02-01T14:52:17-08:00",
 *   "PublicKey": "<binary data>"
 * }
 * *\/
 * // example id: to-download-the-public-key-and-import-token-1
 * ```
 *
 * @example To download the public key and import token for an RSA asymmetric KMS key
 * ```javascript
 * // The following example downloads a public key and import token to import an RSA private key. It uses a required RSA_AES wrapping algorithm and the largest supported private key.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/8888abcd-12ab-34cd-56ef-1234567890ab",
 *   "WrappingAlgorithm": "RSA_AES_KEY_WRAP_SHA_256",
 *   "WrappingKeySpec": "RSA_4096"
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImportToken": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/8888abcd-12ab-34cd-56ef-1234567890ab",
 *   "ParametersValidTo": "2023-03-08T13:02:02-07:00",
 *   "PublicKey": "<binary data>"
 * }
 * *\/
 * // example id: to-download-the-public-key-and-import-token-2
 * ```
 *
 * @example To download the public key and import token for an elliptic curve (ECC) asymmetric KMS key
 * ```javascript
 * // The following example downloads a public key and import token to import an ECC_NIST_P521 (secp521r1) private key. You cannot directly wrap this ECC key under an RSA_2048 public key, although you can use an RSA_2048 public key with an RSA_AES wrapping algorithm to wrap any supported key material. This example requests an RSA_3072 public key for use with the RSAES_OAEP_SHA_256.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/9876abcd-12ab-34cd-56ef-1234567890ab",
 *   "WrappingAlgorithm": "RSAES_OAEP_SHA_256",
 *   "WrappingKeySpec": "RSA_3072"
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImportToken": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/9876abcd-12ab-34cd-56ef-1234567890ab",
 *   "ParametersValidTo": "2023-09-12T03:15:01-20:00",
 *   "PublicKey": "<binary data>"
 * }
 * *\/
 * // example id: to-download-the-public-key-and-import-token-3
 * ```
 *
 * @example To download the public key and import token for an HMAC KMS key
 * ```javascript
 * // The following example downloads a public key and import token to import an HMAC key. It uses the RSAES_OAEP_SHA_256 wrapping algorithm and an RSA_4096 private key.
 * const input = {
 *   "KeyId": "2468abcd-12ab-34cd-56ef-1234567890ab",
 *   "WrappingAlgorithm": "RSAES_OAEP_SHA_256",
 *   "WrappingKeySpec": "RSA_4096"
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImportToken": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/2468abcd-12ab-34cd-56ef-1234567890ab",
 *   "ParametersValidTo": "2023-04-02T13:02:02-07:00",
 *   "PublicKey": "<binary data>"
 * }
 * *\/
 * // example id: to-download-the-public-key-and-import-token-4
 * ```
 *
 */
export class GetParametersForImportCommand extends $Command<
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetParametersForImportCommandInput) {
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
  ): Handler<GetParametersForImportCommandInput, GetParametersForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParametersForImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetParametersForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetParametersForImportResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "GetParametersForImport",
      },
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
  private serialize(input: GetParametersForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetParametersForImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersForImportCommandOutput> {
    return de_GetParametersForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
