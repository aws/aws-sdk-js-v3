import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomaliesRequest, GetAnomaliesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAnomaliesCommand,
  serializeAws_json1_1GetAnomaliesCommand,
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

export type GetAnomaliesCommandInput = GetAnomaliesRequest;
export type GetAnomaliesCommandOutput = GetAnomaliesResponse & __MetadataBearer;

/**
 * <p>Retrieves all of the cost anomalies detected on your account, during the time period
 *       specified by the <code>DateInterval</code> object. </p>
 */
export class GetAnomaliesCommand extends $Command<
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAnomaliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnomaliesCommandInput, GetAnomaliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetAnomaliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnomaliesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAnomaliesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnomaliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAnomaliesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomaliesCommandOutput> {
    return deserializeAws_json1_1GetAnomaliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
