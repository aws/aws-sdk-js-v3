// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMobileDeviceAccessOverrideRequest, DeleteMobileDeviceAccessOverrideResponse } from "../models/models_0";
import {
  de_DeleteMobileDeviceAccessOverrideCommand,
  se_DeleteMobileDeviceAccessOverrideCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMobileDeviceAccessOverrideCommand}.
 */
export interface DeleteMobileDeviceAccessOverrideCommandInput extends DeleteMobileDeviceAccessOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMobileDeviceAccessOverrideCommand}.
 */
export interface DeleteMobileDeviceAccessOverrideCommandOutput
  extends DeleteMobileDeviceAccessOverrideResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p>
 *          <note>
 *             <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMobileDeviceAccessOverrideCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMobileDeviceAccessOverrideCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteMobileDeviceAccessOverrideRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMobileDeviceAccessOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMobileDeviceAccessOverrideCommandInput - {@link DeleteMobileDeviceAccessOverrideCommandInput}
 * @returns {@link DeleteMobileDeviceAccessOverrideCommandOutput}
 * @see {@link DeleteMobileDeviceAccessOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteMobileDeviceAccessOverrideCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeleteMobileDeviceAccessOverrideCommand extends $Command
  .classBuilder<
    DeleteMobileDeviceAccessOverrideCommandInput,
    DeleteMobileDeviceAccessOverrideCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DeleteMobileDeviceAccessOverride", {})
  .n("WorkMailClient", "DeleteMobileDeviceAccessOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMobileDeviceAccessOverrideCommand)
  .de(de_DeleteMobileDeviceAccessOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMobileDeviceAccessOverrideRequest;
      output: {};
    };
    sdk: {
      input: DeleteMobileDeviceAccessOverrideCommandInput;
      output: DeleteMobileDeviceAccessOverrideCommandOutput;
    };
  };
}
