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
  PutTelemetryRecordsRequest,
  PutTelemetryRecordsRequestFilterSensitiveLog,
  PutTelemetryRecordsResult,
  PutTelemetryRecordsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutTelemetryRecordsCommand,
  serializeAws_restJson1PutTelemetryRecordsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface PutTelemetryRecordsCommandInput extends PutTelemetryRecordsRequest {}
export interface PutTelemetryRecordsCommandOutput extends PutTelemetryRecordsResult, __MetadataBearer {}

/**
 * <p>Used by the Amazon Web Services X-Ray daemon to upload telemetry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTelemetryRecordsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTelemetryRecordsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutTelemetryRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTelemetryRecordsCommandInput} for command's `input` shape.
 * @see {@link PutTelemetryRecordsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class PutTelemetryRecordsCommand extends $Command<
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
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

  constructor(readonly input: PutTelemetryRecordsCommandInput) {
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
  ): Handler<PutTelemetryRecordsCommandInput, PutTelemetryRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutTelemetryRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "PutTelemetryRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutTelemetryRecordsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutTelemetryRecordsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutTelemetryRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutTelemetryRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTelemetryRecordsCommandOutput> {
    return deserializeAws_restJson1PutTelemetryRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
