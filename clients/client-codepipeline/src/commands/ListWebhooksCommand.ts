// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebhooksInput, ListWebhooksOutput } from "../models/models_0";
import { de_ListWebhooksCommand, se_ListWebhooksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebhooksCommand}.
 */
export interface ListWebhooksCommandInput extends ListWebhooksInput {}
/**
 * @public
 *
 * The output of {@link ListWebhooksCommand}.
 */
export interface ListWebhooksCommandOutput extends ListWebhooksOutput, __MetadataBearer {}

/**
 * <p>Gets a listing of all the webhooks in this Amazon Web Services Region for this
 *             account. The output lists all webhooks and includes the webhook URL and ARN and the
 *             configuration for each webhook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListWebhooksCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListWebhooksCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListWebhooksInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWebhooksCommand(input);
 * const response = await client.send(command);
 * // { // ListWebhooksOutput
 * //   webhooks: [ // WebhookList
 * //     { // ListWebhookItem
 * //       definition: { // WebhookDefinition
 * //         name: "STRING_VALUE", // required
 * //         targetPipeline: "STRING_VALUE", // required
 * //         targetAction: "STRING_VALUE", // required
 * //         filters: [ // WebhookFilters // required
 * //           { // WebhookFilterRule
 * //             jsonPath: "STRING_VALUE", // required
 * //             matchEquals: "STRING_VALUE",
 * //           },
 * //         ],
 * //         authentication: "GITHUB_HMAC" || "IP" || "UNAUTHENTICATED", // required
 * //         authenticationConfiguration: { // WebhookAuthConfiguration
 * //           AllowedIPRange: "STRING_VALUE",
 * //           SecretToken: "STRING_VALUE",
 * //         },
 * //       },
 * //       url: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       lastTriggered: new Date("TIMESTAMP"),
 * //       arn: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebhooksCommandInput - {@link ListWebhooksCommandInput}
 * @returns {@link ListWebhooksCommandOutput}
 * @see {@link ListWebhooksCommandInput} for command's `input` shape.
 * @see {@link ListWebhooksCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class ListWebhooksCommand extends $Command
  .classBuilder<
    ListWebhooksCommandInput,
    ListWebhooksCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "ListWebhooks", {})
  .n("CodePipelineClient", "ListWebhooksCommand")
  .f(void 0, void 0)
  .ser(se_ListWebhooksCommand)
  .de(de_ListWebhooksCommand)
  .build() {}
