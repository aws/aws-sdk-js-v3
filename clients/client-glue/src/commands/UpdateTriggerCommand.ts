// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/models_3";
import { de_UpdateTriggerCommand, se_UpdateTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTriggerCommand}.
 */
export interface UpdateTriggerCommandInput extends UpdateTriggerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTriggerCommand}.
 */
export interface UpdateTriggerCommandOutput extends UpdateTriggerResponse, __MetadataBearer {}

/**
 * <p>Updates a trigger definition.</p>
 *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // UpdateTriggerRequest
 *   Name: "STRING_VALUE", // required
 *   TriggerUpdate: { // TriggerUpdate
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     Schedule: "STRING_VALUE",
 *     Actions: [ // ActionList
 *       { // Action
 *         JobName: "STRING_VALUE",
 *         Arguments: { // GenericMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Timeout: Number("int"),
 *         SecurityConfiguration: "STRING_VALUE",
 *         NotificationProperty: { // NotificationProperty
 *           NotifyDelayAfter: Number("int"),
 *         },
 *         CrawlerName: "STRING_VALUE",
 *       },
 *     ],
 *     Predicate: { // Predicate
 *       Logical: "AND" || "ANY",
 *       Conditions: [ // ConditionList
 *         { // Condition
 *           LogicalOperator: "EQUALS",
 *           JobName: "STRING_VALUE",
 *           State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 *           CrawlerName: "STRING_VALUE",
 *           CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 *         },
 *       ],
 *     },
 *     EventBatchingCondition: { // EventBatchingCondition
 *       BatchSize: Number("int"), // required
 *       BatchWindow: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateTriggerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTriggerResponse
 * //   Trigger: { // Trigger
 * //     Name: "STRING_VALUE",
 * //     WorkflowName: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //     State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //     Description: "STRING_VALUE",
 * //     Schedule: "STRING_VALUE",
 * //     Actions: [ // ActionList
 * //       { // Action
 * //         JobName: "STRING_VALUE",
 * //         Arguments: { // GenericMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Timeout: Number("int"),
 * //         SecurityConfiguration: "STRING_VALUE",
 * //         NotificationProperty: { // NotificationProperty
 * //           NotifyDelayAfter: Number("int"),
 * //         },
 * //         CrawlerName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Predicate: { // Predicate
 * //       Logical: "AND" || "ANY",
 * //       Conditions: [ // ConditionList
 * //         { // Condition
 * //           LogicalOperator: "EQUALS",
 * //           JobName: "STRING_VALUE",
 * //           State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //           CrawlerName: "STRING_VALUE",
 * //           CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //         },
 * //       ],
 * //     },
 * //     EventBatchingCondition: { // EventBatchingCondition
 * //       BatchSize: Number("int"), // required
 * //       BatchWindow: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTriggerCommandInput - {@link UpdateTriggerCommandInput}
 * @returns {@link UpdateTriggerCommandOutput}
 * @see {@link UpdateTriggerCommandInput} for command's `input` shape.
 * @see {@link UpdateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @public
 */
export class UpdateTriggerCommand extends $Command
  .classBuilder<
    UpdateTriggerCommandInput,
    UpdateTriggerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateTrigger", {})
  .n("GlueClient", "UpdateTriggerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTriggerCommand)
  .de(de_UpdateTriggerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTriggerRequest;
      output: UpdateTriggerResponse;
    };
    sdk: {
      input: UpdateTriggerCommandInput;
      output: UpdateTriggerCommandOutput;
    };
  };
}
