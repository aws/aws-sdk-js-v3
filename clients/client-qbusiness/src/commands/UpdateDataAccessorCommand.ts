// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDataAccessorResponse } from "../models/models_0";
import type { UpdateDataAccessorRequest } from "../models/models_1";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { UpdateDataAccessor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataAccessorCommand}.
 */
export interface UpdateDataAccessorCommandInput extends UpdateDataAccessorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataAccessorCommand}.
 */
export interface UpdateDataAccessorCommandOutput extends UpdateDataAccessorResponse, __MetadataBearer {}

/**
 * <p>Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateDataAccessorCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateDataAccessorCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // UpdateDataAccessorRequest
 *   applicationId: "STRING_VALUE", // required
 *   dataAccessorId: "STRING_VALUE", // required
 *   actionConfigurations: [ // ActionConfigurationList // required
 *     { // ActionConfiguration
 *       action: "STRING_VALUE", // required
 *       filterConfiguration: { // ActionFilterConfiguration
 *         documentAttributeFilter: { // AttributeFilter
 *           andAllFilters: [ // AttributeFilters
 *             {
 *               andAllFilters: [
 *                 "<AttributeFilter>",
 *               ],
 *               orAllFilters: [
 *                 "<AttributeFilter>",
 *               ],
 *               notFilter: "<AttributeFilter>",
 *               equalsTo: { // DocumentAttribute
 *                 name: "STRING_VALUE", // required
 *                 value: { // DocumentAttributeValue Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   stringListValue: [ // DocumentAttributeStringListValue
 *                     "STRING_VALUE",
 *                   ],
 *                   longValue: Number("long"),
 *                   dateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               containsAll: {
 *                 name: "STRING_VALUE", // required
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   stringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   longValue: Number("long"),
 *                   dateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               containsAny: {
 *                 name: "STRING_VALUE", // required
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   stringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   longValue: Number("long"),
 *                   dateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               greaterThan: {
 *                 name: "STRING_VALUE", // required
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   stringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   longValue: Number("long"),
 *                   dateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               greaterThanOrEquals: {
 *                 name: "STRING_VALUE", // required
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   stringListValue: [
 *                     "STRING_VALUE",
 *                   ],
 *                   longValue: Number("long"),
 *                   dateValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               lessThan: "<DocumentAttribute>",
 *               lessThanOrEquals: "<DocumentAttribute>",
 *             },
 *           ],
 *           orAllFilters: [
 *             "<AttributeFilter>",
 *           ],
 *           notFilter: "<AttributeFilter>",
 *           equalsTo: "<DocumentAttribute>",
 *           containsAll: "<DocumentAttribute>",
 *           containsAny: "<DocumentAttribute>",
 *           greaterThan: "<DocumentAttribute>",
 *           greaterThanOrEquals: "<DocumentAttribute>",
 *           lessThan: "<DocumentAttribute>",
 *           lessThanOrEquals: "<DocumentAttribute>",
 *         },
 *       },
 *     },
 *   ],
 *   authenticationDetail: { // DataAccessorAuthenticationDetail
 *     authenticationType: "AWS_IAM_IDC_TTI" || "AWS_IAM_IDC_AUTH_CODE", // required
 *     authenticationConfiguration: { // DataAccessorAuthenticationConfiguration Union: only one key present
 *       idcTrustedTokenIssuerConfiguration: { // DataAccessorIdcTrustedTokenIssuerConfiguration
 *         idcTrustedTokenIssuerArn: "STRING_VALUE", // required
 *       },
 *     },
 *     externalIds: [ // DataAccessorExternalIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   displayName: "STRING_VALUE",
 * };
 * const command = new UpdateDataAccessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataAccessorCommandInput - {@link UpdateDataAccessorCommandInput}
 * @returns {@link UpdateDataAccessorCommandOutput}
 * @see {@link UpdateDataAccessorCommandInput} for command's `input` shape.
 * @see {@link UpdateDataAccessorCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class UpdateDataAccessorCommand extends $Command
  .classBuilder<
    UpdateDataAccessorCommandInput,
    UpdateDataAccessorCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "UpdateDataAccessor", {})
  .n("QBusinessClient", "UpdateDataAccessorCommand")
  .sc(UpdateDataAccessor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataAccessorRequest;
      output: {};
    };
    sdk: {
      input: UpdateDataAccessorCommandInput;
      output: UpdateDataAccessorCommandOutput;
    };
  };
}
