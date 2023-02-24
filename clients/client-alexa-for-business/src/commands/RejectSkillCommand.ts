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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  RejectSkillRequest,
  RejectSkillRequestFilterSensitiveLog,
  RejectSkillResponse,
  RejectSkillResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RejectSkillCommand,
  serializeAws_json1_1RejectSkillCommand,
} from "../protocols/Aws_json1_1";

export interface RejectSkillCommandInput extends RejectSkillRequest {}
export interface RejectSkillCommandOutput extends RejectSkillResponse, __MetadataBearer {}

/**
 * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
 *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
 *          that is rejected can be added later by calling the ApproveSkill API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RejectSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RejectSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RejectSkillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectSkillCommandInput} for command's `input` shape.
 * @see {@link RejectSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class RejectSkillCommand extends $Command<
  RejectSkillCommandInput,
  RejectSkillCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: RejectSkillCommandInput) {
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
  ): Handler<RejectSkillCommandInput, RejectSkillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RejectSkillCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "RejectSkillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectSkillRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectSkillResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectSkillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectSkillCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectSkillCommandOutput> {
    return deserializeAws_json1_1RejectSkillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
