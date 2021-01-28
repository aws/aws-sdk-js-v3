import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeParametersRequest, DescribeParametersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeParametersCommand,
  serializeAws_json1_1DescribeParametersCommand,
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

export type DescribeParametersCommandInput = DescribeParametersRequest;
export type DescribeParametersCommandOutput = DescribeParametersResult & __MetadataBearer;

/**
 * <p>Get information about a parameter.</p>
 *          <note>
 *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *     in the request, the response includes information up to the limit specified. The number of items
 *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *     reaches an internal limit while processing the results, it stops the operation and returns the
 *     matching values up to that point and a <code>NextToken</code>. You can specify the
 *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          </note>
 */
export class DescribeParametersCommand extends $Command<
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeParametersCommandInput) {
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
  ): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeParametersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeParametersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeParametersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeParametersCommandOutput> {
    return deserializeAws_json1_1DescribeParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
