// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateCapacityManagerMonitoredTagKeysRequest,
  UpdateCapacityManagerMonitoredTagKeysResult,
} from "../models/models_7";
import { UpdateCapacityManagerMonitoredTagKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapacityManagerMonitoredTagKeysCommand}.
 */
export interface UpdateCapacityManagerMonitoredTagKeysCommandInput extends UpdateCapacityManagerMonitoredTagKeysRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCapacityManagerMonitoredTagKeysCommand}.
 */
export interface UpdateCapacityManagerMonitoredTagKeysCommandOutput extends UpdateCapacityManagerMonitoredTagKeysResult, __MetadataBearer {}

/**
 * <p>
 * Activates or deactivates tag keys for monitoring by EC2 Capacity Manager. Activated tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateCapacityManagerMonitoredTagKeysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateCapacityManagerMonitoredTagKeysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UpdateCapacityManagerMonitoredTagKeysRequest
 *   ActivateTagKeys: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   DeactivateTagKeys: [
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateCapacityManagerMonitoredTagKeysCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapacityManagerMonitoredTagKeysResult
 * //   CapacityManagerTagKeys: [ // CapacityManagerMonitoredTagKeyList
 * //     { // CapacityManagerMonitoredTagKey
 * //       TagKey: "STRING_VALUE",
 * //       Status: "activating" || "activated" || "deactivating" || "suspended",
 * //       StatusMessage: "STRING_VALUE",
 * //       CapacityManagerProvided: true || false,
 * //       EarliestDatapointTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateCapacityManagerMonitoredTagKeysCommandInput - {@link UpdateCapacityManagerMonitoredTagKeysCommandInput}
 * @returns {@link UpdateCapacityManagerMonitoredTagKeysCommandOutput}
 * @see {@link UpdateCapacityManagerMonitoredTagKeysCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityManagerMonitoredTagKeysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class UpdateCapacityManagerMonitoredTagKeysCommand extends $Command
  .classBuilder<
    UpdateCapacityManagerMonitoredTagKeysCommandInput,
    UpdateCapacityManagerMonitoredTagKeysCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "UpdateCapacityManagerMonitoredTagKeys", {})
  .n("EC2Client", "UpdateCapacityManagerMonitoredTagKeysCommand")
  .sc(UpdateCapacityManagerMonitoredTagKeys$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCapacityManagerMonitoredTagKeysRequest;
      output: UpdateCapacityManagerMonitoredTagKeysResult;
    };
    sdk: {
      input: UpdateCapacityManagerMonitoredTagKeysCommandInput;
      output: UpdateCapacityManagerMonitoredTagKeysCommandOutput;
    };
  };
}
