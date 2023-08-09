// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/models_2";
import { de_UpdateTriggerCommand, se_UpdateTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates a trigger definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 *           State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
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
 * //           State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
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
 */
export class UpdateTriggerCommand extends $Command<
  UpdateTriggerCommandInput,
  UpdateTriggerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateTriggerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTriggerCommandInput, UpdateTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTriggerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateTriggerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTriggerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTriggerCommandOutput> {
    return de_UpdateTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
