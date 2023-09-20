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
import { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import { de_CreateGrantCommand, se_CreateGrantCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandInput extends CreateGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandOutput extends CreateGrantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a grant to a KMS key. </p>
 *          <p>A <i>grant</i> is a policy instrument that allows Amazon Web Services principals to use
 *       KMS keys in cryptographic operations. It also can allow them to view a KMS key (<a>DescribeKey</a>) and create and manage grants. When authorizing access to a KMS key,
 *       grants are considered along with key policies and IAM policies. Grants are often used for
 *       temporary permissions because you can create one, use its permissions, and delete it without
 *       changing your key policies or IAM policies. </p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>The <code>CreateGrant</code> operation returns a <code>GrantToken</code> and a
 *         <code>GrantId</code>.</p>
 *          <ul>
 *             <li>
 *                <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. Once the grant has achieved eventual consistency, the grantee
 *           principal can use the permissions in the grant without identifying the grant. </p>
 *                <p>However, to use the permissions in the grant immediately, use the
 *             <code>GrantToken</code> that <code>CreateGrant</code> returns. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a
 *             grant token</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>CreateGrant</code> operation also returns a <code>GrantId</code>. You can
 *           use the <code>GrantId</code> and a key identifier to identify the grant in the <a>RetireGrant</a> and <a>RevokeGrant</a> operations. To find the grant
 *           ID, use the <a>ListGrants</a> or <a>ListRetirableGrants</a>
 *           operations.</p>
 *             </li>
 *          </ul>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateGrant</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // CreateGrantRequest
 *   KeyId: "STRING_VALUE", // required
 *   GranteePrincipal: "STRING_VALUE", // required
 *   RetiringPrincipal: "STRING_VALUE",
 *   Operations: [ // GrantOperationList // required
 *     "Decrypt" || "Encrypt" || "GenerateDataKey" || "GenerateDataKeyWithoutPlaintext" || "ReEncryptFrom" || "ReEncryptTo" || "Sign" || "Verify" || "GetPublicKey" || "CreateGrant" || "RetireGrant" || "DescribeKey" || "GenerateDataKeyPair" || "GenerateDataKeyPairWithoutPlaintext" || "GenerateMac" || "VerifyMac",
 *   ],
 *   Constraints: { // GrantConstraints
 *     EncryptionContextSubset: { // EncryptionContextType
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EncryptionContextEquals: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateGrantResponse
 * //   GrantToken: "STRING_VALUE",
 * //   GrantId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGrantCommandInput - {@link CreateGrantCommandInput}
 * @returns {@link CreateGrantCommandOutput}
 * @see {@link CreateGrantCommandInput} for command's `input` shape.
 * @see {@link CreateGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>
 *       The request was rejected because the DryRun parameter was specified.
 *     </p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To create a grant
 * ```javascript
 * // The following example creates a grant that allows the specified IAM role to encrypt data with the specified KMS key.
 * const input = {
 *   "GranteePrincipal": "arn:aws:iam::111122223333:role/ExampleRole",
 *   "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Operations": [
 *     "Encrypt",
 *     "Decrypt"
 *   ]
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *   "GrantToken": "AQpAM2RhZTk1MGMyNTk2ZmZmMzEyYWVhOWViN2I1MWM4Mzc0MWFiYjc0ZDE1ODkyNGFlNTIzODZhMzgyZjBlNGY3NiKIAgEBAgB4Pa6VDCWW__MSrqnre1HIN0Grt00ViSSuUjhqOC8OT3YAAADfMIHcBgkqhkiG9w0BBwaggc4wgcsCAQAwgcUGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMmqLyBTAegIn9XlK5AgEQgIGXZQjkBcl1dykDdqZBUQ6L1OfUivQy7JVYO2-ZJP7m6f1g8GzV47HX5phdtONAP7K_HQIflcgpkoCqd_fUnE114mSmiagWkbQ5sqAVV3ov-VeqgrvMe5ZFEWLMSluvBAqdjHEdMIkHMlhlj4ENZbzBfo9Wxk8b8SnwP4kc4gGivedzFXo-dwN8fxjjq_ZZ9JFOj2ijIbj5FyogDCN0drOfi8RORSEuCEmPvjFRMFAwcmwFkN2NPp89amA"
 * }
 * *\/
 * // example id: to-create-a-grant-1477972226782
 * ```
 *
 */
export class CreateGrantCommand extends $Command<
  CreateGrantCommandInput,
  CreateGrantCommandOutput,
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
  constructor(readonly input: CreateGrantCommandInput) {
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
  ): Handler<CreateGrantCommandInput, CreateGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateGrantCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "CreateGrant",
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
  private serialize(input: CreateGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGrantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGrantCommandOutput> {
    return de_CreateGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
