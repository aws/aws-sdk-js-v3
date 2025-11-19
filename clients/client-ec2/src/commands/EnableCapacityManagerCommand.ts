// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableCapacityManagerRequest, EnableCapacityManagerResult } from "../models/models_5";
import { EnableCapacityManager } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableCapacityManagerCommand}.
 */
export interface EnableCapacityManagerCommandInput extends EnableCapacityManagerRequest {}
/**
 * @public
 *
 * The output of {@link EnableCapacityManagerCommand}.
 */
export interface EnableCapacityManagerCommandOutput extends EnableCapacityManagerResult, __MetadataBearer {}

/**
 * <p>
 * Enables EC2 Capacity Manager for your account. This starts data ingestion for your EC2 capacity usage across On-Demand, Spot, and Capacity Reservations.
 * Initial data processing may take several hours to complete.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableCapacityManagerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableCapacityManagerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableCapacityManagerRequest
 *   OrganizationsAccess: true || false,
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new EnableCapacityManagerCommand(input);
 * const response = await client.send(command);
 * // { // EnableCapacityManagerResult
 * //   CapacityManagerStatus: "enabled" || "disabled",
 * //   OrganizationsAccess: true || false,
 * // };
 *
 * ```
 *
 * @param EnableCapacityManagerCommandInput - {@link EnableCapacityManagerCommandInput}
 * @returns {@link EnableCapacityManagerCommandOutput}
 * @see {@link EnableCapacityManagerCommandInput} for command's `input` shape.
 * @see {@link EnableCapacityManagerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableCapacityManagerCommand extends $Command
  .classBuilder<
    EnableCapacityManagerCommandInput,
    EnableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableCapacityManager", {})
  .n("EC2Client", "EnableCapacityManagerCommand")
  .sc(EnableCapacityManager)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableCapacityManagerRequest;
      output: EnableCapacityManagerResult;
    };
    sdk: {
      input: EnableCapacityManagerCommandInput;
      output: EnableCapacityManagerCommandOutput;
    };
  };
}
