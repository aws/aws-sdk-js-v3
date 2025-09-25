// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInboundDmarcSettingsRequest, DescribeInboundDmarcSettingsResponse } from "../models/models_0";
import { DescribeInboundDmarcSettings } from "../schemas/schemas_41_DescribeInboundDmarcSettings";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInboundDmarcSettingsCommand}.
 */
export interface DescribeInboundDmarcSettingsCommandInput extends DescribeInboundDmarcSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundDmarcSettingsCommand}.
 */
export interface DescribeInboundDmarcSettingsCommandOutput
  extends DescribeInboundDmarcSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the settings in a DMARC policy for a specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeInboundDmarcSettingsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeInboundDmarcSettingsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeInboundDmarcSettingsRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInboundDmarcSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundDmarcSettingsResponse
 * //   Enforced: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeInboundDmarcSettingsCommandInput - {@link DescribeInboundDmarcSettingsCommandInput}
 * @returns {@link DescribeInboundDmarcSettingsCommandOutput}
 * @see {@link DescribeInboundDmarcSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundDmarcSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeInboundDmarcSettingsCommand extends $Command
  .classBuilder<
    DescribeInboundDmarcSettingsCommandInput,
    DescribeInboundDmarcSettingsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DescribeInboundDmarcSettings", {})
  .n("WorkMailClient", "DescribeInboundDmarcSettingsCommand")
  .sc(DescribeInboundDmarcSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundDmarcSettingsRequest;
      output: DescribeInboundDmarcSettingsResponse;
    };
    sdk: {
      input: DescribeInboundDmarcSettingsCommandInput;
      output: DescribeInboundDmarcSettingsCommandOutput;
    };
  };
}
