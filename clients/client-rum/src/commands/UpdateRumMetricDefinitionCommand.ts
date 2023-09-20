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

import { UpdateRumMetricDefinitionRequest, UpdateRumMetricDefinitionResponse } from "../models/models_0";
import { de_UpdateRumMetricDefinitionCommand, se_UpdateRumMetricDefinitionCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRumMetricDefinitionCommand}.
 */
export interface UpdateRumMetricDefinitionCommandInput extends UpdateRumMetricDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRumMetricDefinitionCommand}.
 */
export interface UpdateRumMetricDefinitionCommandOutput extends UpdateRumMetricDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies one existing metric definition for CloudWatch RUM extended metrics. For
 *          more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateRumMetricDefinitionCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateRumMetricDefinitionCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // UpdateRumMetricDefinitionRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MetricDefinition: { // MetricDefinitionRequest
 *     Name: "STRING_VALUE", // required
 *     ValueKey: "STRING_VALUE",
 *     UnitLabel: "STRING_VALUE",
 *     DimensionKeys: { // DimensionKeysMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EventPattern: "STRING_VALUE",
 *     Namespace: "STRING_VALUE",
 *   },
 *   MetricDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRumMetricDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRumMetricDefinitionCommandInput - {@link UpdateRumMetricDefinitionCommandInput}
 * @returns {@link UpdateRumMetricDefinitionCommandOutput}
 * @see {@link UpdateRumMetricDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateRumMetricDefinitionCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class UpdateRumMetricDefinitionCommand extends $Command<
  UpdateRumMetricDefinitionCommandInput,
  UpdateRumMetricDefinitionCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: UpdateRumMetricDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRumMetricDefinitionCommandInput, UpdateRumMetricDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRumMetricDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "UpdateRumMetricDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RUM",
        operation: "UpdateRumMetricDefinition",
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
  private serialize(input: UpdateRumMetricDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRumMetricDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRumMetricDefinitionCommandOutput> {
    return de_UpdateRumMetricDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
