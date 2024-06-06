// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * <p>Updates an existing Amazon Q Business data source connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateDataSourceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateDataSourceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateDataSourceRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   configuration: "DOCUMENT_VALUE",
 *   vpcConfiguration: { // DataSourceVpcConfiguration
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   description: "STRING_VALUE",
 *   syncSchedule: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   documentEnrichmentConfiguration: { // DocumentEnrichmentConfiguration
 *     inlineConfigurations: [ // InlineDocumentEnrichmentConfigurations
 *       { // InlineDocumentEnrichmentConfiguration
 *         condition: { // DocumentAttributeCondition
 *           key: "STRING_VALUE", // required
 *           operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *           value: { // DocumentAttributeValue Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         target: { // DocumentAttributeTarget
 *           key: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *           attributeValueOperator: "DELETE",
 *         },
 *         documentContentOperator: "DELETE",
 *       },
 *     ],
 *     preExtractionHookConfiguration: { // HookConfiguration
 *       invocationCondition: {
 *         key: "STRING_VALUE", // required
 *         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           stringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           longValue: Number("long"),
 *           dateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       lambdaArn: "STRING_VALUE",
 *       s3BucketName: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *     },
 *     postExtractionHookConfiguration: {
 *       invocationCondition: {
 *         key: "STRING_VALUE", // required
 *         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           stringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           longValue: Number("long"),
 *           dateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       lambdaArn: "STRING_VALUE",
 *       s3BucketName: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class UpdateDataSourceCommand extends $Command
  .classBuilder<
    UpdateDataSourceCommandInput,
    UpdateDataSourceCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "UpdateDataSource", {})
  .n("QBusinessClient", "UpdateDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataSourceCommand)
  .de(de_UpdateDataSourceCommand)
  .build() {}
