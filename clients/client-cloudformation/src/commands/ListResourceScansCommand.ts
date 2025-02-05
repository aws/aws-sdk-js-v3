// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceScansInput, ListResourceScansOutput } from "../models/models_0";
import { de_ListResourceScansCommand, se_ListResourceScansCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceScansCommand}.
 */
export interface ListResourceScansCommandInput extends ListResourceScansInput {}
/**
 * @public
 *
 * The output of {@link ListResourceScansCommand}.
 */
export interface ListResourceScansCommandOutput extends ListResourceScansOutput, __MetadataBearer {}

/**
 * <p>List the resource scans from newest to oldest. By default it will return up to 10 resource
 *       scans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListResourceScansCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListResourceScansCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // ListResourceScansInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceScansCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceScansOutput
 * //   ResourceScanSummaries: [ // ResourceScanSummaries
 * //     { // ResourceScanSummary
 * //       ResourceScanId: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "FAILED" || "COMPLETE" || "EXPIRED",
 * //       StatusReason: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       PercentageCompleted: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceScansCommandInput - {@link ListResourceScansCommandInput}
 * @returns {@link ListResourceScansCommandOutput}
 * @see {@link ListResourceScansCommandInput} for command's `input` shape.
 * @see {@link ListResourceScansCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 * @example Listing Resource Scans
 * ```javascript
 * // This example shows how to list resource scans
 * const input = {};
 * const command = new ListResourceScansCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ResourceScanSummaries": [
 *     {
 *       "PercentageCompleted": 37.4,
 *       "ResourceScanId": "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/51448627-817f-40f0-b37c-f6e0f974340c",
 *       "StartTime": "2024-01-24T00:33:29.673000+00:00",
 *       "Status": "IN_PROGRESS"
 *     },
 *     {
 *       "EndTime": "2024-01-02T23:25:48.075000+00:00",
 *       "PercentageCompleted": 100,
 *       "ResourceScanId": "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1",
 *       "StartTime": "2024-01-02T22:15:18.382000+00:00",
 *       "Status": "COMPLETE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-resource-scans
 * ```
 *
 */
export class ListResourceScansCommand extends $Command
  .classBuilder<
    ListResourceScansCommandInput,
    ListResourceScansCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListResourceScans", {})
  .n("CloudFormationClient", "ListResourceScansCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceScansCommand)
  .de(de_ListResourceScansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceScansInput;
      output: ListResourceScansOutput;
    };
    sdk: {
      input: ListResourceScansCommandInput;
      output: ListResourceScansCommandOutput;
    };
  };
}
