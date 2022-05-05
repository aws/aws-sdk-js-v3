// smithy-typescript generated code
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
import { DeleteComponentTypeRequest, DeleteComponentTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteComponentTypeCommand,
  serializeAws_restJson1DeleteComponentTypeCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteComponentTypeCommandInput extends DeleteComponentTypeRequest {}
export interface DeleteComponentTypeCommandOutput extends DeleteComponentTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const command = new DeleteComponentTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteComponentTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 */
export class DeleteComponentTypeCommand extends $Command<
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
  IoTTwinMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteComponentTypeCommandInput) {
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
  ): Handler<DeleteComponentTypeCommandInput, DeleteComponentTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "DeleteComponentTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteComponentTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteComponentTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteComponentTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteComponentTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteComponentTypeCommandOutput> {
    return deserializeAws_restJson1DeleteComponentTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
