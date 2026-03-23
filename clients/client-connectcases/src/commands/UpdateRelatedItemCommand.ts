// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRelatedItemRequest, UpdateRelatedItemResponse } from "../models/models_0";
import { UpdateRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the content of a related item associated with a case. The following related item types are supported:</p> <ul> <li> <p> <b>Comment</b> - Update the text content of an existing comment</p> </li> <li> <p> <b>Custom</b> - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#cases-quotas">Amazon Connect Cases quotas</a>.</p> </li> </ul> <p> <b>Important things to know</b> </p> <ul> <li> <p>When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed.</p> </li> <li> <p>If you provide a value for <code>performedBy.userArn</code> you must also have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">DescribeUser</a> permission on the ARN of the user that you provide.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-fields.html#system-case-fields">System case fields</a> cannot be used in a custom related item.</p> </li> </ul> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and quotas</a>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
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
export class UpdateRelatedItemCommand extends $Command
  .classBuilder<
    UpdateRelatedItemCommandInput,
    UpdateRelatedItemCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "UpdateRelatedItem", {})
  .n("ConnectCasesClient", "UpdateRelatedItemCommand")
  .sc(UpdateRelatedItem$)
  .build() {
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
