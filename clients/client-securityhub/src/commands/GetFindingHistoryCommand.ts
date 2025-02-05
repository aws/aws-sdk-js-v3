// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingHistoryRequest, GetFindingHistoryResponse } from "../models/models_2";
import { de_GetFindingHistoryCommand, se_GetFindingHistoryCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandInput extends GetFindingHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandOutput extends GetFindingHistoryResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns history for a Security Hub finding in the last 90 days. The history includes changes made to any fields in
 *          the Amazon Web Services Security Finding Format (ASFF).
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingHistoryCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingHistoryCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingHistoryRequest
 *   FindingIdentifier: { // AwsSecurityFindingIdentifier
 *     Id: "STRING_VALUE", // required
 *     ProductArn: "STRING_VALUE", // required
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingHistoryResponse
 * //   Records: [ // FindingHistoryRecordList
 * //     { // FindingHistoryRecord
 * //       FindingIdentifier: { // AwsSecurityFindingIdentifier
 * //         Id: "STRING_VALUE", // required
 * //         ProductArn: "STRING_VALUE", // required
 * //       },
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       FindingCreated: true || false,
 * //       UpdateSource: { // FindingHistoryUpdateSource
 * //         Type: "BATCH_UPDATE_FINDINGS" || "BATCH_IMPORT_FINDINGS",
 * //         Identity: "STRING_VALUE",
 * //       },
 * //       Updates: [ // FindingHistoryUpdatesList
 * //         { // FindingHistoryUpdate
 * //           UpdatedField: "STRING_VALUE",
 * //           OldValue: "STRING_VALUE",
 * //           NewValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingHistoryCommandInput - {@link GetFindingHistoryCommandInput}
 * @returns {@link GetFindingHistoryCommandOutput}
 * @see {@link GetFindingHistoryCommandInput} for command's `input` shape.
 * @see {@link GetFindingHistoryCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To get finding history
 * ```javascript
 * // The following example retrieves the history of the specified finding during the specified time frame. If the time frame permits, Security Hub returns finding history for the last 90 days.
 * const input = {
 *   "EndTime": "2021-09-31T15:53:35.573Z",
 *   "FindingIdentifier": {
 *     "Id": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "ProductArn": "arn:aws:securityhub:us-west-2:123456789012:product/123456789012/default"
 *   },
 *   "MaxResults": 2,
 *   "StartTime": "2021-09-30T15:53:35.573Z"
 * };
 * const command = new GetFindingHistoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Records": [
 *     {
 *       "FindingCreated": false,
 *       "FindingIdentifier": {
 *         "Id": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *         "ProductArn": "arn:aws:securityhub:us-west-2:123456789012:product/123456789012/default"
 *       },
 *       "UpdateSource": {
 *         "Identity": "arn:aws:iam::444455556666:role/Admin",
 *         "Type": "BATCH_UPDATE_FINDINGS"
 *       },
 *       "UpdateTime": "2021-09-31T15:52:25.573Z",
 *       "Updates": [
 *         {
 *           "NewValue": "MEDIUM",
 *           "OldValue": "HIGH",
 *           "UpdatedField": "Severity"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-finding-history-1680270012186
 * ```
 *
 */
export class GetFindingHistoryCommand extends $Command
  .classBuilder<
    GetFindingHistoryCommandInput,
    GetFindingHistoryCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetFindingHistory", {})
  .n("SecurityHubClient", "GetFindingHistoryCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingHistoryCommand)
  .de(de_GetFindingHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingHistoryRequest;
      output: GetFindingHistoryResponse;
    };
    sdk: {
      input: GetFindingHistoryCommandInput;
      output: GetFindingHistoryCommandOutput;
    };
  };
}
