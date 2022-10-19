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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  DeleteEventDataStoreRequest,
  DeleteEventDataStoreRequestFilterSensitiveLog,
  DeleteEventDataStoreResponse,
  DeleteEventDataStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEventDataStoreCommand,
  serializeAws_json1_1DeleteEventDataStoreCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteEventDataStoreCommandInput extends DeleteEventDataStoreRequest {}
export interface DeleteEventDataStoreCommandOutput extends DeleteEventDataStoreResponse, __MetadataBearer {}

/**
 * <p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN.
 *          After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of
 *          seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this
 *          operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p>
 *          <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>,
 *          <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a
 *          <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DeleteEventDataStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class DeleteEventDataStoreCommand extends $Command<
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: DeleteEventDataStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEventDataStoreCommandInput, DeleteEventDataStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventDataStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "DeleteEventDataStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventDataStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteEventDataStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventDataStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEventDataStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventDataStoreCommandOutput> {
    return deserializeAws_json1_1DeleteEventDataStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
