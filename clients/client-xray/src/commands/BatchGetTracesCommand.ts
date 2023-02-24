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
  BatchGetTracesRequest,
  BatchGetTracesRequestFilterSensitiveLog,
  BatchGetTracesResult,
  BatchGetTracesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetTracesCommand,
  serializeAws_restJson1BatchGetTracesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface BatchGetTracesCommandInput extends BatchGetTracesRequest {}
export interface BatchGetTracesCommandOutput extends BatchGetTracesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class BatchGetTracesCommand extends $Command<
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
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

  constructor(readonly input: BatchGetTracesCommandInput) {
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
  ): Handler<BatchGetTracesCommandInput, BatchGetTracesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetTracesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "BatchGetTracesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetTracesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetTracesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetTracesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetTracesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTracesCommandOutput> {
    return deserializeAws_restJson1BatchGetTracesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
