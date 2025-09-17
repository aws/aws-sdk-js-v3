// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueueLimitAssociationsRequest, ListQueueLimitAssociationsResponse } from "../models/models_1";
import { de_ListQueueLimitAssociationsCommand, se_ListQueueLimitAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueueLimitAssociationsCommand}.
 */
export interface ListQueueLimitAssociationsCommandInput extends ListQueueLimitAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueLimitAssociationsCommand}.
 */
export interface ListQueueLimitAssociationsCommandOutput extends ListQueueLimitAssociationsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the associations between queues and limits defined in a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListQueueLimitAssociationsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListQueueLimitAssociationsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListQueueLimitAssociationsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE",
 *   limitId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueueLimitAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueLimitAssociationsResponse
 * //   queueLimitAssociations: [ // QueueLimitAssociationSummaries // required
 * //     { // QueueLimitAssociationSummary
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       queueId: "STRING_VALUE", // required
 * //       limitId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS" || "STOP_LIMIT_USAGE_AND_CANCEL_TASKS" || "STOPPED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueLimitAssociationsCommandInput - {@link ListQueueLimitAssociationsCommandInput}
 * @returns {@link ListQueueLimitAssociationsCommandOutput}
 * @see {@link ListQueueLimitAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListQueueLimitAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListQueueLimitAssociationsCommand extends $Command
  .classBuilder<
    ListQueueLimitAssociationsCommandInput,
    ListQueueLimitAssociationsCommandOutput,
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
  .s("Deadline", "ListQueueLimitAssociations", {})
  .n("DeadlineClient", "ListQueueLimitAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListQueueLimitAssociationsCommand)
  .de(de_ListQueueLimitAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueLimitAssociationsRequest;
      output: ListQueueLimitAssociationsResponse;
    };
    sdk: {
      input: ListQueueLimitAssociationsCommandInput;
      output: ListQueueLimitAssociationsCommandOutput;
    };
  };
}
