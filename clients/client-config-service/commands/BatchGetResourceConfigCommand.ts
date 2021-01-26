import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetResourceConfigRequest, BatchGetResourceConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetResourceConfigCommand,
  serializeAws_json1_1BatchGetResourceConfigCommand,
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

export type BatchGetResourceConfigCommandInput = BatchGetResourceConfigRequest;
export type BatchGetResourceConfigCommandOutput = BatchGetResourceConfigResponse & __MetadataBearer;

/**
 * <p>Returns the current configuration for one or more requested
 * 			resources. The operation also returns a list of resources that are
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
 */
export class BatchGetResourceConfigCommand extends $Command<
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "BatchGetResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetResourceConfigResponse.filterSensitiveLog,
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
