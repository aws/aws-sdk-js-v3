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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  DeleteGlobalReplicationGroupMessage,
  DeleteGlobalReplicationGroupMessageFilterSensitiveLog,
  DeleteGlobalReplicationGroupResult,
  DeleteGlobalReplicationGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteGlobalReplicationGroupCommand,
  serializeAws_queryDeleteGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

export interface DeleteGlobalReplicationGroupCommandInput extends DeleteGlobalReplicationGroupMessage {}
export interface DeleteGlobalReplicationGroupCommandOutput
  extends DeleteGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Deleting a Global datastore is a two-step process: </p>
 *          <ul>
 *             <li>
 *                <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p>
 *             </li>
 *          </ul>
 *          <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore
 *              while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a
 *           Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p>
 *          <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
 *             you cannot cancel or revert this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DeleteGlobalReplicationGroupCommand extends $Command<
  DeleteGlobalReplicationGroupCommandInput,
  DeleteGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: DeleteGlobalReplicationGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGlobalReplicationGroupCommandInput, DeleteGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGlobalReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGlobalReplicationGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteGlobalReplicationGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGlobalReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryDeleteGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
