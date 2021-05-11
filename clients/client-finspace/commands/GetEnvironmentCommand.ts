import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetEnvironmentRequest, GetEnvironmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEnvironmentCommand,
  serializeAws_restJson1GetEnvironmentCommand,
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

export interface GetEnvironmentCommandInput extends GetEnvironmentRequest {}
export interface GetEnvironmentCommandOutput extends GetEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Returns the FinSpace environment object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEnvironmentCommand extends $Command<
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
  FinspaceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnvironmentCommandInput, GetEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "GetEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEnvironmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnvironmentCommandOutput> {
    return deserializeAws_restJson1GetEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
