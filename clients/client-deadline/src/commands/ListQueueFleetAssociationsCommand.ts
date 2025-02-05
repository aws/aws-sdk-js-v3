// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueueFleetAssociationsRequest, ListQueueFleetAssociationsResponse } from "../models/models_1";
import { de_ListQueueFleetAssociationsCommand, se_ListQueueFleetAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueueFleetAssociationsCommand}.
 */
export interface ListQueueFleetAssociationsCommandInput extends ListQueueFleetAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueFleetAssociationsCommand}.
 */
export interface ListQueueFleetAssociationsCommandOutput extends ListQueueFleetAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists queue-fleet associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListQueueFleetAssociationsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListQueueFleetAssociationsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // ListQueueFleetAssociationsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE",
 *   fleetId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueueFleetAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueFleetAssociationsResponse
 * //   queueFleetAssociations: [ // QueueFleetAssociationSummaries // required
 * //     { // QueueFleetAssociationSummary
 * //       queueId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS" || "STOPPED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueFleetAssociationsCommandInput - {@link ListQueueFleetAssociationsCommandInput}
 * @returns {@link ListQueueFleetAssociationsCommandOutput}
 * @see {@link ListQueueFleetAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListQueueFleetAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class ListQueueFleetAssociationsCommand extends $Command
  .classBuilder<
    ListQueueFleetAssociationsCommandInput,
    ListQueueFleetAssociationsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListQueueFleetAssociations", {})
  .n("DeadlineClient", "ListQueueFleetAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListQueueFleetAssociationsCommand)
  .de(de_ListQueueFleetAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueFleetAssociationsRequest;
      output: ListQueueFleetAssociationsResponse;
    };
    sdk: {
      input: ListQueueFleetAssociationsCommandInput;
      output: ListQueueFleetAssociationsCommandOutput;
    };
  };
}
