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
  GetTimeSeriesServiceStatisticsRequest,
  GetTimeSeriesServiceStatisticsRequestFilterSensitiveLog,
  GetTimeSeriesServiceStatisticsResult,
  GetTimeSeriesServiceStatisticsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand,
  serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface GetTimeSeriesServiceStatisticsCommandInput extends GetTimeSeriesServiceStatisticsRequest {}
export interface GetTimeSeriesServiceStatisticsCommandOutput
  extends GetTimeSeriesServiceStatisticsResult,
    __MetadataBearer {}

/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class GetTimeSeriesServiceStatisticsCommand extends $Command<
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
  XRayClientResolvedConfig
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

  constructor(readonly input: GetTimeSeriesServiceStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTimeSeriesServiceStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTimeSeriesServiceStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTimeSeriesServiceStatisticsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTimeSeriesServiceStatisticsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTimeSeriesServiceStatisticsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput> {
    return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
