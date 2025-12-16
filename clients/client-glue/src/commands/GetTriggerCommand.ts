// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetTriggerRequest, GetTriggerResponse } from "../models/models_2";
import { GetTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTriggerCommand}.
 */
export interface GetTriggerCommandInput extends GetTriggerRequest {}
/**
 * @public
 *
 * The output of {@link GetTriggerCommand}.
 */
export interface GetTriggerCommandOutput extends GetTriggerResponse, __MetadataBearer {}

/**
 * <p>Retrieves the definition of a trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetTriggerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTriggerCommand(input);
 * const response = await client.send(command);
 * // { // GetTriggerResponse
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
 * @param GetTriggerCommandInput - {@link GetTriggerCommandInput}
 * @returns {@link GetTriggerCommandOutput}
 * @see {@link GetTriggerCommandInput} for command's `input` shape.
 * @see {@link GetTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 *
 * @public
 */
export class GetTriggerCommand extends $Command
  .classBuilder<
    GetTriggerCommandInput,
    GetTriggerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetTrigger", {})
  .n("GlueClient", "GetTriggerCommand")
  .sc(GetTrigger$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTriggerRequest;
      output: GetTriggerResponse;
    };
    sdk: {
      input: GetTriggerCommandInput;
      output: GetTriggerCommandOutput;
    };
  };
}
