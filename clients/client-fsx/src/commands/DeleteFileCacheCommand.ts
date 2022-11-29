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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DeleteFileCacheRequest,
  DeleteFileCacheRequestFilterSensitiveLog,
  DeleteFileCacheResponse,
  DeleteFileCacheResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFileCacheCommand,
  serializeAws_json1_1DeleteFileCacheCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteFileCacheCommandInput extends DeleteFileCacheRequest {}
export interface DeleteFileCacheCommandOutput extends DeleteFileCacheResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data
 *             is gone.</p>
 *          <p>The <code>DeleteFileCache</code> operation returns while the cache has the
 *             <code>DELETING</code> status. You can check the cache deletion status by
 *             calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your
 *             account. If you pass the cache ID for a deleted cache, the
 *             <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code>
 *             error.</p>
 *          <important>
 *             <p>The data in a deleted cache is also deleted and can't be recovered by
 *                 any means.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteFileCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteFileCacheCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class DeleteFileCacheCommand extends $Command<
  DeleteFileCacheCommandInput,
  DeleteFileCacheCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: DeleteFileCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileCacheCommandInput, DeleteFileCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFileCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteFileCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileCacheRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteFileCacheResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFileCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileCacheCommandOutput> {
    return deserializeAws_json1_1DeleteFileCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
