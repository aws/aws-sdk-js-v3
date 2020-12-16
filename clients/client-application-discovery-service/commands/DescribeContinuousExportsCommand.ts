import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeContinuousExportsRequest, DescribeContinuousExportsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeContinuousExportsCommand,
  serializeAws_json1_1DescribeContinuousExportsCommand,
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

export type DescribeContinuousExportsCommandInput = DescribeContinuousExportsRequest;
export type DescribeContinuousExportsCommandOutput = DescribeContinuousExportsResponse & __MetadataBearer;

/**
 * <p>Lists exports as specified by ID. All continuous exports associated with your user
 *       account can be listed if you call <code>DescribeContinuousExports</code> as is without passing
 *       any parameters.</p>
 */
export class DescribeContinuousExportsCommand extends $Command<
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContinuousExportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContinuousExportsCommandInput, DescribeContinuousExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeContinuousExportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContinuousExportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContinuousExportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContinuousExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeContinuousExportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContinuousExportsCommandOutput> {
    return deserializeAws_json1_1DescribeContinuousExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
