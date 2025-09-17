// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataAccessorRequest } from "../models/models_0";
import { GetDataAccessorResponse, GetDataAccessorResponseFilterSensitiveLog } from "../models/models_1";
import { de_GetDataAccessorCommand, se_GetDataAccessorCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataAccessorCommand}.
 */
export interface GetDataAccessorCommandInput extends GetDataAccessorRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAccessorCommand}.
 */
export interface GetDataAccessorCommandOutput extends GetDataAccessorResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetDataAccessorCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetDataAccessorCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetDataAccessorRequest
 *   applicationId: "STRING_VALUE", // required
 *   dataAccessorId: "STRING_VALUE", // required
 * };
 * const command = new GetDataAccessorCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAccessorResponse
 * //   displayName: "STRING_VALUE",
 * //   dataAccessorId: "STRING_VALUE",
 * //   dataAccessorArn: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE",
 * //   idcApplicationArn: "STRING_VALUE",
 * //   principal: "STRING_VALUE",
 * //   actionConfigurations: [ // ActionConfigurationList
 * //     { // ActionConfiguration
 * //       action: "STRING_VALUE", // required
 * //       filterConfiguration: { // ActionFilterConfiguration
 * //         documentAttributeFilter: { // AttributeFilter
 * //           andAllFilters: [ // AttributeFilters
 * //             {
 * //               andAllFilters: [
 * //                 "<AttributeFilter>",
 * //               ],
 * //               orAllFilters: [
 * //                 "<AttributeFilter>",
 * //               ],
 * //               notFilter: "<AttributeFilter>",
 * //               equalsTo: { // DocumentAttribute
 * //                 name: "STRING_VALUE", // required
 * //                 value: { // DocumentAttributeValue Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   stringListValue: [ // DocumentAttributeStringListValue
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   longValue: Number("long"),
 * //                   dateValue: new Date("TIMESTAMP"),
 * //                 },
 * //               },
 * //               containsAll: {
 * //                 name: "STRING_VALUE", // required
 * //                 value: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   stringListValue: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   longValue: Number("long"),
 * //                   dateValue: new Date("TIMESTAMP"),
 * //                 },
 * //               },
 * //               containsAny: {
 * //                 name: "STRING_VALUE", // required
 * //                 value: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   stringListValue: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   longValue: Number("long"),
 * //                   dateValue: new Date("TIMESTAMP"),
 * //                 },
 * //               },
 * //               greaterThan: {
 * //                 name: "STRING_VALUE", // required
 * //                 value: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   stringListValue: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   longValue: Number("long"),
 * //                   dateValue: new Date("TIMESTAMP"),
 * //                 },
 * //               },
 * //               greaterThanOrEquals: {
 * //                 name: "STRING_VALUE", // required
 * //                 value: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   stringListValue: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   longValue: Number("long"),
 * //                   dateValue: new Date("TIMESTAMP"),
 * //                 },
 * //               },
 * //               lessThan: "<DocumentAttribute>",
 * //               lessThanOrEquals: "<DocumentAttribute>",
 * //             },
 * //           ],
 * //           orAllFilters: [
 * //             "<AttributeFilter>",
 * //           ],
 * //           notFilter: "<AttributeFilter>",
 * //           equalsTo: "<DocumentAttribute>",
 * //           containsAll: "<DocumentAttribute>",
 * //           containsAny: "<DocumentAttribute>",
 * //           greaterThan: "<DocumentAttribute>",
 * //           greaterThanOrEquals: "<DocumentAttribute>",
 * //           lessThan: "<DocumentAttribute>",
 * //           lessThanOrEquals: "<DocumentAttribute>",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   authenticationDetail: { // DataAccessorAuthenticationDetail
 * //     authenticationType: "AWS_IAM_IDC_TTI" || "AWS_IAM_IDC_AUTH_CODE", // required
 * //     authenticationConfiguration: { // DataAccessorAuthenticationConfiguration Union: only one key present
 * //       idcTrustedTokenIssuerConfiguration: { // DataAccessorIdcTrustedTokenIssuerConfiguration
 * //         idcTrustedTokenIssuerArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     externalIds: [ // DataAccessorExternalIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataAccessorCommandInput - {@link GetDataAccessorCommandInput}
 * @returns {@link GetDataAccessorCommandOutput}
 * @see {@link GetDataAccessorCommandInput} for command's `input` shape.
 * @see {@link GetDataAccessorCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
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
export class GetDataAccessorCommand extends $Command
  .classBuilder<
    GetDataAccessorCommandInput,
    GetDataAccessorCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "GetDataAccessor", {})
  .n("QBusinessClient", "GetDataAccessorCommand")
  .f(void 0, GetDataAccessorResponseFilterSensitiveLog)
  .ser(se_GetDataAccessorCommand)
  .de(de_GetDataAccessorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAccessorRequest;
      output: GetDataAccessorResponse;
    };
    sdk: {
      input: GetDataAccessorCommandInput;
      output: GetDataAccessorCommandOutput;
    };
  };
}
