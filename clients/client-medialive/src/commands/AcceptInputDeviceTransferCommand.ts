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
  AcceptInputDeviceTransferRequest,
  AcceptInputDeviceTransferRequestFilterSensitiveLog,
  AcceptInputDeviceTransferResponse,
  AcceptInputDeviceTransferResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1AcceptInputDeviceTransferCommand,
  serializeAws_restJson1AcceptInputDeviceTransferCommand,
} from "../protocols/Aws_restJson1";

export interface AcceptInputDeviceTransferCommandInput extends AcceptInputDeviceTransferRequest {}
export interface AcceptInputDeviceTransferCommandOutput extends AcceptInputDeviceTransferResponse, __MetadataBearer {}

/**
 * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, AcceptInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, AcceptInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new AcceptInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class AcceptInputDeviceTransferCommand extends $Command<
  AcceptInputDeviceTransferCommandInput,
  AcceptInputDeviceTransferCommandOutput,
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

  constructor(readonly input: AcceptInputDeviceTransferCommandInput) {
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
  ): Handler<AcceptInputDeviceTransferCommandInput, AcceptInputDeviceTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptInputDeviceTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "AcceptInputDeviceTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptInputDeviceTransferRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptInputDeviceTransferResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptInputDeviceTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptInputDeviceTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptInputDeviceTransferCommandOutput> {
    return deserializeAws_restJson1AcceptInputDeviceTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
