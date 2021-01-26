import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetVariablesRequest, GetVariablesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetVariablesCommand,
  serializeAws_json1_1GetVariablesCommand,
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

export type GetVariablesCommandInput = GetVariablesRequest;
export type GetVariablesCommandOutput = GetVariablesResult & __MetadataBearer;

/**
 * <p>Gets all of the variables or the specific variable. This is a
 *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
 *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
 *          50 and 100. To get the next page result, a provide a pagination token from
 *         <code>GetVariablesResult</code> as part of your request. Null pagination token
 *          fetches the records from the beginning. </p>
 */
export class GetVariablesCommand extends $Command<
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVariablesCommandInput) {
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
  ): Handler<GetVariablesCommandInput, GetVariablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetVariablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVariablesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVariablesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVariablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetVariablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVariablesCommandOutput> {
    return deserializeAws_json1_1GetVariablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
