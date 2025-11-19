// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableInstanceSqlHaStandbyDetectionsRequest,
  DisableInstanceSqlHaStandbyDetectionsResult,
} from "../models/models_5";
import { DisableInstanceSqlHaStandbyDetections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableInstanceSqlHaStandbyDetectionsCommand}.
 */
export interface DisableInstanceSqlHaStandbyDetectionsCommandInput
  extends DisableInstanceSqlHaStandbyDetectionsRequest {}
/**
 * @public
 *
 * The output of {@link DisableInstanceSqlHaStandbyDetectionsCommand}.
 */
export interface DisableInstanceSqlHaStandbyDetectionsCommandOutput
  extends DisableInstanceSqlHaStandbyDetectionsResult,
    __MetadataBearer {}

/**
 * <p>Disable Amazon EC2 instances running in an SQL Server High Availability cluster from SQL Server High Availability
 *       instance standby detection monitoring. Once disabled, Amazon Web Services no longer monitors the
 *       metadata for the instances to determine whether they are active or standby nodes in the
 *       SQL Server High Availability cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableInstanceSqlHaStandbyDetectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableInstanceSqlHaStandbyDetectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableInstanceSqlHaStandbyDetectionsRequest
 *   InstanceIds: [ // InstanceIdUpdateStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisableInstanceSqlHaStandbyDetectionsCommand(input);
 * const response = await client.send(command);
 * // { // DisableInstanceSqlHaStandbyDetectionsResult
 * //   Instances: [ // RegisteredInstanceList
 * //     { // RegisteredInstance
 * //       InstanceId: "STRING_VALUE",
 * //       SqlServerLicenseUsage: "full" || "waived",
 * //       HaStatus: "processing" || "active" || "standby" || "invalid",
 * //       ProcessingStatus: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       SqlServerCredentials: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableInstanceSqlHaStandbyDetectionsCommandInput - {@link DisableInstanceSqlHaStandbyDetectionsCommandInput}
 * @returns {@link DisableInstanceSqlHaStandbyDetectionsCommandOutput}
 * @see {@link DisableInstanceSqlHaStandbyDetectionsCommandInput} for command's `input` shape.
 * @see {@link DisableInstanceSqlHaStandbyDetectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableInstanceSqlHaStandbyDetectionsCommand extends $Command
  .classBuilder<
    DisableInstanceSqlHaStandbyDetectionsCommandInput,
    DisableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableInstanceSqlHaStandbyDetections", {})
  .n("EC2Client", "DisableInstanceSqlHaStandbyDetectionsCommand")
  .sc(DisableInstanceSqlHaStandbyDetections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableInstanceSqlHaStandbyDetectionsRequest;
      output: DisableInstanceSqlHaStandbyDetectionsResult;
    };
    sdk: {
      input: DisableInstanceSqlHaStandbyDetectionsCommandInput;
      output: DisableInstanceSqlHaStandbyDetectionsCommandOutput;
    };
  };
}
