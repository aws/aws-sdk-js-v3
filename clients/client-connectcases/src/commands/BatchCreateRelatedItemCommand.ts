// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateRelatedItemRequest, BatchCreateRelatedItemResponse } from "../models/models_0";
import { BatchCreateRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateRelatedItemCommand}.
 */
export interface BatchCreateRelatedItemCommandInput extends BatchCreateRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateRelatedItemCommand}.
 */
export interface BatchCreateRelatedItemCommandOutput extends BatchCreateRelatedItemResponse, __MetadataBearer {}

/**
 * <p>Creates a comment and associates it with multiple cases in a single request. All cases must belong to the same domain. This operation supports only the Comment related item type.</p> <p>Each case is processed independently. If some cases fail, the remaining cases still receive the related item. To determine whether individual items failed, inspect the <code>failedItems</code> array in the response.</p> <p>The entire request fails, and no related items are created, in the following cases:</p> <ul> <li> <p>The specified domain doesn't exist.</p> </li> <li> <p>A reference ID doesn't match any case in the domain.</p> </li> <li> <p>The request contains duplicate case IDs.</p> </li> <li> <p>The content isn't comment content.</p> </li> </ul> <note> <p>This operation uses the same IAM action as <a href="https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateRelatedItem.html">CreateRelatedItem</a> (<code>cases:CreateRelatedItem</code>). You can use the <code>cases:IsBatchAction</code> condition key in IAM policies to allow or deny batch operations independently from single-case operations.</p> </note> <note> <p>If you provide a value for <code>performedBy.userArn</code>, you must also have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">DescribeUser</a> permission on the ARN of the user that you provide.</p> </note> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Connect Customer endpoints and quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchCreateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchCreateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchCreateRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   content: { // RelatedItemInputContent Union: only one key present
 *     contact: { // Contact
 *       contactArn: "STRING_VALUE", // required
 *     },
 *     comment: { // CommentContent
 *       body: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE", // required
 *     },
 *     file: { // FileContent
 *       fileArn: "STRING_VALUE", // required
 *     },
 *     sla: { // SlaInputContent Union: only one key present
 *       slaInputConfiguration: { // SlaInputConfiguration
 *         name: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         fieldId: "STRING_VALUE",
 *         targetFieldValues: [ // SlaFieldValueUnionList
 *           { // FieldValueUnion Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             booleanValue: true || false,
 *             emptyValue: {},
 *             userArnValue: "STRING_VALUE",
 *           },
 *         ],
 *         targetSlaMinutes: Number("long"), // required
 *       },
 *     },
 *     connectCase: { // ConnectCaseInputContent
 *       caseId: "STRING_VALUE", // required
 *     },
 *     custom: { // CustomInputContent
 *       fields: [ // FieldValueList // required
 *         { // FieldValue
 *           id: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             booleanValue: true || false,
 *             emptyValue: {},
 *             userArnValue: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   cases: [ // BatchCreateRelatedItemIdentifierList // required
 *     { // BatchCreateRelatedItemIdentifier
 *       caseIdentifier: { // CaseIdentifierUnion Union: only one key present
 *         caseId: "STRING_VALUE",
 *         referenceId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchCreateRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateRelatedItemResponse
 * //   successfulItems: [ // BatchCreateRelatedItemSuccessEntryList // required
 * //     { // BatchCreateRelatedItemSuccessEntry
 * //       caseIdentifier: { // CaseIdentifier
 * //         caseId: "STRING_VALUE",
 * //         referenceNumber: "STRING_VALUE",
 * //         referenceId: "STRING_VALUE",
 * //       },
 * //       relatedItemId: "STRING_VALUE", // required
 * //       relatedItemArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failedItems: [ // BatchCreateRelatedItemErrorEntryList // required
 * //     { // BatchCreateRelatedItemErrorEntry
 * //       caseIdentifier: {
 * //         caseId: "STRING_VALUE",
 * //         referenceNumber: "STRING_VALUE",
 * //         referenceId: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateRelatedItemCommandInput - {@link BatchCreateRelatedItemCommandInput}
 * @returns {@link BatchCreateRelatedItemCommandOutput}
 * @see {@link BatchCreateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Connect Customer Service Quotas</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class BatchCreateRelatedItemCommand extends command<BatchCreateRelatedItemCommandInput, BatchCreateRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateRelatedItem",
  BatchCreateRelatedItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateRelatedItemRequest;
      output: BatchCreateRelatedItemResponse;
    };
    sdk: {
      input: BatchCreateRelatedItemCommandInput;
      output: BatchCreateRelatedItemCommandOutput;
    };
  };
}
