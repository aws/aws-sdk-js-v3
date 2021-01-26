import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetAggregateResourceConfigRequest, BatchGetAggregateResourceConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetAggregateResourceConfigCommand,
  serializeAws_json1_1BatchGetAggregateResourceConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type BatchGetAggregateResourceConfigCommandInput = BatchGetAggregateResourceConfigRequest;
export type BatchGetAggregateResourceConfigCommandOutput = BatchGetAggregateResourceConfigResponse & __MetadataBearer;

/**
 * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request.
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
 */
export class BatchGetAggregateResourceConfigCommand extends $Command<
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "BatchGetAggregateResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetAggregateResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetAggregateResourceConfigResponse.filterSensitiveLog,
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
