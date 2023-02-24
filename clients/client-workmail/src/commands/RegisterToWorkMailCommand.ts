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
  RegisterToWorkMailRequest,
  RegisterToWorkMailRequestFilterSensitiveLog,
  RegisterToWorkMailResponse,
  RegisterToWorkMailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterToWorkMailCommand,
  serializeAws_json1_1RegisterToWorkMailCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface RegisterToWorkMailCommandInput extends RegisterToWorkMailRequest {}
export interface RegisterToWorkMailCommandOutput extends RegisterToWorkMailResponse, __MetadataBearer {}

/**
 * <p>Registers an existing and disabled user, group, or resource for WorkMail use by
 *          associating a mailbox and calendaring capabilities. It performs no change if the user,
 *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
 *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
 *          functionality for this operation is <i>Enable</i>.</p>
 *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
 *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterToWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterToWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new RegisterToWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterToWorkMailCommandInput} for command's `input` shape.
 * @see {@link RegisterToWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class RegisterToWorkMailCommand extends $Command<
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
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

  constructor(readonly input: RegisterToWorkMailCommandInput) {
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
  ): Handler<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterToWorkMailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "RegisterToWorkMailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterToWorkMailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterToWorkMailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterToWorkMailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterToWorkMailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterToWorkMailCommandOutput> {
    return deserializeAws_json1_1RegisterToWorkMailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
