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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import {
  ReadPresetRequest,
  ReadPresetRequestFilterSensitiveLog,
  ReadPresetResponse,
  ReadPresetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ReadPresetCommand,
  serializeAws_restJson1ReadPresetCommand,
} from "../protocols/Aws_restJson1";

export interface ReadPresetCommandInput extends ReadPresetRequest {}
export interface ReadPresetCommandOutput extends ReadPresetResponse, __MetadataBearer {}

/**
 * <p>The ReadPreset operation gets detailed information about a preset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadPresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReadPresetCommandInput} for command's `input` shape.
 * @see {@link ReadPresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 */
export class ReadPresetCommand extends $Command<
  ReadPresetCommandInput,
  ReadPresetCommandOutput,
  ElasticTranscoderClientResolvedConfig
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

  constructor(readonly input: ReadPresetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReadPresetCommandInput, ReadPresetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReadPresetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ReadPresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReadPresetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReadPresetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReadPresetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReadPresetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReadPresetCommandOutput> {
    return deserializeAws_restJson1ReadPresetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
