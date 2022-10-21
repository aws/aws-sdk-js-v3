// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import {
  DeregisterFromWorkMailRequest,
  DeregisterFromWorkMailRequestFilterSensitiveLog,
  DeregisterFromWorkMailResponse,
  DeregisterFromWorkMailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterFromWorkMailCommand,
  serializeAws_json1_1DeregisterFromWorkMailCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface DeregisterFromWorkMailCommandInput extends DeregisterFromWorkMailRequest {}
export interface DeregisterFromWorkMailCommandOutput extends DeregisterFromWorkMailResponse, __MetadataBearer {}

/**
 * <p>Mark a user, group, or resource as no longer used in WorkMail. This action
 *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
 *          before they are permanently removed. The functionality in the console is
 *             <i>Disable</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterFromWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterFromWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeregisterFromWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterFromWorkMailCommandInput} for command's `input` shape.
 * @see {@link DeregisterFromWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class DeregisterFromWorkMailCommand extends $Command<
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeregisterFromWorkMailCommandInput) {
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
  ): Handler<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterFromWorkMailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DeregisterFromWorkMailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterFromWorkMailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterFromWorkMailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterFromWorkMailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterFromWorkMailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterFromWorkMailCommandOutput> {
    return deserializeAws_json1_1DeregisterFromWorkMailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
