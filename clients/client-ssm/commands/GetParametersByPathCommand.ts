import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParametersByPathRequest, GetParametersByPathResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetParametersByPathCommand,
  serializeAws_json1_1GetParametersByPathCommand,
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

export type GetParametersByPathCommandInput = GetParametersByPathRequest;
export type GetParametersByPathCommandOutput = GetParametersByPathResult & __MetadataBearer;

/**
 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
 *          <note>
 *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *     in the request, the response includes information up to the limit specified. The number of items
 *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *     reaches an internal limit while processing the results, it stops the operation and returns the
 *     matching values up to that point and a <code>NextToken</code>. You can specify the
 *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          </note>
 */
export class GetParametersByPathCommand extends $Command<
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetParametersByPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParametersByPathCommandInput, GetParametersByPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParametersByPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParametersByPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetParametersByPathResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParametersByPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParametersByPathCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersByPathCommandOutput> {
    return deserializeAws_json1_1GetParametersByPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
