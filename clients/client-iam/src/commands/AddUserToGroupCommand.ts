import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddUserToGroupRequest } from "../models/models_0";
import {
  deserializeAws_queryAddUserToGroupCommand,
  serializeAws_queryAddUserToGroupCommand,
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

export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {}
export interface AddUserToGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds the specified user to the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddUserToGroupCommand extends $Command<
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddUserToGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddUserToGroupCommandInput, AddUserToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AddUserToGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddUserToGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddUserToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddUserToGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddUserToGroupCommandOutput> {
    return deserializeAws_queryAddUserToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
