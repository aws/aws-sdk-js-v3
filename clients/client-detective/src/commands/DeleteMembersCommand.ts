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
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMembersCommand,
  serializeAws_restJson1DeleteMembersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteMembersCommand}.
 */
export interface DeleteMembersCommandInput extends DeleteMembersRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMembersCommand}.
 */
export interface DeleteMembersCommandOutput extends DeleteMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified member accounts from the behavior graph. The removed accounts no
 *          longer contribute data to the behavior graph. This operation can only be called by the
 *          administrator account for the behavior graph.</p>
 *          <p>For invited accounts, the removed accounts are deleted from the list of accounts in the
 *          behavior graph. To restore the account, the administrator account must send another
 *          invitation.</p>
 *          <p>For organization accounts in the organization behavior graph, the Detective
 *          administrator account can always enable the organization account again. Organization
 *          accounts that are not enabled as member accounts are not included in the
 *             <code>ListMembers</code> results for the organization behavior graph.</p>
 *          <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own
 *          account from the behavior graph. To disable a behavior graph, the administrator account
 *          uses the <code>DeleteGraph</code> API method.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // DeleteMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteMembersCommandInput - {@link DeleteMembersCommandInput}
 * @returns {@link DeleteMembersCommandOutput}
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 *
 */
export class DeleteMembersCommand extends $Command<
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteMembersCommandInput) {
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
  ): Handler<DeleteMembersCommandInput, DeleteMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "DeleteMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMembersCommandOutput> {
    return deserializeAws_restJson1DeleteMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
