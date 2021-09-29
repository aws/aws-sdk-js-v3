import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeletePlaceIndexRequest, DeletePlaceIndexResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePlaceIndexCommand,
  serializeAws_restJson1DeletePlaceIndexCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeletePlaceIndexCommandInput extends DeletePlaceIndexRequest {}
export interface DeletePlaceIndexCommandOutput extends DeletePlaceIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes a place index resource from your AWS account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeletePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeletePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeletePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePlaceIndexCommand extends $Command<
  DeletePlaceIndexCommandInput,
  DeletePlaceIndexCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlaceIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DeletePlaceIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlaceIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePlaceIndexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlaceIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePlaceIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePlaceIndexCommandOutput> {
    return deserializeAws_restJson1DeletePlaceIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
