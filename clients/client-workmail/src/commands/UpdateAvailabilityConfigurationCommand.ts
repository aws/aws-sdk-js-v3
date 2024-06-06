// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAvailabilityConfigurationRequest,
  UpdateAvailabilityConfigurationRequestFilterSensitiveLog,
  UpdateAvailabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateAvailabilityConfigurationCommand,
  se_UpdateAvailabilityConfigurationCommand,
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
 * The input for {@link UpdateAvailabilityConfigurationCommand}.
 */
export interface UpdateAvailabilityConfigurationCommandInput extends UpdateAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAvailabilityConfigurationCommand}.
 */
export interface UpdateAvailabilityConfigurationCommandOutput
  extends UpdateAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail
 *          organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // UpdateAvailabilityConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   EwsProvider: { // EwsAvailabilityProvider
 *     EwsEndpoint: "STRING_VALUE", // required
 *     EwsUsername: "STRING_VALUE", // required
 *     EwsPassword: "STRING_VALUE", // required
 *   },
 *   LambdaProvider: { // LambdaAvailabilityProvider
 *     LambdaArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAvailabilityConfigurationCommandInput - {@link UpdateAvailabilityConfigurationCommandInput}
 * @returns {@link UpdateAvailabilityConfigurationCommandOutput}
 * @see {@link UpdateAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
 * @public
 */
export class UpdateAvailabilityConfigurationCommand extends $Command
  .classBuilder<
    UpdateAvailabilityConfigurationCommandInput,
    UpdateAvailabilityConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "UpdateAvailabilityConfiguration", {})
  .n("WorkMailClient", "UpdateAvailabilityConfigurationCommand")
  .f(UpdateAvailabilityConfigurationRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateAvailabilityConfigurationCommand)
  .de(de_UpdateAvailabilityConfigurationCommand)
  .build() {}
