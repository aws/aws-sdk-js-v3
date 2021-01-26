import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetOutcomesRequest, GetOutcomesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetOutcomesCommand,
  serializeAws_json1_1GetOutcomesCommand,
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

export type GetOutcomesCommandInput = GetOutcomesRequest;
export type GetOutcomesCommandOutput = GetOutcomesResult & __MetadataBearer;

/**
 * <p>Gets one or more outcomes. This is a paginated
 *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
 *          100 records per page. If you provide a <code>maxResults</code>, the value must be
 *          between 50 and 100. To get the next page results, provide the pagination token from the
 *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 */
export class GetOutcomesCommand extends $Command<
  GetOutcomesCommandInput,
  GetOutcomesCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOutcomesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOutcomesCommandInput, GetOutcomesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetOutcomesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOutcomesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOutcomesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOutcomesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOutcomesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOutcomesCommandOutput> {
    return deserializeAws_json1_1GetOutcomesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
