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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTriggerRequest, GetTriggerResponse } from "../models/models_1";
import { de_GetTriggerCommand, se_GetTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the definition of a trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 */
export class GetTriggerCommand extends $Command<
  GetTriggerCommandInput,
  GetTriggerCommandOutput,
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
  constructor(readonly input: GetTriggerCommandInput) {
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
  ): Handler<GetTriggerCommandInput, GetTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTriggerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetTriggerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetTrigger",
      },
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
  private serialize(input: GetTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTriggerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTriggerCommandOutput> {
    return de_GetTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
