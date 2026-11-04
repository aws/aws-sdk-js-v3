// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTriggerRequest, CreateTriggerResponse } from "../models/models_1";
import { CreateTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new trigger.
 *
 * Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The same unique identifier was associated with two different records.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateTriggerCommand extends command<CreateTriggerCommandInput, CreateTriggerCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrigger",
  CreateTrigger$
) {
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
