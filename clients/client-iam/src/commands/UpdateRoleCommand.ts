import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleRequest, UpdateRoleResponse } from "../models/models_1";
import { deserializeAws_queryUpdateRoleCommand, serializeAws_queryUpdateRoleCommand } from "../protocols/Aws_query";
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

export interface UpdateRoleCommandInput extends UpdateRoleRequest {}
export interface UpdateRoleCommandOutput extends UpdateRoleResponse, __MetadataBearer {}

/**
 * <p>Updates the description or maximum session duration setting of a role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRoleCommand extends $Command<
  UpdateRoleCommandInput,
  UpdateRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRoleCommandInput) {
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
  ): Handler<UpdateRoleCommandInput, UpdateRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoleCommandOutput> {
    return deserializeAws_queryUpdateRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
