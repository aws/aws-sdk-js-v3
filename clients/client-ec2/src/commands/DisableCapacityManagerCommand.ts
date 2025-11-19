// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableCapacityManagerRequest, DisableCapacityManagerResult } from "../models/models_5";
import { DisableCapacityManager } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableCapacityManagerCommand}.
 */
export interface DisableCapacityManagerCommandInput extends DisableCapacityManagerRequest {}
/**
 * @public
 *
 * The output of {@link DisableCapacityManagerCommand}.
 */
export interface DisableCapacityManagerCommandOutput extends DisableCapacityManagerResult, __MetadataBearer {}

/**
 * <p>
 * Disables EC2 Capacity Manager for your account. This stops data ingestion and removes access to capacity analytics and optimization recommendations.
 * Previously collected data is retained but no new data will be processed.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableCapacityManagerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableCapacityManagerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableCapacityManagerRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisableCapacityManagerCommand(input);
 * const response = await client.send(command);
 * // { // DisableCapacityManagerResult
 * //   CapacityManagerStatus: "enabled" || "disabled",
 * //   OrganizationsAccess: true || false,
 * // };
 *
 * ```
 *
 * @param DisableCapacityManagerCommandInput - {@link DisableCapacityManagerCommandInput}
 * @returns {@link DisableCapacityManagerCommandOutput}
 * @see {@link DisableCapacityManagerCommandInput} for command's `input` shape.
 * @see {@link DisableCapacityManagerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableCapacityManagerCommand extends $Command
  .classBuilder<
    DisableCapacityManagerCommandInput,
    DisableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableCapacityManager", {})
  .n("EC2Client", "DisableCapacityManagerCommand")
  .sc(DisableCapacityManager)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableCapacityManagerRequest;
      output: DisableCapacityManagerResult;
    };
    sdk: {
      input: DisableCapacityManagerCommandInput;
      output: DisableCapacityManagerCommandOutput;
    };
  };
}
