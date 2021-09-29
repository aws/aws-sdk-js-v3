import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetSchemaAsJsonRequest, GetSchemaAsJsonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSchemaAsJsonCommand,
  serializeAws_restJson1GetSchemaAsJsonCommand,
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

export interface GetSchemaAsJsonCommandInput extends GetSchemaAsJsonRequest {}
export interface GetSchemaAsJsonCommandOutput extends GetSchemaAsJsonResponse, __MetadataBearer {}

/**
 * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetSchemaAsJsonCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetSchemaAsJsonCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetSchemaAsJsonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaAsJsonCommandInput} for command's `input` shape.
 * @see {@link GetSchemaAsJsonCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSchemaAsJsonCommand extends $Command<
  GetSchemaAsJsonCommandInput,
  GetSchemaAsJsonCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSchemaAsJsonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetSchemaAsJsonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSchemaAsJsonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaAsJsonResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSchemaAsJsonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSchemaAsJsonCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaAsJsonCommandOutput> {
    return deserializeAws_restJson1GetSchemaAsJsonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
