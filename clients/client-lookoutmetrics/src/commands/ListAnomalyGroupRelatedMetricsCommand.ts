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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  ListAnomalyGroupRelatedMetricsRequest,
  ListAnomalyGroupRelatedMetricsRequestFilterSensitiveLog,
  ListAnomalyGroupRelatedMetricsResponse,
  ListAnomalyGroupRelatedMetricsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand,
  serializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAnomalyGroupRelatedMetricsCommandInput extends ListAnomalyGroupRelatedMetricsRequest {}
export interface ListAnomalyGroupRelatedMetricsCommandOutput
  extends ListAnomalyGroupRelatedMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of measures that are potential causes or effects of an
 *             anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupRelatedMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupRelatedMetricsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupRelatedMetricsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class ListAnomalyGroupRelatedMetricsCommand extends $Command<
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
  LookoutMetricsClientResolvedConfig
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

  constructor(readonly input: ListAnomalyGroupRelatedMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomalyGroupRelatedMetricsCommandInput, ListAnomalyGroupRelatedMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomalyGroupRelatedMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyGroupRelatedMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomalyGroupRelatedMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAnomalyGroupRelatedMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAnomalyGroupRelatedMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> {
    return deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
