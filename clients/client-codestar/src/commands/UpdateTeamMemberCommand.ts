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
  UpdateTeamMemberRequest,
  UpdateTeamMemberRequestFilterSensitiveLog,
  UpdateTeamMemberResult,
  UpdateTeamMemberResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTeamMemberCommand,
  serializeAws_json1_1UpdateTeamMemberCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateTeamMemberCommandInput extends UpdateTeamMemberRequest {}
export interface UpdateTeamMemberCommandOutput extends UpdateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
 *       team member's role in the project, or change whether they have remote access to project
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UpdateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 */
export class UpdateTeamMemberCommand extends $Command<
  UpdateTeamMemberCommandInput,
  UpdateTeamMemberCommandOutput,
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

  constructor(readonly input: UpdateTeamMemberCommandInput) {
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
  ): Handler<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTeamMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "UpdateTeamMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTeamMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTeamMemberResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTeamMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTeamMemberCommandOutput> {
    return deserializeAws_json1_1UpdateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
