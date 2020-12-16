import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetLabelsRequest, GetLabelsResult } from "../models/models_0";
import { deserializeAws_json1_1GetLabelsCommand, serializeAws_json1_1GetLabelsCommand } from "../protocols/Aws_json1_1";
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

export type GetLabelsCommandInput = GetLabelsRequest;
export type GetLabelsCommandOutput = GetLabelsResult & __MetadataBearer;

/**
 * <p>Gets all labels or a specific label if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50.
 *          To get the next page results, provide the pagination token from the
 *          <code>GetGetLabelsResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 */
export class GetLabelsCommand extends $Command<
  GetLabelsCommandInput,
  GetLabelsCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLabelsCommandInput) {
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
  ): Handler<GetLabelsCommandInput, GetLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLabelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLabelsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLabelsCommandOutput> {
    return deserializeAws_json1_1GetLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
