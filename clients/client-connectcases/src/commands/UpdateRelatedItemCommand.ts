// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRelatedItemRequest, UpdateRelatedItemResponse } from "../models/models_0";
import { UpdateRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRelatedItemCommand}.
 */
export interface UpdateRelatedItemCommandInput extends UpdateRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRelatedItemCommand}.
 */
export interface UpdateRelatedItemCommandOutput extends UpdateRelatedItemResponse, __MetadataBearer {}

/**
 * Updates the content of a related item associated with a case. The following related item types are supported:
 *
 * - **Comment** - Update the text content of an existing comment
 * - **Custom** - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See [Amazon Connect Cases quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#cases-quotas).
 *
 * **Important things to know**
 *
 * - When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed.
 * - If you provide a value for `performedBy.userArn` you must also have [DescribeUser](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html) permission on the ARN of the user that you provide.
 * - [System case fields](https://docs.aws.amazon.com/connect/latest/adminguide/case-fields.html#system-case-fields) cannot be used in a custom related item.
 *
 * **Endpoints**: See [Amazon Connect endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // UpdateRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   relatedItemId: "STRING_VALUE", // required
 *   content: { // RelatedItemUpdateContent Union: only one key present
 *     comment: { // CommentUpdateContent
 *       body: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE", // required
 *     },
 *     custom: { // CustomUpdateContent
 *       fields: [ // FieldValueList // required
 *         { // FieldValue
 *           id: "STRING_VALUE", // required
 *           value: { // FieldValueUnion Union: only one key present
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
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRelatedItemResponse
 * //   relatedItemId: "STRING_VALUE", // required
 * //   relatedItemArn: "STRING_VALUE", // required
 * //   type: "STRING_VALUE", // required
 * //   content: { // RelatedItemContent Union: only one key present
 * //     contact: { // ContactContent
 * //       contactArn: "STRING_VALUE", // required
 * //       channel: "STRING_VALUE", // required
 * //       connectedToSystemTime: new Date("TIMESTAMP"), // required
 * //     },
 * //     comment: { // CommentContent
 * //       body: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE", // required
 * //     },
 * //     file: { // FileContent
 * //       fileArn: "STRING_VALUE", // required
 * //     },
 * //     sla: { // SlaContent
 * //       slaConfiguration: { // SlaConfiguration
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         status: "STRING_VALUE", // required
 * //         fieldId: "STRING_VALUE",
 * //         targetFieldValues: [ // SlaFieldValueUnionList
 * //           { // FieldValueUnion Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //             emptyValue: {},
 * //             userArnValue: "STRING_VALUE",
 * //           },
 * //         ],
 * //         targetTime: new Date("TIMESTAMP"), // required
 * //         completionTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     connectCase: { // ConnectCaseContent
 * //       caseId: "STRING_VALUE", // required
 * //     },
 * //     custom: { // CustomContent
 * //       fields: [ // FieldValueList // required
 * //         { // FieldValue
 * //           id: "STRING_VALUE", // required
 * //           value: {//  Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //             emptyValue: {},
 * //             userArnValue: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   associationTime: new Date("TIMESTAMP"), // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   lastUpdatedUser: { // UserUnion Union: only one key present
 * //     userArn: "STRING_VALUE",
 * //     customEntity: "STRING_VALUE",
 * //   },
 * //   createdBy: {//  Union: only one key present
 * //     userArn: "STRING_VALUE",
 * //     customEntity: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRelatedItemCommandInput - {@link UpdateRelatedItemCommandInput}
 * @returns {@link UpdateRelatedItemCommandOutput}
 * @see {@link UpdateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link UpdateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded. For a list of service quotas, see [Amazon Connect Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Amazon Connect Administrator Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class UpdateRelatedItemCommand extends command<UpdateRelatedItemCommandInput, UpdateRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRelatedItem",
  UpdateRelatedItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRelatedItemRequest;
      output: UpdateRelatedItemResponse;
    };
    sdk: {
      input: UpdateRelatedItemCommandInput;
      output: UpdateRelatedItemCommandOutput;
    };
  };
}
