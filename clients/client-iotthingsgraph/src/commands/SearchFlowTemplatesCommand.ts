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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  SearchFlowTemplatesRequest,
  SearchFlowTemplatesRequestFilterSensitiveLog,
  SearchFlowTemplatesResponse,
  SearchFlowTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SearchFlowTemplatesCommand,
  serializeAws_json1_1SearchFlowTemplatesCommand,
} from "../protocols/Aws_json1_1";

export interface SearchFlowTemplatesCommandInput extends SearchFlowTemplatesRequest {}
export interface SearchFlowTemplatesCommandOutput extends SearchFlowTemplatesResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Searches for summary information about workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchFlowTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFlowTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchFlowTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class SearchFlowTemplatesCommand extends $Command<
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  constructor(readonly input: SearchFlowTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchFlowTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "SearchFlowTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchFlowTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchFlowTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchFlowTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchFlowTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFlowTemplatesCommandOutput> {
    return deserializeAws_json1_1SearchFlowTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
