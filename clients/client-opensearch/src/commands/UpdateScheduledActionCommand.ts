// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateScheduledActionRequest, UpdateScheduledActionResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpdateScheduledActionCommand, se_UpdateScheduledActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandInput extends UpdateScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandOutput extends UpdateScheduledActionResponse, __MetadataBearer {}

/**
 * <p>Reschedules a planned domain configuration change for a later time. This change can be a
 *    scheduled <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *     Auto-Tune enhancement</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateScheduledActionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateScheduledActionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpdateScheduledActionRequest
 *   DomainName: "STRING_VALUE", // required
 *   ActionID: "STRING_VALUE", // required
 *   ActionType: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 *   ScheduleAt: "NOW" || "TIMESTAMP" || "OFF_PEAK_WINDOW", // required
 *   DesiredStartTime: Number("long"),
 * };
 * const command = new UpdateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledActionResponse
 * //   ScheduledAction: { // ScheduledAction
 * //     Id: "STRING_VALUE", // required
 * //     Type: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 * //     Severity: "HIGH" || "MEDIUM" || "LOW", // required
 * //     ScheduledTime: Number("long"), // required
 * //     Description: "STRING_VALUE",
 * //     ScheduledBy: "CUSTOMER" || "SYSTEM",
 * //     Status: "PENDING_UPDATE" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //     Mandatory: true || false,
 * //     Cancellable: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScheduledActionCommandInput - {@link UpdateScheduledActionCommandInput}
 * @returns {@link UpdateScheduledActionCommandOutput}
 * @see {@link UpdateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link SlotNotAvailableException} (client fault)
 *  <p>An exception for attempting to schedule a domain action during an unavailable time slot.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class UpdateScheduledActionCommand extends $Command
  .classBuilder<
    UpdateScheduledActionCommandInput,
    UpdateScheduledActionCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "UpdateScheduledAction", {})
  .n("OpenSearchClient", "UpdateScheduledActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScheduledActionCommand)
  .de(de_UpdateScheduledActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduledActionRequest;
      output: UpdateScheduledActionResponse;
    };
    sdk: {
      input: UpdateScheduledActionCommandInput;
      output: UpdateScheduledActionCommandOutput;
    };
  };
}
