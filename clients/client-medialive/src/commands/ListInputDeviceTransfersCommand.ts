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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  ListInputDeviceTransfersRequest,
  ListInputDeviceTransfersRequestFilterSensitiveLog,
  ListInputDeviceTransfersResponse,
  ListInputDeviceTransfersResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListInputDeviceTransfersCommand,
  serializeAws_restJson1ListInputDeviceTransfersCommand,
} from "../protocols/Aws_restJson1";

export interface ListInputDeviceTransfersCommandInput extends ListInputDeviceTransfersRequest {}
export interface ListInputDeviceTransfersCommandOutput extends ListInputDeviceTransfersResponse, __MetadataBearer {}

/**
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDeviceTransfersCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDeviceTransfersCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputDeviceTransfersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputDeviceTransfersCommandInput} for command's `input` shape.
 * @see {@link ListInputDeviceTransfersCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class ListInputDeviceTransfersCommand extends $Command<
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
  MediaLiveClientResolvedConfig
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

  constructor(readonly input: ListInputDeviceTransfersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInputDeviceTransfersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListInputDeviceTransfersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInputDeviceTransfersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInputDeviceTransfersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInputDeviceTransfersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInputDeviceTransfersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputDeviceTransfersCommandOutput> {
    return deserializeAws_restJson1ListInputDeviceTransfersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
