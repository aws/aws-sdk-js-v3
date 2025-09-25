// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueueEnvironmentsRequest, ListQueueEnvironmentsResponse } from "../models/models_1";
import { ListQueueEnvironments } from "../schemas/schemas_7_Queue";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueueEnvironmentsCommand}.
 */
export interface ListQueueEnvironmentsCommandInput extends ListQueueEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueEnvironmentsCommand}.
 */
export interface ListQueueEnvironmentsCommandOutput extends ListQueueEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Lists queue environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListQueueEnvironmentsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListQueueEnvironmentsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListQueueEnvironmentsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueueEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueEnvironmentsResponse
 * //   environments: [ // QueueEnvironmentSummaries // required
 * //     { // QueueEnvironmentSummary
 * //       queueEnvironmentId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       priority: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueEnvironmentsCommandInput - {@link ListQueueEnvironmentsCommandInput}
 * @returns {@link ListQueueEnvironmentsCommandOutput}
 * @see {@link ListQueueEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListQueueEnvironmentsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListQueueEnvironmentsCommand extends $Command
  .classBuilder<
    ListQueueEnvironmentsCommandInput,
    ListQueueEnvironmentsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListQueueEnvironments", {})
  .n("DeadlineClient", "ListQueueEnvironmentsCommand")
  .sc(ListQueueEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueEnvironmentsRequest;
      output: ListQueueEnvironmentsResponse;
    };
    sdk: {
      input: ListQueueEnvironmentsCommandInput;
      output: ListQueueEnvironmentsCommandOutput;
    };
  };
}
