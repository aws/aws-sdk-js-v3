// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetAutomatedDiscoveryConfigurationRequest,
  GetAutomatedDiscoveryConfigurationResponse,
} from "../models/models_0";
import {
  de_GetAutomatedDiscoveryConfigurationCommand,
  se_GetAutomatedDiscoveryConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutomatedDiscoveryConfigurationCommand}.
 */
export interface GetAutomatedDiscoveryConfigurationCommandInput extends GetAutomatedDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomatedDiscoveryConfigurationCommand}.
 */
export interface GetAutomatedDiscoveryConfigurationCommandOutput
  extends GetAutomatedDiscoveryConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the configuration settings and status of automated sensitive data discovery for an organization or standalone account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAutomatedDiscoveryConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAutomatedDiscoveryConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetAutomatedDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomatedDiscoveryConfigurationResponse
 * //   autoEnableOrganizationMembers: "ALL" || "NEW" || "NONE",
 * //   classificationScopeId: "STRING_VALUE",
 * //   disabledAt: new Date("TIMESTAMP"),
 * //   firstEnabledAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   sensitivityInspectionTemplateId: "STRING_VALUE",
 * //   status: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetAutomatedDiscoveryConfigurationCommandInput - {@link GetAutomatedDiscoveryConfigurationCommandInput}
 * @returns {@link GetAutomatedDiscoveryConfigurationCommandOutput}
 * @see {@link GetAutomatedDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAutomatedDiscoveryConfigurationCommandOutput} for command's `response` shape.
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
export class GetAutomatedDiscoveryConfigurationCommand extends $Command
  .classBuilder<
    GetAutomatedDiscoveryConfigurationCommandInput,
    GetAutomatedDiscoveryConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "GetAutomatedDiscoveryConfiguration", {})
  .n("Macie2Client", "GetAutomatedDiscoveryConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAutomatedDiscoveryConfigurationCommand)
  .de(de_GetAutomatedDiscoveryConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAutomatedDiscoveryConfigurationResponse;
    };
    sdk: {
      input: GetAutomatedDiscoveryConfigurationCommandInput;
      output: GetAutomatedDiscoveryConfigurationCommandOutput;
    };
  };
}
