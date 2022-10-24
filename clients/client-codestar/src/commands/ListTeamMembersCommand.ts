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
  ListTeamMembersRequest,
  ListTeamMembersRequestFilterSensitiveLog,
  ListTeamMembersResult,
  ListTeamMembersResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTeamMembersCommand,
  serializeAws_json1_1ListTeamMembersCommand,
} from "../protocols/Aws_json1_1";

export interface ListTeamMembersCommandInput extends ListTeamMembersRequest {}
export interface ListTeamMembersCommandOutput extends ListTeamMembersResult, __MetadataBearer {}

/**
 * <p>Lists all team members associated with a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTeamMembersCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTeamMembersCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTeamMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTeamMembersCommandInput} for command's `input` shape.
 * @see {@link ListTeamMembersCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 */
export class ListTeamMembersCommand extends $Command<
  ListTeamMembersCommandInput,
  ListTeamMembersCommandOutput,
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

  constructor(readonly input: ListTeamMembersCommandInput) {
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
  ): Handler<ListTeamMembersCommandInput, ListTeamMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTeamMembersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "ListTeamMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTeamMembersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTeamMembersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTeamMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTeamMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTeamMembersCommandOutput> {
    return deserializeAws_json1_1ListTeamMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
