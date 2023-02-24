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
  UpdateResourceDataSyncRequest,
  UpdateResourceDataSyncRequestFilterSensitiveLog,
  UpdateResourceDataSyncResult,
  UpdateResourceDataSyncResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateResourceDataSyncCommand,
  serializeAws_json1_1UpdateResourceDataSyncCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateResourceDataSyncCommandInput extends UpdateResourceDataSyncRequest {}
export interface UpdateResourceDataSyncCommandOutput extends UpdateResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't
 *    edit that sync later and choose the <code>Include all accounts from my Organizations
 *     configuration</code> option. Instead, you must delete the first resource data sync, and create a
 *    new one.</p>
 *          <note>
 *             <p>This API operation only supports a resource data sync that was created with a
 *     SyncFromSource <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateResourceDataSyncCommand extends $Command<
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
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

  constructor(readonly input: UpdateResourceDataSyncCommandInput) {
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
  ): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceDataSyncRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceDataSyncResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
