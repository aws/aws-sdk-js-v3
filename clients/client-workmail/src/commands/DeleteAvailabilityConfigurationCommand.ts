// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAvailabilityConfigurationRequest, DeleteAvailabilityConfigurationResponse } from "../models/models_0";
import {
  de_DeleteAvailabilityConfigurationCommand,
  se_DeleteAvailabilityConfigurationCommand,
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
 * The input for {@link DeleteAvailabilityConfigurationCommand}.
 */
export interface DeleteAvailabilityConfigurationCommandInput extends DeleteAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAvailabilityConfigurationCommand}.
 */
export interface DeleteAvailabilityConfigurationCommandOutput
  extends DeleteAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkMailClient(config);
 * const input = { // DeleteAvailabilityConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAvailabilityConfigurationCommandInput - {@link DeleteAvailabilityConfigurationCommandInput}
 * @returns {@link DeleteAvailabilityConfigurationCommandOutput}
 * @see {@link DeleteAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAvailabilityConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteAvailabilityConfigurationCommand extends $Command
  .classBuilder<
    DeleteAvailabilityConfigurationCommandInput,
    DeleteAvailabilityConfigurationCommandOutput,
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
  .s("WorkMailService", "DeleteAvailabilityConfiguration", {})
  .n("WorkMailClient", "DeleteAvailabilityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAvailabilityConfigurationCommand)
  .de(de_DeleteAvailabilityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAvailabilityConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAvailabilityConfigurationCommandInput;
      output: DeleteAvailabilityConfigurationCommandOutput;
    };
  };
}
