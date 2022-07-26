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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateLocationFsxOpenZfsRequest,
  CreateLocationFsxOpenZfsRequestFilterSensitiveLog,
  CreateLocationFsxOpenZfsResponse,
  CreateLocationFsxOpenZfsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationFsxOpenZfsCommand,
  serializeAws_json1_1CreateLocationFsxOpenZfsCommand,
} from "../protocols/Aws_json1_1";

export interface CreateLocationFsxOpenZfsCommandInput extends CreateLocationFsxOpenZfsRequest {}
export interface CreateLocationFsxOpenZfsCommandOutput extends CreateLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for an Amazon FSx for OpenZFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOpenZfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class CreateLocationFsxOpenZfsCommand extends $Command<
  CreateLocationFsxOpenZfsCommandInput,
  CreateLocationFsxOpenZfsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationFsxOpenZfsCommandInput) {
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
  ): Handler<CreateLocationFsxOpenZfsCommandInput, CreateLocationFsxOpenZfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxOpenZfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxOpenZfsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationFsxOpenZfsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationFsxOpenZfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationFsxOpenZfsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxOpenZfsCommandOutput> {
    return deserializeAws_json1_1CreateLocationFsxOpenZfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
