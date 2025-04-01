// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGlobalSettingsOutput } from "../models/models_0";
import { de_GetGlobalSettingsCommand, se_GetGlobalSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandOutput extends GetGlobalSettingsOutput, __MetadataBearer {}

/**
 * <p>Global settings for all workloads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetGlobalSettingsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = {};
 * const command = new GetGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetGlobalSettingsOutput
 * //   OrganizationSharingStatus: "ENABLED" || "DISABLED",
 * //   DiscoveryIntegrationStatus: "ENABLED" || "DISABLED",
 * //   JiraConfiguration: { // AccountJiraConfigurationOutput
 * //     IntegrationStatus: "CONFIGURED" || "NOT_CONFIGURED",
 * //     IssueManagementStatus: "ENABLED" || "DISABLED",
 * //     IssueManagementType: "AUTO" || "MANUAL",
 * //     Subdomain: "STRING_VALUE",
 * //     JiraProjectKey: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGlobalSettingsCommandInput - {@link GetGlobalSettingsCommandInput}
 * @returns {@link GetGlobalSettingsCommandOutput}
 * @see {@link GetGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link GetGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class GetGlobalSettingsCommand extends $Command
  .classBuilder<
    GetGlobalSettingsCommandInput,
    GetGlobalSettingsCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "GetGlobalSettings", {})
  .n("WellArchitectedClient", "GetGlobalSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetGlobalSettingsCommand)
  .de(de_GetGlobalSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetGlobalSettingsOutput;
    };
    sdk: {
      input: GetGlobalSettingsCommandInput;
      output: GetGlobalSettingsCommandOutput;
    };
  };
}
