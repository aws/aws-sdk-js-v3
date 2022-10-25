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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import {
  SearchDevicesRequest,
  SearchDevicesRequestFilterSensitiveLog,
  SearchDevicesResponse,
  SearchDevicesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchDevicesCommand,
  serializeAws_restJson1SearchDevicesCommand,
} from "../protocols/Aws_restJson1";

export interface SearchDevicesCommandInput extends SearchDevicesRequest {}
export interface SearchDevicesCommandOutput extends SearchDevicesResponse, __MetadataBearer {}

/**
 * <p>Searches for devices using the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchDevicesCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchDevicesCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new SearchDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDevicesCommandInput} for command's `input` shape.
 * @see {@link SearchDevicesCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 */
export class SearchDevicesCommand extends $Command<
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
  BraketClientResolvedConfig
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

  constructor(readonly input: SearchDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchDevicesCommandInput, SearchDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchDevicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "SearchDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchDevicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchDevicesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchDevicesCommandOutput> {
    return deserializeAws_restJson1SearchDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
