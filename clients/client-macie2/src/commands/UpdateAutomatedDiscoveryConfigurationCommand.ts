// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  UpdateAutomatedDiscoveryConfigurationRequest,
  UpdateAutomatedDiscoveryConfigurationResponse,
} from "../models/models_0";
import { UpdateAutomatedDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutomatedDiscoveryConfigurationCommand}.
 */
export interface UpdateAutomatedDiscoveryConfigurationCommandInput extends UpdateAutomatedDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutomatedDiscoveryConfigurationCommand}.
 */
export interface UpdateAutomatedDiscoveryConfigurationCommandOutput extends UpdateAutomatedDiscoveryConfigurationResponse, __MetadataBearer {}

/**
 * <p>Changes the configuration settings and status of automated sensitive data discovery for an organization or standalone account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateAutomatedDiscoveryConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateAutomatedDiscoveryConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // UpdateAutomatedDiscoveryConfigurationRequest
 *   autoEnableOrganizationMembers: "ALL" || "NEW" || "NONE",
 *   status: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateAutomatedDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAutomatedDiscoveryConfigurationCommandInput - {@link UpdateAutomatedDiscoveryConfigurationCommandInput}
 * @returns {@link UpdateAutomatedDiscoveryConfigurationCommandOutput}
 * @see {@link UpdateAutomatedDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomatedDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class UpdateAutomatedDiscoveryConfigurationCommand extends $Command
  .classBuilder<
    UpdateAutomatedDiscoveryConfigurationCommandInput,
    UpdateAutomatedDiscoveryConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "UpdateAutomatedDiscoveryConfiguration", {})
  .n("Macie2Client", "UpdateAutomatedDiscoveryConfigurationCommand")
  .sc(UpdateAutomatedDiscoveryConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutomatedDiscoveryConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateAutomatedDiscoveryConfigurationCommandInput;
      output: UpdateAutomatedDiscoveryConfigurationCommandOutput;
    };
  };
}
