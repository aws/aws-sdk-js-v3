// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetCaseRuleRequest, BatchGetCaseRuleResponse } from "../models/models_0";
import { BatchGetCaseRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCaseRuleCommand}.
 */
export interface BatchGetCaseRuleCommandInput extends BatchGetCaseRuleRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCaseRuleCommand}.
 */
export interface BatchGetCaseRuleCommandOutput extends BatchGetCaseRuleResponse, __MetadataBearer {}

/**
 * <p>Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>. For more information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a case template</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchGetCaseRuleCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchGetCaseRuleCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchGetCaseRuleRequest
 *   domainId: "STRING_VALUE", // required
 *   caseRules: [ // CaseRuleIdentifierList // required
 *     { // CaseRuleIdentifier
 *       id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetCaseRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCaseRuleResponse
 * //   caseRules: [ // BatchGetCaseRuleList // required
 * //     { // GetCaseRuleResponse
 * //       caseRuleId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       caseRuleArn: "STRING_VALUE", // required
 * //       rule: { // CaseRuleDetails Union: only one key present
 * //         required: { // RequiredCaseRule
 * //           defaultValue: true || false, // required
 * //           conditions: [ // BooleanConditionList // required
 * //             { // BooleanCondition Union: only one key present
 * //               equalTo: { // BooleanOperands
 * //                 operandOne: { // OperandOne Union: only one key present
 * //                   fieldId: "STRING_VALUE",
 * //                 },
 * //                 operandTwo: { // OperandTwo Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   emptyValue: {},
 * //                 },
 * //                 result: true || false, // required
 * //               },
 * //               notEqualTo: {
 * //                 operandOne: {//  Union: only one key present
 * //                   fieldId: "STRING_VALUE",
 * //                 },
 * //                 operandTwo: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   emptyValue: {},
 * //                 },
 * //                 result: true || false, // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         fieldOptions: { // FieldOptionsCaseRule
 * //           parentFieldId: "STRING_VALUE",
 * //           childFieldId: "STRING_VALUE",
 * //           parentChildFieldOptionsMappings: [ // ParentChildFieldOptionsMappingList // required
 * //             { // ParentChildFieldOptionsMapping
 * //               parentFieldOptionValue: "STRING_VALUE", // required
 * //               childFieldOptionValues: [ // ParentChildFieldOptionValueList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         hidden: { // HiddenCaseRule
 * //           defaultValue: true || false, // required
 * //           conditions: [ // required
 * //             {//  Union: only one key present
 * //               equalTo: {
 * //                 operandOne: {//  Union: only one key present
 * //                   fieldId: "STRING_VALUE",
 * //                 },
 * //                 operandTwo: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   emptyValue: {},
 * //                 },
 * //                 result: true || false, // required
 * //               },
 * //               notEqualTo: {
 * //                 operandOne: {//  Union: only one key present
 * //                   fieldId: "STRING_VALUE",
 * //                 },
 * //                 operandTwo: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   emptyValue: {},
 * //                 },
 * //                 result: true || false, // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       deleted: true || false,
 * //       createdTime: new Date("TIMESTAMP"),
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetCaseRuleErrorList // required
 * //     { // CaseRuleError
 * //       id: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   unprocessedCaseRules: [ // BatchGetCaseRuleUnprocessedList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCaseRuleCommandInput - {@link BatchGetCaseRuleCommandInput}
 * @returns {@link BatchGetCaseRuleCommandOutput}
 * @see {@link BatchGetCaseRuleCommandInput} for command's `input` shape.
 * @see {@link BatchGetCaseRuleCommandOutput} for command's `response` shape.
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
export class BatchGetCaseRuleCommand extends $Command
  .classBuilder<
    BatchGetCaseRuleCommandInput,
    BatchGetCaseRuleCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "BatchGetCaseRule", {})
  .n("ConnectCasesClient", "BatchGetCaseRuleCommand")
  .sc(BatchGetCaseRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCaseRuleRequest;
      output: BatchGetCaseRuleResponse;
    };
    sdk: {
      input: BatchGetCaseRuleCommandInput;
      output: BatchGetCaseRuleCommandOutput;
    };
  };
}
