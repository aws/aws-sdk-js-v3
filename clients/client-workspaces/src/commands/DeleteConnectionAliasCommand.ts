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
  DeleteConnectionAliasRequest,
  DeleteConnectionAliasRequestFilterSensitiveLog,
  DeleteConnectionAliasResult,
  DeleteConnectionAliasResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteConnectionAliasCommand,
  serializeAws_json1_1DeleteConnectionAliasCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DeleteConnectionAliasCommandInput extends DeleteConnectionAliasRequest {}
export interface DeleteConnectionAliasCommandOutput extends DeleteConnectionAliasResult, __MetadataBearer {}

/**
 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *          <important>
 *             <p>
 *                <b>If you will no longer be using a fully qualified domain name
 *                (FQDN) as the registration code for your WorkSpaces users, you must take certain
 *                precautions to prevent potential security issues.</b> For more information,
 *             see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
 *          </important>
 *          <note>
 *             <p>To delete a connection alias that has been shared, the shared account must first
 *             disassociate the connection alias from any directories it has been associated with. Then
 *             you must unshare the connection alias from the account it has been shared with. You can
 *             delete a connection alias only after it is no longer shared with any accounts or
 *             associated with any directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DeleteConnectionAliasCommand extends $Command<
  DeleteConnectionAliasCommandInput,
  DeleteConnectionAliasCommandOutput,
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

  constructor(readonly input: DeleteConnectionAliasCommandInput) {
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
  ): Handler<DeleteConnectionAliasCommandInput, DeleteConnectionAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConnectionAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeleteConnectionAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConnectionAliasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteConnectionAliasResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConnectionAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteConnectionAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteConnectionAliasCommandOutput> {
    return deserializeAws_json1_1DeleteConnectionAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
