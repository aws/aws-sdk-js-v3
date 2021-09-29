import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateMemberFromGroupCommand,
  serializeAws_json1_1DisassociateMemberFromGroupCommand,
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

export interface DisassociateMemberFromGroupCommandInput extends DisassociateMemberFromGroupRequest {}
export interface DisassociateMemberFromGroupCommandOutput
  extends DisassociateMemberFromGroupResponse,
    __MetadataBearer {}

/**
 * <p>Removes a member from a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateMemberFromGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateMemberFromGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DisassociateMemberFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateMemberFromGroupCommand extends $Command<
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMemberFromGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DisassociateMemberFromGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMemberFromGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateMemberFromGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMemberFromGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateMemberFromGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMemberFromGroupCommandOutput> {
    return deserializeAws_json1_1DisassociateMemberFromGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
