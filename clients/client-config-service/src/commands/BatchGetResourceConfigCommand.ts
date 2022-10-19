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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  BatchGetResourceConfigRequest,
  BatchGetResourceConfigRequestFilterSensitiveLog,
  BatchGetResourceConfigResponse,
  BatchGetResourceConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetResourceConfigCommand,
  serializeAws_json1_1BatchGetResourceConfigCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetResourceConfigCommandInput extends BatchGetResourceConfigRequest {}
export interface BatchGetResourceConfigCommandOutput extends BatchGetResourceConfigResponse, __MetadataBearer {}

/**
 * <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources.
 * 			The operation also returns a list of resources that are
 * 			not processed in the current request. If there are no unprocessed
 * 			resources, the operation returns an empty unprocessedResourceKeys
 * 			list. </p>
 * 		       <note>
 * 			         <ul>
 *                <li>
 * 					             <p>The API does not return results for deleted
 * 						resources.</p>
 * 				           </li>
 *                <li>
 * 					             <p> The API does not return any tags for the requested
 * 						resources. This information is filtered out of the
 * 						supplementaryConfiguration section of the API
 * 						response.</p>
 * 				           </li>
 *             </ul>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class BatchGetResourceConfigCommand extends $Command<
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: BatchGetResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetResourceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "BatchGetResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetResourceConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetResourceConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetResourceConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetResourceConfigCommandOutput> {
    return deserializeAws_json1_1BatchGetResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
