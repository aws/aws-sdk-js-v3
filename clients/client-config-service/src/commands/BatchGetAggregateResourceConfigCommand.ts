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
  BatchGetAggregateResourceConfigRequest,
  BatchGetAggregateResourceConfigRequestFilterSensitiveLog,
  BatchGetAggregateResourceConfigResponse,
  BatchGetAggregateResourceConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetAggregateResourceConfigCommand,
  serializeAws_json1_1BatchGetAggregateResourceConfigCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetAggregateResourceConfigCommandInput extends BatchGetAggregateResourceConfigRequest {}
export interface BatchGetAggregateResourceConfigCommandOutput
  extends BatchGetAggregateResourceConfigResponse,
    __MetadataBearer {}

/**
 * <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request.
 * 			If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p>
 *
 * 		       <note>
 *             <ul>
 *                <li>
 *                   <p>The API does not return results for deleted resources.</p>
 *                </li>
 *                <li>
 *                   <p> The API does not return tags and relationships.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class BatchGetAggregateResourceConfigCommand extends $Command<
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
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

  constructor(readonly input: BatchGetAggregateResourceConfigCommandInput) {
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
  ): Handler<BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetAggregateResourceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "BatchGetAggregateResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetAggregateResourceConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetAggregateResourceConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchGetAggregateResourceConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetAggregateResourceConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetAggregateResourceConfigCommandOutput> {
    return deserializeAws_json1_1BatchGetAggregateResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
