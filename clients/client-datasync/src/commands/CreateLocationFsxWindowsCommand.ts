import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationFsxWindowsRequest, CreateLocationFsxWindowsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationFsxWindowsCommand,
  serializeAws_json1_1CreateLocationFsxWindowsCommand,
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

export interface CreateLocationFsxWindowsCommandInput extends CreateLocationFsxWindowsRequest {}
export interface CreateLocationFsxWindowsCommandOutput extends CreateLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocationFsxWindowsCommand extends $Command<
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationFsxWindowsCommandInput) {
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
  ): Handler<CreateLocationFsxWindowsCommandInput, CreateLocationFsxWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxWindowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationFsxWindowsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationFsxWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationFsxWindowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxWindowsCommandOutput> {
    return deserializeAws_json1_1CreateLocationFsxWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
