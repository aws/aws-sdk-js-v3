// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfileNotificationsInput, ListProfileNotificationsOutput } from "../models/models_0";
import { de_ListProfileNotificationsCommand, se_ListProfileNotificationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileNotificationsCommand}.
 */
export interface ListProfileNotificationsCommandInput extends ListProfileNotificationsInput {}
/**
 * @public
 *
 * The output of {@link ListProfileNotificationsCommand}.
 */
export interface ListProfileNotificationsCommandOutput extends ListProfileNotificationsOutput, __MetadataBearer {}

/**
 * <p>List profile notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListProfileNotificationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListProfileNotificationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListProfileNotificationsInput
 *   WorkloadId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfileNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileNotificationsOutput
 * //   NotificationSummaries: [ // ProfileNotificationSummaries
 * //     { // ProfileNotificationSummary
 * //       CurrentProfileVersion: "STRING_VALUE",
 * //       LatestProfileVersion: "STRING_VALUE",
 * //       Type: "PROFILE_ANSWERS_UPDATED" || "PROFILE_DELETED",
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       WorkloadId: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileNotificationsCommandInput - {@link ListProfileNotificationsCommandInput}
 * @returns {@link ListProfileNotificationsCommandOutput}
 * @see {@link ListProfileNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListProfileNotificationsCommandOutput} for command's `response` shape.
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
export class ListProfileNotificationsCommand extends $Command
  .classBuilder<
    ListProfileNotificationsCommandInput,
    ListProfileNotificationsCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "ListProfileNotifications", {})
  .n("WellArchitectedClient", "ListProfileNotificationsCommand")
  .f(void 0, void 0)
  .ser(se_ListProfileNotificationsCommand)
  .de(de_ListProfileNotificationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileNotificationsInput;
      output: ListProfileNotificationsOutput;
    };
    sdk: {
      input: ListProfileNotificationsCommandInput;
      output: ListProfileNotificationsCommandOutput;
    };
  };
}
