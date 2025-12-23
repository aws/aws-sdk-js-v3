// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMobileDeviceAccessOverrideRequest, GetMobileDeviceAccessOverrideResponse } from "../models/models_0";
import { GetMobileDeviceAccessOverride$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMobileDeviceAccessOverrideCommand}.
 */
export interface GetMobileDeviceAccessOverrideCommandInput extends GetMobileDeviceAccessOverrideRequest {}
/**
 * @public
 *
 * The output of {@link GetMobileDeviceAccessOverrideCommand}.
 */
export interface GetMobileDeviceAccessOverrideCommandOutput extends GetMobileDeviceAccessOverrideResponse, __MetadataBearer {}

/**
 * <p>Gets the mobile device access override for the given WorkMail organization, user, and device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessOverrideCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessOverrideCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetMobileDeviceAccessOverrideRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new GetMobileDeviceAccessOverrideCommand(input);
 * const response = await client.send(command);
 * // { // GetMobileDeviceAccessOverrideResponse
 * //   UserId: "STRING_VALUE",
 * //   DeviceId: "STRING_VALUE",
 * //   Effect: "ALLOW" || "DENY",
 * //   Description: "STRING_VALUE",
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMobileDeviceAccessOverrideCommandInput - {@link GetMobileDeviceAccessOverrideCommandInput}
 * @returns {@link GetMobileDeviceAccessOverrideCommandOutput}
 * @see {@link GetMobileDeviceAccessOverrideCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessOverrideCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class GetMobileDeviceAccessOverrideCommand extends $Command
  .classBuilder<
    GetMobileDeviceAccessOverrideCommandInput,
    GetMobileDeviceAccessOverrideCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "GetMobileDeviceAccessOverride", {})
  .n("WorkMailClient", "GetMobileDeviceAccessOverrideCommand")
  .sc(GetMobileDeviceAccessOverride$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMobileDeviceAccessOverrideRequest;
      output: GetMobileDeviceAccessOverrideResponse;
    };
    sdk: {
      input: GetMobileDeviceAccessOverrideCommandInput;
      output: GetMobileDeviceAccessOverrideCommandOutput;
    };
  };
}
