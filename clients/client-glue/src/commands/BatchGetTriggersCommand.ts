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
import { BatchGetTriggersRequest, BatchGetTriggersResponse } from "../models/models_0";
import { de_BatchGetTriggersCommand, se_BatchGetTriggersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 * //             State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
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
 */
export class BatchGetTriggersCommand extends $Command<
  BatchGetTriggersCommandInput,
  BatchGetTriggersCommandOutput,
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
  constructor(readonly input: BatchGetTriggersCommandInput) {
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
  ): Handler<BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetTriggersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetTriggersCommand";
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
  private serialize(input: BatchGetTriggersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetTriggersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTriggersCommandOutput> {
    return de_BatchGetTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
