// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStandardsControlRequest, UpdateStandardsControlResponse } from "../models/models_3";
import { UpdateStandardsControl } from "../schemas/schemas_45_Control";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStandardsControlCommand}.
 */
export interface UpdateStandardsControlCommandInput extends UpdateStandardsControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStandardsControlCommand}.
 */
export interface UpdateStandardsControlCommandOutput extends UpdateStandardsControlResponse, __MetadataBearer {}

/**
 * <p>Used to control whether an individual security standard control is enabled or
 *          disabled.</p>
 *          <p>Calls to this operation return a <code>RESOURCE_NOT_FOUND_EXCEPTION</code> error when the standard subscription for the control has <code>StandardsControlsUpdatable</code> value <code>NOT_READY_FOR_UPDATES</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateStandardsControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateStandardsControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateStandardsControlRequest
 *   StandardsControlArn: "STRING_VALUE", // required
 *   ControlStatus: "ENABLED" || "DISABLED",
 *   DisabledReason: "STRING_VALUE",
 * };
 * const command = new UpdateStandardsControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStandardsControlCommandInput - {@link UpdateStandardsControlCommandInput}
 * @returns {@link UpdateStandardsControlCommandOutput}
 * @see {@link UpdateStandardsControlCommandInput} for command's `input` shape.
 * @see {@link UpdateStandardsControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To update the enablement status of a standard control
 * ```javascript
 * // The following example disables the specified control in the specified security standard.
 * const input = {
 *   ControlStatus: "DISABLED",
 *   DisabledReason: "Not applicable to my service",
 *   StandardsControlArn: "arn:aws:securityhub:us-west-1:123456789012:control/pci-dss/v/3.2.1/PCI.AutoScaling.1"
 * };
 * const command = new UpdateStandardsControlCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateStandardsControlCommand extends $Command
  .classBuilder<
    UpdateStandardsControlCommandInput,
    UpdateStandardsControlCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "UpdateStandardsControl", {})
  .n("SecurityHubClient", "UpdateStandardsControlCommand")
  .sc(UpdateStandardsControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStandardsControlRequest;
      output: {};
    };
    sdk: {
      input: UpdateStandardsControlCommandInput;
      output: UpdateStandardsControlCommandOutput;
    };
  };
}
