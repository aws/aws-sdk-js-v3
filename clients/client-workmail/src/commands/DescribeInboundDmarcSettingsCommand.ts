// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInboundDmarcSettingsRequest, DescribeInboundDmarcSettingsResponse } from "../models/models_0";
import { DescribeInboundDmarcSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeInboundDmarcSettingsCommandOutput extends DescribeInboundDmarcSettingsResponse, __MetadataBearer {}

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
export class DescribeInboundDmarcSettingsCommand extends command<DescribeInboundDmarcSettingsCommandInput, DescribeInboundDmarcSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInboundDmarcSettings",
  DescribeInboundDmarcSettings$
) {
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
