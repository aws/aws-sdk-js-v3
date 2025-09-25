// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataAccessorResponse } from "../models/models_0";
import { CreateDataAccessorRequest } from "../models/models_1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { CreateDataAccessor } from "../schemas/schemas_11_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataAccessorCommand}.
 */
export interface CreateDataAccessorCommandInput extends CreateDataAccessorRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataAccessorCommand}.
 */
export interface CreateDataAccessorCommandOutput extends CreateDataAccessorResponse, __MetadataBearer {}

/**
 * <p>Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateDataAccessorCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateDataAccessorCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CreateDataAccessorRequest
 *   applicationId: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
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
 *   clientToken: "STRING_VALUE",
 *   displayName: "STRING_VALUE", // required
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
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataAccessorCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataAccessorResponse
 * //   dataAccessorId: "STRING_VALUE", // required
 * //   idcApplicationArn: "STRING_VALUE", // required
 * //   dataAccessorArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataAccessorCommandInput - {@link CreateDataAccessorCommandInput}
 * @returns {@link CreateDataAccessorCommandOutput}
 * @see {@link CreateDataAccessorCommandInput} for command's `input` shape.
 * @see {@link CreateDataAccessorCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
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
export class CreateDataAccessorCommand extends $Command
  .classBuilder<
    CreateDataAccessorCommandInput,
    CreateDataAccessorCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "CreateDataAccessor", {})
  .n("QBusinessClient", "CreateDataAccessorCommand")
  .sc(CreateDataAccessor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataAccessorRequest;
      output: CreateDataAccessorResponse;
    };
    sdk: {
      input: CreateDataAccessorCommandInput;
      output: CreateDataAccessorCommandOutput;
    };
  };
}
