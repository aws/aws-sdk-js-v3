// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateTriggerRequest, CreateTriggerResponse } from "../models/models_1";
import { de_CreateTriggerCommand, se_CreateTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTriggerCommand}.
 */
export interface CreateTriggerCommandInput extends CreateTriggerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTriggerCommand}.
 */
export interface CreateTriggerCommandOutput extends CreateTriggerResponse, __MetadataBearer {}

/**
 * <p>Creates a new trigger.</p>
 *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateTriggerRequest
 *   Name: "STRING_VALUE", // required
 *   WorkflowName: "STRING_VALUE",
 *   Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT", // required
 *   Schedule: "STRING_VALUE",
 *   Predicate: { // Predicate
 *     Logical: "AND" || "ANY",
 *     Conditions: [ // ConditionList
 *       { // Condition
 *         LogicalOperator: "EQUALS",
 *         JobName: "STRING_VALUE",
 *         State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 *         CrawlerName: "STRING_VALUE",
 *         CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 *       },
 *     ],
 *   },
 *   Actions: [ // ActionList // required
 *     { // Action
 *       JobName: "STRING_VALUE",
 *       Arguments: { // GenericMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Timeout: Number("int"),
 *       SecurityConfiguration: "STRING_VALUE",
 *       NotificationProperty: { // NotificationProperty
 *         NotifyDelayAfter: Number("int"),
 *       },
 *       CrawlerName: "STRING_VALUE",
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   StartOnCreation: true || false,
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EventBatchingCondition: { // EventBatchingCondition
 *     BatchSize: Number("int"), // required
 *     BatchWindow: Number("int"),
 *   },
 * };
 * const command = new CreateTriggerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTriggerResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTriggerCommandInput - {@link CreateTriggerCommandInput}
 * @returns {@link CreateTriggerCommandOutput}
 * @see {@link CreateTriggerCommandInput} for command's `input` shape.
 * @see {@link CreateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class CreateTriggerCommand extends $Command
  .classBuilder<
    CreateTriggerCommandInput,
    CreateTriggerCommandOutput,
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
  .s("AWSGlue", "CreateTrigger", {})
  .n("GlueClient", "CreateTriggerCommand")
  .f(void 0, void 0)
  .ser(se_CreateTriggerCommand)
  .de(de_CreateTriggerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTriggerRequest;
      output: CreateTriggerResponse;
    };
    sdk: {
      input: CreateTriggerCommandInput;
      output: CreateTriggerCommandOutput;
    };
  };
}
