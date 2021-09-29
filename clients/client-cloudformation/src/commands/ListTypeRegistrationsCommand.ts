import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeRegistrationsInput, ListTypeRegistrationsOutput } from "../models/models_0";
import {
  deserializeAws_queryListTypeRegistrationsCommand,
  serializeAws_queryListTypeRegistrationsCommand,
} from "../protocols/Aws_query";
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

export interface ListTypeRegistrationsCommandInput extends ListTypeRegistrationsInput {}
export interface ListTypeRegistrationsCommandOutput extends ListTypeRegistrationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of registration tokens for the specified extension(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeRegistrationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeRegistrationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeRegistrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListTypeRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTypeRegistrationsCommand extends $Command<
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTypeRegistrationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypeRegistrationsCommandInput, ListTypeRegistrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListTypeRegistrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTypeRegistrationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypeRegistrationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTypeRegistrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListTypeRegistrationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypeRegistrationsCommandOutput> {
    return deserializeAws_queryListTypeRegistrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
