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
import { ListGrantsRequest, ListGrantsResponse } from "../models/models_0";
import { de_ListGrantsCommand, se_ListGrantsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGrantsCommand}.
 */
export interface ListGrantsCommandInput extends ListGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListGrantsCommand}.
 */
export interface ListGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of all grants for the specified KMS key. </p>
 *          <p>You must specify the KMS key in all requests. You can filter the grant list by grant ID or
 *       grantee principal.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <note>
 *             <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the
 *         user or role designated as the grantee principal in the grant. However, when the grantee
 *         principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains
 *         the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service
 *           principal</a>, which might represent several different grantee principals.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
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
 * import { KMSClient, ListGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ListGrantsRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   KeyId: "STRING_VALUE", // required
 *   GrantId: "STRING_VALUE",
 *   GranteePrincipal: "STRING_VALUE",
 * };
 * const command = new ListGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListGrantsResponse
 * //   Grants: [ // GrantList
 * //     { // GrantListEntry
 * //       KeyId: "STRING_VALUE",
 * //       GrantId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       GranteePrincipal: "STRING_VALUE",
 * //       RetiringPrincipal: "STRING_VALUE",
 * //       IssuingAccount: "STRING_VALUE",
 * //       Operations: [ // GrantOperationList
 * //         "Decrypt" || "Encrypt" || "GenerateDataKey" || "GenerateDataKeyWithoutPlaintext" || "ReEncryptFrom" || "ReEncryptTo" || "Sign" || "Verify" || "GetPublicKey" || "CreateGrant" || "RetireGrant" || "DescribeKey" || "GenerateDataKeyPair" || "GenerateDataKeyPairWithoutPlaintext" || "GenerateMac" || "VerifyMac",
 * //       ],
 * //       Constraints: { // GrantConstraints
 * //         EncryptionContextSubset: { // EncryptionContextType
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EncryptionContextEquals: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListGrantsCommandInput - {@link ListGrantsCommandInput}
 * @returns {@link ListGrantsCommandOutput}
 * @see {@link ListGrantsCommandInput} for command's `input` shape.
 * @see {@link ListGrantsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidGrantIdException} (client fault)
 *  <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *  <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To list grants for a KMS key
 * ```javascript
 * // The following example lists grants for the specified KMS key.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ListGrantsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Grants": [
 *     {
 *       "CreationDate": "2016-10-25T14:37:41-07:00",
 *       "GrantId": "91ad875e49b04a9d1f3bdeb84d821f9db6ea95e1098813f6d47f0c65fbe2a172",
 *       "GranteePrincipal": "acm.us-east-2.amazonaws.com",
 *       "IssuingAccount": "arn:aws:iam::111122223333:root",
 *       "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "Operations": [
 *         "Encrypt",
 *         "ReEncryptFrom",
 *         "ReEncryptTo"
 *       ],
 *       "RetiringPrincipal": "acm.us-east-2.amazonaws.com"
 *     },
 *     {
 *       "CreationDate": "2016-10-25T14:37:41-07:00",
 *       "GrantId": "a5d67d3e207a8fc1f4928749ee3e52eb0440493a8b9cf05bbfad91655b056200",
 *       "GranteePrincipal": "acm.us-east-2.amazonaws.com",
 *       "IssuingAccount": "arn:aws:iam::111122223333:root",
 *       "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "Operations": [
 *         "ReEncryptFrom",
 *         "ReEncryptTo"
 *       ],
 *       "RetiringPrincipal": "acm.us-east-2.amazonaws.com"
 *     },
 *     {
 *       "CreationDate": "2016-10-25T14:37:41-07:00",
 *       "GrantId": "c541aaf05d90cb78846a73b346fc43e65be28b7163129488c738e0c9e0628f4f",
 *       "GranteePrincipal": "acm.us-east-2.amazonaws.com",
 *       "IssuingAccount": "arn:aws:iam::111122223333:root",
 *       "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "Operations": [
 *         "Encrypt",
 *         "ReEncryptFrom",
 *         "ReEncryptTo"
 *       ],
 *       "RetiringPrincipal": "acm.us-east-2.amazonaws.com"
 *     },
 *     {
 *       "CreationDate": "2016-10-25T14:37:41-07:00",
 *       "GrantId": "dd2052c67b4c76ee45caf1dc6a1e2d24e8dc744a51b36ae2f067dc540ce0105c",
 *       "GranteePrincipal": "acm.us-east-2.amazonaws.com",
 *       "IssuingAccount": "arn:aws:iam::111122223333:root",
 *       "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "Operations": [
 *         "Encrypt",
 *         "ReEncryptFrom",
 *         "ReEncryptTo"
 *       ],
 *       "RetiringPrincipal": "acm.us-east-2.amazonaws.com"
 *     }
 *   ],
 *   "Truncated": true
 * }
 * *\/
 * // example id: to-list-grants-for-a-cmk-1481067365389
 * ```
 *
 */
export class ListGrantsCommand extends $Command<
  ListGrantsCommandInput,
  ListGrantsCommandOutput,
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
  constructor(readonly input: ListGrantsCommandInput) {
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
  ): Handler<ListGrantsCommandInput, ListGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListGrantsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "ListGrants",
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
  private serialize(input: ListGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListGrantsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGrantsCommandOutput> {
    return de_ListGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
