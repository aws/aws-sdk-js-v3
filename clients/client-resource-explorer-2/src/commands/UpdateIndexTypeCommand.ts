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
  UpdateIndexTypeInput,
  UpdateIndexTypeInputFilterSensitiveLog,
  UpdateIndexTypeOutput,
  UpdateIndexTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIndexTypeCommand,
  serializeAws_restJson1UpdateIndexTypeCommand,
} from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

export interface UpdateIndexTypeCommandInput extends UpdateIndexTypeInput {}
export interface UpdateIndexTypeCommandOutput extends UpdateIndexTypeOutput, __MetadataBearer {}

/**
 * <p>Changes the type of the index from one of the following types to the other. For more
 *             information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on
 *                 cross-Region search by creating an aggregator index</a> in the
 *                 <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>AGGREGATOR</code> index type</b>
 *                </p>
 *                <p>The index contains information about resources from all Amazon Web Services Regions in the
 *                     Amazon Web Services account in which you've created a Resource Explorer index. Resource information from
 *                     all other Regions is replicated to this Region's index.</p>
 *                <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on
 *                     replication of all discovered resource information from the other Amazon Web Services Regions
 *                     in your account to this index. You can then, from this Region only, perform
 *                     resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account.
 *                     Turning on replication from all other Regions is performed by asynchronous
 *                     background tasks. You can check the status of the asynchronous tasks by using
 *                     the <a>GetIndex</a> operation. When the asynchronous tasks complete,
 *                     the <code>Status</code> response of that operation changes from
 *                         <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to
 *                     see results from other Amazon Web Services Regions in query results. However, it can take
 *                     several hours for replication from all other Regions to complete.</p>
 *                <important>
 *                   <p>You can have only one aggregator index per Amazon Web Services account. Before you can
 *                         promote a different index to be the aggregator index for the account, you must
 *                         first demote the existing aggregator index to type <code>LOCAL</code>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>LOCAL</code> index type</b>
 *                </p>
 *                <p>The index contains information about resources in only the Amazon Web Services Region in
 *                     which the index exists. If an aggregator index in another Region exists, then
 *                     information in this local index is replicated to the aggregator index.</p>
 *                <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the
 *                     replication of resource information from all other Amazon Web Services Regions in the
 *                     Amazon Web Services account to this Region. The aggregator index remains in the
 *                         <code>UPDATING</code> state until all replication with other Regions
 *                     successfully stops. You can check the status of the asynchronous task by using
 *                     the <a>GetIndex</a> operation. When Resource Explorer successfully stops all
 *                     replication with other Regions, the <code>Status</code> response of that
 *                     operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately,
 *                     the resource information from other Regions that was previously stored in the
 *                     index is deleted within 30 days by another background task. Until that
 *                     asynchronous task completes, some results from other Regions can continue to
 *                     appear in search results.</p>
 *                <important>
 *                   <p>After you demote an aggregator index to a local index, you must wait
 *                         24 hours before you can promote another index to be the new
 *                         aggregator index for the account.</p>
 *                </important>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, UpdateIndexTypeCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, UpdateIndexTypeCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const command = new UpdateIndexTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIndexTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexTypeCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 */
export class UpdateIndexTypeCommand extends $Command<
  UpdateIndexTypeCommandInput,
  UpdateIndexTypeCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: UpdateIndexTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIndexTypeCommandInput, UpdateIndexTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIndexTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "UpdateIndexTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIndexTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateIndexTypeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateIndexTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIndexTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIndexTypeCommandOutput> {
    return deserializeAws_restJson1UpdateIndexTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
