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
  ListResourceDataSyncRequest,
  ListResourceDataSyncRequestFilterSensitiveLog,
  ListResourceDataSyncResult,
  ListResourceDataSyncResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListResourceDataSyncCommand,
  serializeAws_json1_1ListResourceDataSyncCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListResourceDataSyncCommandInput extends ListResourceDataSyncRequest {}
export interface ListResourceDataSyncCommandOutput extends ListResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link ListResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListResourceDataSyncCommand extends $Command<
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ListResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceDataSyncRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourceDataSyncResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1ListResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
