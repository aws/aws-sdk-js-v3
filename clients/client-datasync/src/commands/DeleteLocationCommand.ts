import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteLocationRequest, DeleteLocationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLocationCommand,
  serializeAws_json1_1DeleteLocationCommand,
} from "../protocols/Aws_json1_1";
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

export interface DeleteLocationCommandInput extends DeleteLocationRequest {}
export interface DeleteLocationCommandOutput extends DeleteLocationResponse, __MetadataBearer {}

/**
 * <p>Deletes the configuration of a location used by DataSync. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteLocationCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteLocationCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocationCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteLocationCommand extends $Command<
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLocationCommandInput, DeleteLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DeleteLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLocationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLocationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLocationCommandOutput> {
    return deserializeAws_json1_1DeleteLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
