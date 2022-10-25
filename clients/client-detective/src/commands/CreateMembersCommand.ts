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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  CreateMembersRequest,
  CreateMembersRequestFilterSensitiveLog,
  CreateMembersResponse,
  CreateMembersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMembersCommand,
  serializeAws_restJson1CreateMembersCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMembersCommandInput extends CreateMembersRequest {}
export interface CreateMembersCommandOutput extends CreateMembersResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>CreateMembers</code> is used to send invitations to accounts. For the organization
 *          behavior graph, the Detective administrator account uses
 *             <code>CreateMembers</code> to enable organization accounts as member accounts.</p>
 *          <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified
 *             Amazon Web Services accounts to be member accounts in the behavior graph. This operation
 *          can only be called by the administrator account for a behavior graph. </p>
 *          <p>
 *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
 *          The administrator can optionally specify to not send invitation emails to the member
 *          accounts. This would be used when the administrator manages their member accounts
 *          centrally.</p>
 *          <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code>
 *          attempts to enable the accounts. The organization accounts do not receive
 *          invitations.</p>
 *          <p>The request provides the behavior graph ARN and the list of accounts to invite or to
 *          enable.</p>
 *          <p>The response separates the requested accounts into two lists:</p>
 *          <ul>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was able to process. For invited
 *                accounts, includes member accounts that are being verified, that have passed
 *                verification and are to be invited, and that have failed verification. For
 *                organization accounts in the organization behavior graph, includes accounts that can
 *                be enabled and that cannot be enabled.</p>
 *             </li>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
 *                includes accounts that were already invited to be member accounts in the behavior
 *                graph.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class CreateMembersCommand extends $Command<
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: CreateMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMembersCommandInput, CreateMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "CreateMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMembersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMembersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMembersCommandOutput> {
    return deserializeAws_restJson1CreateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
