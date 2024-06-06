// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTriggersRequest, GetTriggersResponse } from "../models/models_2";
import { de_GetTriggersCommand, se_GetTriggersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTriggersCommand}.
 */
export interface GetTriggersCommandInput extends GetTriggersRequest {}
/**
 * @public
 *
 * The output of {@link GetTriggersCommand}.
 */
export interface GetTriggersCommandOutput extends GetTriggersResponse, __MetadataBearer {}

/**
 * <p>Gets all the triggers associated with a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetTriggersRequest
 *   NextToken: "STRING_VALUE",
 *   DependentJobName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetTriggersCommand(input);
 * const response = await client.send(command);
 * // { // GetTriggersResponse
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTriggersCommandInput - {@link GetTriggersCommandInput}
 * @returns {@link GetTriggersCommandOutput}
 * @see {@link GetTriggersCommandInput} for command's `input` shape.
 * @see {@link GetTriggersCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTriggersCommand extends $Command
  .classBuilder<
    GetTriggersCommandInput,
    GetTriggersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetTriggers", {})
  .n("GlueClient", "GetTriggersCommand")
  .f(void 0, void 0)
  .ser(se_GetTriggersCommand)
  .de(de_GetTriggersCommand)
  .build() {}
