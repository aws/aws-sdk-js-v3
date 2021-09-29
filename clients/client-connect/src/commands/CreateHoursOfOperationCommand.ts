import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateHoursOfOperationRequest, CreateHoursOfOperationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateHoursOfOperationCommand,
  serializeAws_restJson1CreateHoursOfOperationCommand,
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

export interface CreateHoursOfOperationCommandInput extends CreateHoursOfOperationRequest {}
export interface CreateHoursOfOperationCommandOutput extends CreateHoursOfOperationResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Creates hours of operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link CreateHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHoursOfOperationCommand extends $Command<
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHoursOfOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHoursOfOperationCommandInput, CreateHoursOfOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateHoursOfOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHoursOfOperationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHoursOfOperationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHoursOfOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateHoursOfOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHoursOfOperationCommandOutput> {
    return deserializeAws_restJson1CreateHoursOfOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
