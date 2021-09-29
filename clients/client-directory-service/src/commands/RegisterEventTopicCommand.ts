import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RegisterEventTopicRequest, RegisterEventTopicResult } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterEventTopicCommand,
  serializeAws_json1_1RegisterEventTopicCommand,
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

export interface RegisterEventTopicCommandInput extends RegisterEventTopicRequest {}
export interface RegisterEventTopicCommandOutput extends RegisterEventTopicResult, __MetadataBearer {}

/**
 * <p>Associates a directory with an Amazon SNS topic. This establishes the directory as a
 *       publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when
 *       the status of your directory changes. You get notified if your directory goes from an Active
 *       status to an Impaired or Inoperable status. You also receive a notification when the directory
 *       returns to an Active status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RegisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RegisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RegisterEventTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link RegisterEventTopicCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterEventTopicCommand extends $Command<
  RegisterEventTopicCommandInput,
  RegisterEventTopicCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterEventTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "RegisterEventTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterEventTopicRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterEventTopicResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterEventTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterEventTopicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterEventTopicCommandOutput> {
    return deserializeAws_json1_1RegisterEventTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
