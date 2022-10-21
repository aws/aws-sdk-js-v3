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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  ListRemoteAccessSessionsRequest,
  ListRemoteAccessSessionsRequestFilterSensitiveLog,
  ListRemoteAccessSessionsResult,
  ListRemoteAccessSessionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRemoteAccessSessionsCommand,
  serializeAws_json1_1ListRemoteAccessSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListRemoteAccessSessionsCommandInput extends ListRemoteAccessSessionsRequest {}
export interface ListRemoteAccessSessionsCommandOutput extends ListRemoteAccessSessionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of all currently running remote access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRemoteAccessSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRemoteAccessSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRemoteAccessSessionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteAccessSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class ListRemoteAccessSessionsCommand extends $Command<
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: ListRemoteAccessSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRemoteAccessSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListRemoteAccessSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRemoteAccessSessionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRemoteAccessSessionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRemoteAccessSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRemoteAccessSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRemoteAccessSessionsCommandOutput> {
    return deserializeAws_json1_1ListRemoteAccessSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
