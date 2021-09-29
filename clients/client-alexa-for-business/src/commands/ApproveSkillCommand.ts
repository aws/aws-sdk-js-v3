import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ApproveSkillRequest, ApproveSkillResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ApproveSkillCommand,
  serializeAws_json1_1ApproveSkillCommand,
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

export interface ApproveSkillCommandInput extends ApproveSkillRequest {}
export interface ApproveSkillCommandOutput extends ApproveSkillResponse, __MetadataBearer {}

/**
 * <p>Associates a skill with the organization under the customer's AWS account. If a skill
 *          is private, the user implicitly accepts access to this skill during enablement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ApproveSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ApproveSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ApproveSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveSkillCommandInput} for command's `input` shape.
 * @see {@link ApproveSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ApproveSkillCommand extends $Command<
  ApproveSkillCommandInput,
  ApproveSkillCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApproveSkillCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApproveSkillCommandInput, ApproveSkillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ApproveSkillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApproveSkillRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApproveSkillResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApproveSkillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ApproveSkillCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ApproveSkillCommandOutput> {
    return deserializeAws_json1_1ApproveSkillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
