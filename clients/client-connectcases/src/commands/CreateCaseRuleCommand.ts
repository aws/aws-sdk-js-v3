// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCaseRuleRequest, CreateCaseRuleResponse } from "../models/models_0";
import { CreateCaseRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCaseRuleCommand}.
 */
export interface CreateCaseRuleCommandInput extends CreateCaseRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseRuleCommand}.
 */
export interface CreateCaseRuleCommandOutput extends CreateCaseRuleResponse, __MetadataBearer {}

/**
 * Creates a new case rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateCaseRuleCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateCaseRuleCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateCaseRuleRequest
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   rule: { // CaseRuleDetails Union: only one key present
 *     required: { // RequiredCaseRule
 *       defaultValue: true || false, // required
 *       conditions: [ // BooleanConditionList // required
 *         { // BooleanCondition Union: only one key present
 *           equalTo: { // BooleanOperands
 *             operandOne: { // OperandOne Union: only one key present
 *               fieldId: "STRING_VALUE",
 *             },
 *             operandTwo: { // OperandTwo Union: only one key present
 *               stringValue: "STRING_VALUE",
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               emptyValue: {},
 *             },
 *             result: true || false, // required
 *           },
 *           notEqualTo: {
 *             operandOne: {//  Union: only one key present
 *               fieldId: "STRING_VALUE",
 *             },
 *             operandTwo: {//  Union: only one key present
 *               stringValue: "STRING_VALUE",
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               emptyValue: {},
 *             },
 *             result: true || false, // required
 *           },
 *           andAll: { // CompoundCondition
 *             conditions: [ // required
 *               {//  Union: only one key present
 *                 equalTo: {
 *                   operandOne: {//  Union: only one key present
 *                     fieldId: "STRING_VALUE",
 *                   },
 *                   operandTwo: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     booleanValue: true || false,
 *                     doubleValue: Number("double"),
 *                     emptyValue: {},
 *                   },
 *                   result: true || false, // required
 *                 },
 *                 notEqualTo: {
 *                   operandOne: {//  Union: only one key present
 *                     fieldId: "STRING_VALUE",
 *                   },
 *                   operandTwo: {//  Union: only one key present
 *                     stringValue: "STRING_VALUE",
 *                     booleanValue: true || false,
 *                     doubleValue: Number("double"),
 *                     emptyValue: {},
 *                   },
 *                   result: true || false, // required
 *                 },
 *                 andAll: {
 *                   conditions: "<BooleanConditionList>", // required
 *                 },
 *                 orAll: {
 *                   conditions: "<BooleanConditionList>", // required
 *                 },
 *               },
 *             ],
 *           },
 *           orAll: {
 *             conditions: "<BooleanConditionList>", // required
 *           },
 *         },
 *       ],
 *     },
 *     fieldOptions: { // FieldOptionsCaseRule
 *       parentFieldId: "STRING_VALUE",
 *       childFieldId: "STRING_VALUE",
 *       parentChildFieldOptionsMappings: [ // ParentChildFieldOptionsMappingList // required
 *         { // ParentChildFieldOptionsMapping
 *           parentFieldOptionValue: "STRING_VALUE", // required
 *           childFieldOptionValues: [ // ParentChildFieldOptionValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     hidden: { // HiddenCaseRule
 *       defaultValue: true || false, // required
 *       conditions: "<BooleanConditionList>", // required
 *     },
 *   },
 * };
 * const command = new CreateCaseRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseRuleResponse
 * //   caseRuleId: "STRING_VALUE", // required
 * //   caseRuleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCaseRuleCommandInput - {@link CreateCaseRuleCommandInput}
 * @returns {@link CreateCaseRuleCommandOutput}
 * @see {@link CreateCaseRuleCommandInput} for command's `input` shape.
 * @see {@link CreateCaseRuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
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
export class CreateCaseRuleCommand extends command<CreateCaseRuleCommandInput, CreateCaseRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateCaseRule",
  CreateCaseRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRuleRequest;
      output: CreateCaseRuleResponse;
    };
    sdk: {
      input: CreateCaseRuleCommandInput;
      output: CreateCaseRuleCommandOutput;
    };
  };
}
