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
  GetApplicationDateRangeKpiRequest,
  GetApplicationDateRangeKpiRequestFilterSensitiveLog,
  GetApplicationDateRangeKpiResponse,
  GetApplicationDateRangeKpiResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1GetApplicationDateRangeKpiCommand,
  serializeAws_restJson1GetApplicationDateRangeKpiCommand,
} from "../protocols/Aws_restJson1";

export interface GetApplicationDateRangeKpiCommandInput extends GetApplicationDateRangeKpiRequest {}
export interface GetApplicationDateRangeKpiCommandOutput extends GetApplicationDateRangeKpiResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApplicationDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetApplicationDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class GetApplicationDateRangeKpiCommand extends $Command<
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
  PinpointClientResolvedConfig
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

  constructor(readonly input: GetApplicationDateRangeKpiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationDateRangeKpiCommandInput, GetApplicationDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationDateRangeKpiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetApplicationDateRangeKpiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApplicationDateRangeKpiRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetApplicationDateRangeKpiResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApplicationDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApplicationDateRangeKpiCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApplicationDateRangeKpiCommandOutput> {
    return deserializeAws_restJson1GetApplicationDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
