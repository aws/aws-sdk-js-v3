// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListSlackWorkspaceConfigurationsRequest,
  ListSlackWorkspaceConfigurationsResult,
} from "../models/models_0";
import { ListSlackWorkspaceConfigurations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSlackWorkspaceConfigurationsCommand}.
 */
export interface ListSlackWorkspaceConfigurationsCommandInput extends ListSlackWorkspaceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSlackWorkspaceConfigurationsCommand}.
 */
export interface ListSlackWorkspaceConfigurationsCommandOutput extends ListSlackWorkspaceConfigurationsResult, __MetadataBearer {}

/**
 * <p>Lists the Slack workspace configurations for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, ListSlackWorkspaceConfigurationsCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, ListSlackWorkspaceConfigurationsCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // import type { SupportAppClientConfig } from "@aws-sdk/client-support-app";
 * const config = {}; // type is SupportAppClientConfig
 * const client = new SupportAppClient(config);
 * const input = { // ListSlackWorkspaceConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlackWorkspaceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSlackWorkspaceConfigurationsResult
 * //   nextToken: "STRING_VALUE",
 * //   slackWorkspaceConfigurations: [ // SlackWorkspaceConfigurationList
 * //     { // SlackWorkspaceConfiguration
 * //       teamId: "STRING_VALUE", // required
 * //       teamName: "STRING_VALUE",
 * //       allowOrganizationMemberAccount: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSlackWorkspaceConfigurationsCommandInput - {@link ListSlackWorkspaceConfigurationsCommandInput}
 * @returns {@link ListSlackWorkspaceConfigurationsCommandOutput}
 * @see {@link ListSlackWorkspaceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSlackWorkspaceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 *
 * @public
 */
export class ListSlackWorkspaceConfigurationsCommand extends $Command
  .classBuilder<
    ListSlackWorkspaceConfigurationsCommandInput,
    ListSlackWorkspaceConfigurationsCommandOutput,
    SupportAppClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAppClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SupportApp", "ListSlackWorkspaceConfigurations", {})
  .n("SupportAppClient", "ListSlackWorkspaceConfigurationsCommand")
  .sc(ListSlackWorkspaceConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSlackWorkspaceConfigurationsRequest;
      output: ListSlackWorkspaceConfigurationsResult;
    };
    sdk: {
      input: ListSlackWorkspaceConfigurationsCommandInput;
      output: ListSlackWorkspaceConfigurationsCommandOutput;
    };
  };
}
