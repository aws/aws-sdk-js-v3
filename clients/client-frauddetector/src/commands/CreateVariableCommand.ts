import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateVariableRequest, CreateVariableResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVariableCommand,
  serializeAws_json1_1CreateVariableCommand,
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

export interface CreateVariableCommandInput extends CreateVariableRequest {}
export interface CreateVariableCommandOutput extends CreateVariableResult, __MetadataBearer {}

/**
 * <p>Creates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVariableCommandInput} for command's `input` shape.
 * @see {@link CreateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVariableCommand extends $Command<
  CreateVariableCommandInput,
  CreateVariableCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVariableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVariableCommandInput, CreateVariableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CreateVariableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVariableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVariableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVariableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVariableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVariableCommandOutput> {
    return deserializeAws_json1_1CreateVariableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
