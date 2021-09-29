import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationSmbCommand,
  serializeAws_json1_1CreateLocationSmbCommand,
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

export interface CreateLocationSmbCommandInput extends CreateLocationSmbRequest {}
export interface CreateLocationSmbCommandOutput extends CreateLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
 *       written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link CreateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocationSmbCommand extends $Command<
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationSmbCommandInput) {
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
  ): Handler<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationSmbCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationSmbRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationSmbResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationSmbCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationSmbCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationSmbCommandOutput> {
    return deserializeAws_json1_1CreateLocationSmbCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
