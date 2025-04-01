// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListNotificationChannelsRequest, ListNotificationChannelsResponse } from "../models/models_0";
import { de_ListNotificationChannelsCommand, se_ListNotificationChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationChannelsCommand}.
 */
export interface ListNotificationChannelsCommandInput extends ListNotificationChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationChannelsCommand}.
 */
export interface ListNotificationChannelsCommandOutput extends ListNotificationChannelsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of notification channels configured for DevOps Guru. Each notification
 * 			channel is used to notify you when DevOps Guru generates an insight that contains information
 * 			about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListNotificationChannelsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListNotificationChannelsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListNotificationChannelsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationChannelsResponse
 * //   Channels: [ // Channels
 * //     { // NotificationChannel
 * //       Id: "STRING_VALUE",
 * //       Config: { // NotificationChannelConfig
 * //         Sns: { // SnsChannelConfig
 * //           TopicArn: "STRING_VALUE",
 * //         },
 * //         Filters: { // NotificationFilterConfig
 * //           Severities: [ // InsightSeverities
 * //             "LOW" || "MEDIUM" || "HIGH",
 * //           ],
 * //           MessageTypes: [ // NotificationMessageTypes
 * //             "NEW_INSIGHT" || "CLOSED_INSIGHT" || "NEW_ASSOCIATION" || "SEVERITY_UPGRADED" || "NEW_RECOMMENDATION",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationChannelsCommandInput - {@link ListNotificationChannelsCommandInput}
 * @returns {@link ListNotificationChannelsCommandOutput}
 * @see {@link ListNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class ListNotificationChannelsCommand extends $Command
  .classBuilder<
    ListNotificationChannelsCommandInput,
    ListNotificationChannelsCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "ListNotificationChannels", {})
  .n("DevOpsGuruClient", "ListNotificationChannelsCommand")
  .f(void 0, void 0)
  .ser(se_ListNotificationChannelsCommand)
  .de(de_ListNotificationChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationChannelsRequest;
      output: ListNotificationChannelsResponse;
    };
    sdk: {
      input: ListNotificationChannelsCommandInput;
      output: ListNotificationChannelsCommandOutput;
    };
  };
}
