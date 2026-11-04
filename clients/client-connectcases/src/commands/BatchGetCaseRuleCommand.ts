// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetCaseRuleRequest, BatchGetCaseRuleResponse } from "../models/models_0";
import { BatchGetCaseRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
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
 * //               andAll: { // CompoundCondition
 * //                 conditions: [ // required
 * //                   {//  Union: only one key present
 * //                     equalTo: {
 * //                       operandOne: {//  Union: only one key present
 * //                         fieldId: "STRING_VALUE",
 * //                       },
 * //                       operandTwo: {//  Union: only one key present
 * //                         stringValue: "STRING_VALUE",
 * //                         booleanValue: true || false,
 * //                         doubleValue: Number("double"),
 * //                         emptyValue: {},
 * //                       },
 * //                       result: true || false, // required
 * //                     },
 * //                     notEqualTo: {
 * //                       operandOne: {//  Union: only one key present
 * //                         fieldId: "STRING_VALUE",
 * //                       },
 * //                       operandTwo: {//  Union: only one key present
 * //                         stringValue: "STRING_VALUE",
 * //                         booleanValue: true || false,
 * //                         doubleValue: Number("double"),
 * //                         emptyValue: {},
 * //                       },
 * //                       result: true || false, // required
 * //                     },
 * //                     andAll: {
 * //                       conditions: "<BooleanConditionList>", // required
 * //                     },
 * //                     orAll: {
 * //                       conditions: "<BooleanConditionList>", // required
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               orAll: {
 * //                 conditions: "<BooleanConditionList>", // required
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
 * //           conditions: "<BooleanConditionList>", // required
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
export class BatchGetCaseRuleCommand extends command<BatchGetCaseRuleCommandInput, BatchGetCaseRuleCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetCaseRule",
  BatchGetCaseRule$
) {
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
