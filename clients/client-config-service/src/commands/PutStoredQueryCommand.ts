import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutStoredQueryRequest, PutStoredQueryResponse } from "../models/models_1";
import {
  deserializeAws_json1_1PutStoredQueryCommand,
  serializeAws_json1_1PutStoredQueryCommand,
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

export interface PutStoredQueryCommandInput extends PutStoredQueryRequest {}
export interface PutStoredQueryCommandOutput extends PutStoredQueryResponse, __MetadataBearer {}

/**
 * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region.
 * 			You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStoredQueryCommandInput} for command's `input` shape.
 * @see {@link PutStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutStoredQueryCommand extends $Command<
  PutStoredQueryCommandInput,
  PutStoredQueryCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutStoredQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutStoredQueryCommandInput, PutStoredQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutStoredQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutStoredQueryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutStoredQueryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutStoredQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutStoredQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutStoredQueryCommandOutput> {
    return deserializeAws_json1_1PutStoredQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
