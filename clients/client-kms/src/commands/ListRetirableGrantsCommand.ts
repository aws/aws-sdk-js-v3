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
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import { de_ListRetirableGrantsCommand, se_ListRetirableGrantsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRetirableGrantsCommand}.
 */
export interface ListRetirableGrantsCommandInput extends ListRetirableGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListRetirableGrantsCommand}.
 */
export interface ListRetirableGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all grants in the Amazon Web Services account and Region that have the
 *       specified retiring principal. </p>
 *          <p>You can specify any principal in your Amazon Web Services account. The grants that are returned include
 *       grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this
 *       operation to determine which grants you may retire. To retire a grant, use the <a>RetireGrant</a> operation.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       Amazon Web Services account. However, this operation can return grants in any Amazon Web Services account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       Amazon Web Services account other than your own.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your
 *       Amazon Web Services account.</p>
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
 *                   <a>ListGrants</a>
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
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ListRetirableGrantsRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   RetiringPrincipal: "STRING_VALUE", // required
 * };
 * const command = new ListRetirableGrantsCommand(input);
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
 * @param ListRetirableGrantsCommandInput - {@link ListRetirableGrantsCommandInput}
 * @returns {@link ListRetirableGrantsCommandOutput}
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidMarkerException} (client fault)
 *  <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To list grants that the specified principal can retire
 * ```javascript
 * // The following example lists the grants that the specified principal (identity) can retire.
 * const input = {
 *   "RetiringPrincipal": "arn:aws:iam::111122223333:role/ExampleRole"
 * };
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Grants": [
 *     {
 *       "CreationDate": "2016-12-07T11:09:35-08:00",
 *       "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *       "GranteePrincipal": "arn:aws:iam::111122223333:role/ExampleRole",
 *       "IssuingAccount": "arn:aws:iam::444455556666:root",
 *       "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "Operations": [
 *         "Decrypt",
 *         "Encrypt"
 *       ],
 *       "RetiringPrincipal": "arn:aws:iam::111122223333:role/ExampleRole"
 *     }
 *   ],
 *   "Truncated": false
 * }
 * *\/
 * // example id: to-list-grants-that-the-specified-principal-can-retire-1481140499620
 * ```
 *
 */
export class ListRetirableGrantsCommand extends $Command<
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
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
  constructor(readonly input: ListRetirableGrantsCommandInput) {
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
  ): Handler<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRetirableGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListRetirableGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListRetirableGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRetirableGrantsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRetirableGrantsCommandOutput> {
    return de_ListRetirableGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
