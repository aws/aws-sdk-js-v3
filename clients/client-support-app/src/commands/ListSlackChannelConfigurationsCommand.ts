// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSlackChannelConfigurationsRequest, ListSlackChannelConfigurationsResult } from "../models/models_0";
import {
  de_ListSlackChannelConfigurationsCommand,
  se_ListSlackChannelConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSlackChannelConfigurationsCommand}.
 */
export interface ListSlackChannelConfigurationsCommandInput extends ListSlackChannelConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSlackChannelConfigurationsCommand}.
 */
export interface ListSlackChannelConfigurationsCommandOutput
  extends ListSlackChannelConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the Slack channel configurations for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, ListSlackChannelConfigurationsCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, ListSlackChannelConfigurationsCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // import type { SupportAppClientConfig } from "@aws-sdk/client-support-app";
 * const config = {}; // type is SupportAppClientConfig
 * const client = new SupportAppClient(config);
 * const input = { // ListSlackChannelConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlackChannelConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSlackChannelConfigurationsResult
 * //   nextToken: "STRING_VALUE",
 * //   slackChannelConfigurations: [ // slackChannelConfigurationList // required
 * //     { // SlackChannelConfiguration
 * //       teamId: "STRING_VALUE", // required
 * //       channelId: "STRING_VALUE", // required
 * //       channelName: "STRING_VALUE",
 * //       notifyOnCreateOrReopenCase: true || false,
 * //       notifyOnAddCorrespondenceToCase: true || false,
 * //       notifyOnResolveCase: true || false,
 * //       notifyOnCaseSeverity: "STRING_VALUE",
 * //       channelRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSlackChannelConfigurationsCommandInput - {@link ListSlackChannelConfigurationsCommandInput}
 * @returns {@link ListSlackChannelConfigurationsCommandOutput}
 * @see {@link ListSlackChannelConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSlackChannelConfigurationsCommandOutput} for command's `response` shape.
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
export class ListSlackChannelConfigurationsCommand extends $Command
  .classBuilder<
    ListSlackChannelConfigurationsCommandInput,
    ListSlackChannelConfigurationsCommandOutput,
    SupportAppClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAppClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SupportApp", "ListSlackChannelConfigurations", {})
  .n("SupportAppClient", "ListSlackChannelConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSlackChannelConfigurationsCommand)
  .de(de_ListSlackChannelConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSlackChannelConfigurationsRequest;
      output: ListSlackChannelConfigurationsResult;
    };
    sdk: {
      input: ListSlackChannelConfigurationsCommandInput;
      output: ListSlackChannelConfigurationsCommandOutput;
    };
  };
}
