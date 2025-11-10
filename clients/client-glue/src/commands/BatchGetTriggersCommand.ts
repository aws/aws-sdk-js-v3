// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetTriggersRequest, BatchGetTriggersResponse } from "../models/models_0";
import { BatchGetTriggers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTriggersCommand}.
 */
export interface BatchGetTriggersCommandInput extends BatchGetTriggersRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTriggersCommand}.
 */
export interface BatchGetTriggersCommandOutput extends BatchGetTriggersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetTriggersRequest
 *   TriggerNames: [ // TriggerNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetTriggersCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTriggersResponse
 * //   Triggers: [ // TriggerList
 * //     { // Trigger
 * //       Name: "STRING_VALUE",
 * //       WorkflowName: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //       State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //       Description: "STRING_VALUE",
 * //       Schedule: "STRING_VALUE",
 * //       Actions: [ // ActionList
 * //         { // Action
 * //           JobName: "STRING_VALUE",
 * //           Arguments: { // GenericMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Timeout: Number("int"),
 * //           SecurityConfiguration: "STRING_VALUE",
 * //           NotificationProperty: { // NotificationProperty
 * //             NotifyDelayAfter: Number("int"),
 * //           },
 * //           CrawlerName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Predicate: { // Predicate
 * //         Logical: "AND" || "ANY",
 * //         Conditions: [ // ConditionList
 * //           { // Condition
 * //             LogicalOperator: "EQUALS",
 * //             JobName: "STRING_VALUE",
 * //             State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //             CrawlerName: "STRING_VALUE",
 * //             CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //           },
 * //         ],
 * //       },
 * //       EventBatchingCondition: { // EventBatchingCondition
 * //         BatchSize: Number("int"), // required
 * //         BatchWindow: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   TriggersNotFound: [ // TriggerNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTriggersCommandInput - {@link BatchGetTriggersCommandInput}
 * @returns {@link BatchGetTriggersCommandOutput}
 * @see {@link BatchGetTriggersCommandInput} for command's `input` shape.
 * @see {@link BatchGetTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetTriggersCommand extends $Command
  .classBuilder<
    BatchGetTriggersCommandInput,
    BatchGetTriggersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchGetTriggers", {})
  .n("GlueClient", "BatchGetTriggersCommand")
  .sc(BatchGetTriggers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTriggersRequest;
      output: BatchGetTriggersResponse;
    };
    sdk: {
      input: BatchGetTriggersCommandInput;
      output: BatchGetTriggersCommandOutput;
    };
  };
}
