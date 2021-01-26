import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetInsightImpactGraphRequest, GetInsightImpactGraphResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetInsightImpactGraphCommand,
  serializeAws_restJson1GetInsightImpactGraphCommand,
} from "../protocols/Aws_restJson1";
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

export type GetInsightImpactGraphCommandInput = GetInsightImpactGraphRequest;
export type GetInsightImpactGraphCommandOutput = GetInsightImpactGraphResult & __MetadataBearer;

/**
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 */
export class GetInsightImpactGraphCommand extends $Command<
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInsightImpactGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightImpactGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightImpactGraphRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInsightImpactGraphResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightImpactGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInsightImpactGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightImpactGraphCommandOutput> {
    return deserializeAws_restJson1GetInsightImpactGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
