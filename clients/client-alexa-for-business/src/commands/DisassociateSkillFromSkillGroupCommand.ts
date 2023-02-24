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
  DisassociateSkillFromSkillGroupRequest,
  DisassociateSkillFromSkillGroupRequestFilterSensitiveLog,
  DisassociateSkillFromSkillGroupResponse,
  DisassociateSkillFromSkillGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand,
  serializeAws_json1_1DisassociateSkillFromSkillGroupCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateSkillFromSkillGroupCommandInput extends DisassociateSkillFromSkillGroupRequest {}
export interface DisassociateSkillFromSkillGroupCommandOutput
  extends DisassociateSkillFromSkillGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a skill from a skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateSkillFromSkillGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSkillFromSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillFromSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class DisassociateSkillFromSkillGroupCommand extends $Command<
  DisassociateSkillFromSkillGroupCommandInput,
  DisassociateSkillFromSkillGroupCommandOutput,
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

  constructor(readonly input: DisassociateSkillFromSkillGroupCommandInput) {
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
  ): Handler<DisassociateSkillFromSkillGroupCommandInput, DisassociateSkillFromSkillGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateSkillFromSkillGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DisassociateSkillFromSkillGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSkillFromSkillGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillFromSkillGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateSkillFromSkillGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateSkillFromSkillGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSkillFromSkillGroupCommandOutput> {
    return deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
