import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { AddPermissionInput } from "../models/models_0";
import {
  deserializeAws_queryAddPermissionCommand,
  serializeAws_queryAddPermissionCommand,
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

export interface AddPermissionCommandInput extends AddPermissionInput {}
export interface AddPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds a statement to a topic's access control policy, granting access for the specified
 *             accounts to the specified actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, AddPermissionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, AddPermissionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddPermissionCommand extends $Command<
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddPermissionCommandInput, AddPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "AddPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddPermissionInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddPermissionCommandOutput> {
    return deserializeAws_queryAddPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
