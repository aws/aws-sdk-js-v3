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
import { CreateTriggerRequest, CreateTriggerResponse } from "../models/models_1";
import { de_CreateTriggerCommand, se_CreateTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a new trigger.</p>
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
 *         State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
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
 */
export class CreateTriggerCommand extends $Command<
  CreateTriggerCommandInput,
  CreateTriggerCommandOutput,
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
  constructor(readonly input: CreateTriggerCommandInput) {
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
  ): Handler<CreateTriggerCommandInput, CreateTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTriggerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateTriggerCommand";
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
  private serialize(input: CreateTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTriggerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTriggerCommandOutput> {
    return de_CreateTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
