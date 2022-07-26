// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  DisassociateRoleFromGroupRequest,
  DisassociateRoleFromGroupRequestFilterSensitiveLog,
  DisassociateRoleFromGroupResponse,
  DisassociateRoleFromGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateRoleFromGroupCommand,
  serializeAws_restJson1DisassociateRoleFromGroupCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateRoleFromGroupCommandInput extends DisassociateRoleFromGroupRequest {}
export interface DisassociateRoleFromGroupCommandOutput extends DisassociateRoleFromGroupResponse, __MetadataBearer {}

/**
 * Disassociates the role from a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateRoleFromGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateRoleFromGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateRoleFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRoleFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoleFromGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class DisassociateRoleFromGroupCommand extends $Command<
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateRoleFromGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DisassociateRoleFromGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateRoleFromGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateRoleFromGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateRoleFromGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateRoleFromGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateRoleFromGroupCommandOutput> {
    return deserializeAws_restJson1DisassociateRoleFromGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
