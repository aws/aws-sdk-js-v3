// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateRumMetricDefinitionRequest,
  UpdateRumMetricDefinitionRequestFilterSensitiveLog,
  UpdateRumMetricDefinitionResponse,
  UpdateRumMetricDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRumMetricDefinitionCommand,
  serializeAws_restJson1UpdateRumMetricDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface UpdateRumMetricDefinitionCommandInput extends UpdateRumMetricDefinitionRequest {}
export interface UpdateRumMetricDefinitionCommandOutput extends UpdateRumMetricDefinitionResponse, __MetadataBearer {}

/**
 * <p>Modifies one existing metric definition for CloudWatch RUM extended metrics. For
 *          more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateRumMetricDefinitionCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateRumMetricDefinitionCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new UpdateRumMetricDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRumMetricDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateRumMetricDefinitionCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
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
      inputFilterSensitiveLog: UpdateRumMetricDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRumMetricDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRumMetricDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRumMetricDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRumMetricDefinitionCommandOutput> {
    return deserializeAws_restJson1UpdateRumMetricDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
