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

import { UpdateScheduledActionRequest, UpdateScheduledActionResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpdateScheduledActionCommand, se_UpdateScheduledActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandInput extends UpdateScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandOutput extends UpdateScheduledActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Reschedules a planned domain configuration change for a later time. This change can be a
 *    scheduled <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *      Auto-Tune enhancement</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateScheduledActionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateScheduledActionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpdateScheduledActionRequest
 *   DomainName: "STRING_VALUE", // required
 *   ActionID: "STRING_VALUE", // required
 *   ActionType: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 *   ScheduleAt: "NOW" || "TIMESTAMP" || "OFF_PEAK_WINDOW", // required
 *   DesiredStartTime: Number("long"),
 * };
 * const command = new UpdateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledActionResponse
 * //   ScheduledAction: { // ScheduledAction
 * //     Id: "STRING_VALUE", // required
 * //     Type: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 * //     Severity: "HIGH" || "MEDIUM" || "LOW", // required
 * //     ScheduledTime: Number("long"), // required
 * //     Description: "STRING_VALUE",
 * //     ScheduledBy: "CUSTOMER" || "SYSTEM",
 * //     Status: "PENDING_UPDATE" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //     Mandatory: true || false,
 * //     Cancellable: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScheduledActionCommandInput - {@link UpdateScheduledActionCommandInput}
 * @returns {@link UpdateScheduledActionCommandOutput}
 * @see {@link UpdateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link SlotNotAvailableException} (client fault)
 *  <p>An exception for attempting to schedule a domain action during an unavailable time slot.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class UpdateScheduledActionCommand extends $Command<
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: UpdateScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduledActionCommandInput, UpdateScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpdateScheduledActionCommand";
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
  private serialize(input: UpdateScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateScheduledActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduledActionCommandOutput> {
    return de_UpdateScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
