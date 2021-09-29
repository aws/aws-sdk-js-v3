import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateIPSetCommand,
  serializeAws_restJson1CreateIPSetCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateIPSetCommandInput extends CreateIPSetRequest {}
export interface CreateIPSetCommandOutput extends CreateIPSetResponse, __MetadataBearer {}

/**
 * <p>Creates a new IPSet, which is called a trusted IP list in the console user interface. An
 *       IPSet is a list of IP addresses that are trusted for secure communication with AWS
 *       infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
 *       included in IPSets. Only users from the administrator account can use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateIPSetCommand extends $Command<
  CreateIPSetCommandInput,
  CreateIPSetCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIPSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIPSetCommandInput, CreateIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateIPSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIPSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIPSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIPSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIPSetCommandOutput> {
    return deserializeAws_restJson1CreateIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
