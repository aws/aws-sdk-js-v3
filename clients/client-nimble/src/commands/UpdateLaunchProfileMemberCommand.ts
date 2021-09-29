import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateLaunchProfileMemberRequest, UpdateLaunchProfileMemberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLaunchProfileMemberCommand,
  serializeAws_restJson1UpdateLaunchProfileMemberCommand,
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

export interface UpdateLaunchProfileMemberCommandInput extends UpdateLaunchProfileMemberRequest {}
export interface UpdateLaunchProfileMemberCommandOutput extends UpdateLaunchProfileMemberResponse, __MetadataBearer {}

/**
 * <p>Update a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateLaunchProfileMemberCommand extends $Command<
  UpdateLaunchProfileMemberCommandInput,
  UpdateLaunchProfileMemberCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLaunchProfileMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLaunchProfileMemberCommandInput, UpdateLaunchProfileMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "UpdateLaunchProfileMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLaunchProfileMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLaunchProfileMemberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLaunchProfileMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLaunchProfileMemberCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLaunchProfileMemberCommandOutput> {
    return deserializeAws_restJson1UpdateLaunchProfileMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
