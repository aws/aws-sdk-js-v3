// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetCapacityManagerMonitoredTagKeysRequest,
  GetCapacityManagerMonitoredTagKeysResult,
} from "../models/models_5";
import { GetCapacityManagerMonitoredTagKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityManagerMonitoredTagKeysCommand}.
 */
export interface GetCapacityManagerMonitoredTagKeysCommandInput extends GetCapacityManagerMonitoredTagKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityManagerMonitoredTagKeysCommand}.
 */
export interface GetCapacityManagerMonitoredTagKeysCommandOutput extends GetCapacityManagerMonitoredTagKeysResult, __MetadataBearer {}

/**
 * <p>
 * Retrieves the tag keys that are currently being monitored by EC2 Capacity Manager. Monitored tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityManagerMonitoredTagKeysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityManagerMonitoredTagKeysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetCapacityManagerMonitoredTagKeysRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityManagerMonitoredTagKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityManagerMonitoredTagKeysResult
 * //   CapacityManagerTagKeys: [ // CapacityManagerMonitoredTagKeyList
 * //     { // CapacityManagerMonitoredTagKey
 * //       TagKey: "STRING_VALUE",
 * //       Status: "activating" || "activated" || "deactivating" || "suspended",
 * //       StatusMessage: "STRING_VALUE",
 * //       CapacityManagerProvided: true || false,
 * //       EarliestDatapointTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCapacityManagerMonitoredTagKeysCommandInput - {@link GetCapacityManagerMonitoredTagKeysCommandInput}
 * @returns {@link GetCapacityManagerMonitoredTagKeysCommandOutput}
 * @see {@link GetCapacityManagerMonitoredTagKeysCommandInput} for command's `input` shape.
 * @see {@link GetCapacityManagerMonitoredTagKeysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetCapacityManagerMonitoredTagKeysCommand extends $Command
  .classBuilder<
    GetCapacityManagerMonitoredTagKeysCommandInput,
    GetCapacityManagerMonitoredTagKeysCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetCapacityManagerMonitoredTagKeys", {})
  .n("EC2Client", "GetCapacityManagerMonitoredTagKeysCommand")
  .sc(GetCapacityManagerMonitoredTagKeys$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityManagerMonitoredTagKeysRequest;
      output: GetCapacityManagerMonitoredTagKeysResult;
    };
    sdk: {
      input: GetCapacityManagerMonitoredTagKeysCommandInput;
      output: GetCapacityManagerMonitoredTagKeysCommandOutput;
    };
  };
}
