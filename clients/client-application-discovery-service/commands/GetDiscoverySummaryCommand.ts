import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDiscoverySummaryCommand,
  serializeAws_json1_1GetDiscoverySummaryCommand,
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

export type GetDiscoverySummaryCommandInput = GetDiscoverySummaryRequest;
export type GetDiscoverySummaryCommandOutput = GetDiscoverySummaryResponse & __MetadataBearer;

/**
 * <p>Retrieves a short summary of discovered assets.</p>
 *          <p>This API operation takes no request parameters and is called as is at the command
 *       prompt as shown in the example.</p>
 */
export class GetDiscoverySummaryCommand extends $Command<
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDiscoverySummaryCommandInput) {
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
  ): Handler<GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "GetDiscoverySummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiscoverySummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoverySummaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiscoverySummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDiscoverySummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoverySummaryCommandOutput> {
    return deserializeAws_json1_1GetDiscoverySummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
