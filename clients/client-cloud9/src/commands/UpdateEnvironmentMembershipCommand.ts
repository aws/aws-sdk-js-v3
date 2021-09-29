import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEnvironmentMembershipCommand,
  serializeAws_json1_1UpdateEnvironmentMembershipCommand,
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

export interface UpdateEnvironmentMembershipCommandInput extends UpdateEnvironmentMembershipRequest {}
export interface UpdateEnvironmentMembershipCommandOutput extends UpdateEnvironmentMembershipResult, __MetadataBearer {}

/**
 * <p>Changes the settings of an existing environment member for an Cloud9 development
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UpdateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UpdateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentMembershipCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateEnvironmentMembershipCommand extends $Command<
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEnvironmentMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEnvironmentMembershipCommandInput, UpdateEnvironmentMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "UpdateEnvironmentMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnvironmentMembershipResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnvironmentMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEnvironmentMembershipCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEnvironmentMembershipCommandOutput> {
    return deserializeAws_json1_1UpdateEnvironmentMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
