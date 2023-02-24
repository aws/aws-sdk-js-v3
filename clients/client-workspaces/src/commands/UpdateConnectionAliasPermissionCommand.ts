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

import {
  UpdateConnectionAliasPermissionRequest,
  UpdateConnectionAliasPermissionRequestFilterSensitiveLog,
  UpdateConnectionAliasPermissionResult,
  UpdateConnectionAliasPermissionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateConnectionAliasPermissionCommand,
  serializeAws_json1_1UpdateConnectionAliasPermissionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface UpdateConnectionAliasPermissionCommandInput extends UpdateConnectionAliasPermissionRequest {}
export interface UpdateConnectionAliasPermissionCommandOutput
  extends UpdateConnectionAliasPermissionResult,
    __MetadataBearer {}

/**
 * <p>Shares or unshares a connection alias with one account by specifying whether that
 *          account has permission to associate the connection alias with a directory. If the
 *          association permission is granted, the connection alias is shared with that account. If the
 *          association permission is revoked, the connection alias is unshared with the account. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *                      DescribeConnectionAliases</a> to make sure that the current state of the
 *                   connection alias is <code>CREATED</code>.</p>
 *                </li>
 *                <li>
 *                   <p>To delete a connection alias that has been shared, the shared account must
 *                   first disassociate the connection alias from any directories it has been
 *                   associated with. Then you must unshare the connection alias from the account it
 *                   has been shared with. You can delete a connection alias only after it is no longer
 *                   shared with any accounts or associated with any directories.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new UpdateConnectionAliasPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionAliasPermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionAliasPermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class UpdateConnectionAliasPermissionCommand extends $Command<
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: UpdateConnectionAliasPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectionAliasPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateConnectionAliasPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectionAliasPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectionAliasPermissionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateConnectionAliasPermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateConnectionAliasPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConnectionAliasPermissionCommandOutput> {
    return deserializeAws_json1_1UpdateConnectionAliasPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
