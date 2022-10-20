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
  GetAppMonitorDataRequest,
  GetAppMonitorDataRequestFilterSensitiveLog,
  GetAppMonitorDataResponse,
  GetAppMonitorDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAppMonitorDataCommand,
  serializeAws_restJson1GetAppMonitorDataCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface GetAppMonitorDataCommandInput extends GetAppMonitorDataRequest {}
export interface GetAppMonitorDataCommandOutput extends GetAppMonitorDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves the raw performance events that RUM has collected from your web application,
 *          so that you can do your own processing or analysis of this data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorDataCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorDataCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new GetAppMonitorDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppMonitorDataCommandInput} for command's `input` shape.
 * @see {@link GetAppMonitorDataCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class GetAppMonitorDataCommand extends $Command<
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput,
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

  constructor(readonly input: GetAppMonitorDataCommandInput) {
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
  ): Handler<GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppMonitorDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "GetAppMonitorDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppMonitorDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAppMonitorDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAppMonitorDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAppMonitorDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppMonitorDataCommandOutput> {
    return deserializeAws_restJson1GetAppMonitorDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
