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
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListResourceScansInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ScanTypeFilter: "FULL" || "PARTIAL",
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
 * //       ScanType: "FULL" || "PARTIAL",
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
 *
 * @public
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
