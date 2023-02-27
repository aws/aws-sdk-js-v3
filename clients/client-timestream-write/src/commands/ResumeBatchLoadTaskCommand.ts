// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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
  ResumeBatchLoadTaskRequest,
  ResumeBatchLoadTaskRequestFilterSensitiveLog,
  ResumeBatchLoadTaskResponse,
  ResumeBatchLoadTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ResumeBatchLoadTaskCommand,
  serializeAws_json1_0ResumeBatchLoadTaskCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * The input for {@link ResumeBatchLoadTaskCommand}.
 */
export interface ResumeBatchLoadTaskCommandInput extends ResumeBatchLoadTaskRequest {}
/**
 * The output of {@link ResumeBatchLoadTaskCommand}.
 */
export interface ResumeBatchLoadTaskCommandOutput extends ResumeBatchLoadTaskResponse, __MetadataBearer {}

/**
 * <p>
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ResumeBatchLoadTaskCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ResumeBatchLoadTaskCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new ResumeBatchLoadTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeBatchLoadTaskCommandInput} for command's `input` shape.
 * @see {@link ResumeBatchLoadTaskCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 */
export class ResumeBatchLoadTaskCommand extends $Command<
  ResumeBatchLoadTaskCommandInput,
  ResumeBatchLoadTaskCommandOutput,
  TimestreamWriteClientResolvedConfig
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

  constructor(readonly input: ResumeBatchLoadTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeBatchLoadTaskCommandInput, ResumeBatchLoadTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResumeBatchLoadTaskCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "ResumeBatchLoadTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeBatchLoadTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResumeBatchLoadTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeBatchLoadTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ResumeBatchLoadTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeBatchLoadTaskCommandOutput> {
    return deserializeAws_json1_0ResumeBatchLoadTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
