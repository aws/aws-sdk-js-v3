// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListMobileDeviceAccessOverridesRequest,
  ListMobileDeviceAccessOverridesResponse,
} from "../models/models_0";
import { ListMobileDeviceAccessOverrides } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMobileDeviceAccessOverridesCommand}.
 */
export interface ListMobileDeviceAccessOverridesCommandInput extends ListMobileDeviceAccessOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListMobileDeviceAccessOverridesCommand}.
 */
export interface ListMobileDeviceAccessOverridesCommandOutput
  extends ListMobileDeviceAccessOverridesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessOverridesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessOverridesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListMobileDeviceAccessOverridesRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   DeviceId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMobileDeviceAccessOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListMobileDeviceAccessOverridesResponse
 * //   Overrides: [ // MobileDeviceAccessOverridesList
 * //     { // MobileDeviceAccessOverride
 * //       UserId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       Description: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMobileDeviceAccessOverridesCommandInput - {@link ListMobileDeviceAccessOverridesCommandInput}
 * @returns {@link ListMobileDeviceAccessOverridesCommandOutput}
 * @see {@link ListMobileDeviceAccessOverridesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessOverridesCommandOutput} for command's `response` shape.
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
export class ListMobileDeviceAccessOverridesCommand extends $Command
  .classBuilder<
    ListMobileDeviceAccessOverridesCommandInput,
    ListMobileDeviceAccessOverridesCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "ListMobileDeviceAccessOverrides", {})
  .n("WorkMailClient", "ListMobileDeviceAccessOverridesCommand")
  .sc(ListMobileDeviceAccessOverrides)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMobileDeviceAccessOverridesRequest;
      output: ListMobileDeviceAccessOverridesResponse;
    };
    sdk: {
      input: ListMobileDeviceAccessOverridesCommandInput;
      output: ListMobileDeviceAccessOverridesCommandOutput;
    };
  };
}
