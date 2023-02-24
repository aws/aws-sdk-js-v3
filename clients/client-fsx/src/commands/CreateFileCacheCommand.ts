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
  CreateFileCacheRequest,
  CreateFileCacheRequestFilterSensitiveLog,
  CreateFileCacheResponse,
  CreateFileCacheResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFileCacheCommand,
  serializeAws_json1_1CreateFileCacheCommand,
} from "../protocols/Aws_json1_1";

export interface CreateFileCacheCommandInput extends CreateFileCacheRequest {}
export interface CreateFileCacheCommandOutput extends CreateFileCacheResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon File Cache resource.</p>
 *          <p>You can use this operation with a client request token in the request that
 *             Amazon File Cache uses to ensure idempotent creation.
 *             If a cache with the specified client request token exists and the parameters
 *             match, <code>CreateFileCache</code> returns the description of the existing
 *             cache. If a cache with the specified client request token exists and the
 *             parameters don't match, this call returns <code>IncompatibleParameterError</code>.
 *             If a file cache with the specified client request token doesn't exist,
 *             <code>CreateFileCache</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and
 *                     an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the cache in JSON format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle
 *                 state is still <code>CREATING</code>. You can check the cache creation status
 *                 by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state
 *                 along with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateFileCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileCacheCommandInput} for command's `input` shape.
 * @see {@link CreateFileCacheCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateFileCacheCommand extends $Command<
  CreateFileCacheCommandInput,
  CreateFileCacheCommandOutput,
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

  constructor(readonly input: CreateFileCacheCommandInput) {
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
  ): Handler<CreateFileCacheCommandInput, CreateFileCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFileCacheRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFileCacheResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFileCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFileCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFileCacheCommandOutput> {
    return deserializeAws_json1_1CreateFileCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
