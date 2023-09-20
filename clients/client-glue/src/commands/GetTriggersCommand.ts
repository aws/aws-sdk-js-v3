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
import { GetTriggersRequest, GetTriggersResponse } from "../models/models_1";
import { de_GetTriggersCommand, se_GetTriggersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class GetTriggersCommand extends $Command<
  GetTriggersCommandInput,
  GetTriggersCommandOutput,
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
  constructor(readonly input: GetTriggersCommandInput) {
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
  ): Handler<GetTriggersCommandInput, GetTriggersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTriggersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetTriggersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetTriggers",
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
  private serialize(input: GetTriggersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTriggersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTriggersCommandOutput> {
    return de_GetTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
