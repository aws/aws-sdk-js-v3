import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetEntityTypesRequest, GetEntityTypesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetEntityTypesCommand,
  serializeAws_json1_1GetEntityTypesCommand,
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

export type GetEntityTypesCommandInput = GetEntityTypesRequest;
export type GetEntityTypesCommandOutput = GetEntityTypesResult & __MetadataBearer;

/**
 * <p>Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *          <code>GetEntityTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 */
export class GetEntityTypesCommand extends $Command<
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEntityTypesCommandInput) {
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
  ): Handler<GetEntityTypesCommandInput, GetEntityTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEntityTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEntityTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEntityTypesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEntityTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntityTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntityTypesCommandOutput> {
    return deserializeAws_json1_1GetEntityTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
