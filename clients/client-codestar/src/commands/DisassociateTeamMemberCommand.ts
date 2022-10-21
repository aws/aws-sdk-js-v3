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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import {
  DisassociateTeamMemberRequest,
  DisassociateTeamMemberRequestFilterSensitiveLog,
  DisassociateTeamMemberResult,
  DisassociateTeamMemberResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateTeamMemberCommand,
  serializeAws_json1_1DisassociateTeamMemberCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateTeamMemberCommandInput extends DisassociateTeamMemberRequest {}
export interface DisassociateTeamMemberCommandOutput extends DisassociateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Removes a user from a project. Removing a user from a project also removes the IAM
 *       policies from that user that allowed access to the project and its resources. Disassociating a
 *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
 *       IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DisassociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DisassociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DisassociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 */
export class DisassociateTeamMemberCommand extends $Command<
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
  CodeStarClientResolvedConfig
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

  constructor(readonly input: DisassociateTeamMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateTeamMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "DisassociateTeamMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTeamMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTeamMemberResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateTeamMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateTeamMemberCommandOutput> {
    return deserializeAws_json1_1DisassociateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
