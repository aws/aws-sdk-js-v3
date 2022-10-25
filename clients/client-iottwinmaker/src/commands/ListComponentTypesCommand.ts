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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import {
  ListComponentTypesRequest,
  ListComponentTypesRequestFilterSensitiveLog,
  ListComponentTypesResponse,
  ListComponentTypesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListComponentTypesCommand,
  serializeAws_restJson1ListComponentTypesCommand,
} from "../protocols/Aws_restJson1";

export interface ListComponentTypesCommandInput extends ListComponentTypesRequest {}
export interface ListComponentTypesCommandOutput extends ListComponentTypesResponse, __MetadataBearer {}

/**
 * <p>Lists all component types in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListComponentTypesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListComponentTypesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const command = new ListComponentTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentTypesCommandInput} for command's `input` shape.
 * @see {@link ListComponentTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 */
export class ListComponentTypesCommand extends $Command<
  ListComponentTypesCommandInput,
  ListComponentTypesCommandOutput,
  IoTTwinMakerClientResolvedConfig
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

  constructor(readonly input: ListComponentTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComponentTypesCommandInput, ListComponentTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComponentTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "ListComponentTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListComponentTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComponentTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListComponentTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComponentTypesCommandOutput> {
    return deserializeAws_restJson1ListComponentTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
