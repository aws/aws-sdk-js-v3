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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import {
  StopAccessLoggingInput,
  StopAccessLoggingInputFilterSensitiveLog,
  StopAccessLoggingOutput,
  StopAccessLoggingOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopAccessLoggingCommand,
  serializeAws_json1_1StopAccessLoggingCommand,
} from "../protocols/Aws_json1_1";

export interface StopAccessLoggingCommandInput extends StopAccessLoggingInput {}
export interface StopAccessLoggingCommandOutput extends StopAccessLoggingOutput, __MetadataBearer {}

/**
 * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StopAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StopAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StopAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StopAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 */
export class StopAccessLoggingCommand extends $Command<
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput,
  MediaStoreClientResolvedConfig
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

  constructor(readonly input: StopAccessLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopAccessLoggingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "StopAccessLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopAccessLoggingInputFilterSensitiveLog,
      outputFilterSensitiveLog: StopAccessLoggingOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopAccessLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopAccessLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAccessLoggingCommandOutput> {
    return deserializeAws_json1_1StopAccessLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
