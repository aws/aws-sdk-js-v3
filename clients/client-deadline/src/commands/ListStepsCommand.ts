// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStepsRequest } from "../models/models_0";
import { ListStepsResponse } from "../models/models_1";
import { de_ListStepsCommand, se_ListStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStepsCommand}.
 */
export interface ListStepsCommandInput extends ListStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListStepsCommand}.
 */
export interface ListStepsCommandOutput extends ListStepsResponse, __MetadataBearer {}

/**
 * <p>Lists steps for a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStepsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStepsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListStepsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListStepsResponse
 * //   steps: [ // StepSummaries // required
 * //     { // StepSummary
 * //       stepId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       lifecycleStatus: "CREATE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED", // required
 * //       lifecycleStatusMessage: "STRING_VALUE",
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //       taskRunStatusCounts: { // TaskRunStatusCounts // required
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       dependencyCounts: { // DependencyCounts
 * //         dependenciesResolved: Number("int"), // required
 * //         dependenciesUnresolved: Number("int"), // required
 * //         consumersResolved: Number("int"), // required
 * //         consumersUnresolved: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepsCommandInput - {@link ListStepsCommandInput}
 * @returns {@link ListStepsCommandOutput}
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
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
export class ListStepsCommand extends $Command
  .classBuilder<
    ListStepsCommandInput,
    ListStepsCommandOutput,
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
  .s("Deadline", "ListSteps", {})
  .n("DeadlineClient", "ListStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListStepsCommand)
  .de(de_ListStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStepsRequest;
      output: ListStepsResponse;
    };
    sdk: {
      input: ListStepsCommandInput;
      output: ListStepsCommandOutput;
    };
  };
}
