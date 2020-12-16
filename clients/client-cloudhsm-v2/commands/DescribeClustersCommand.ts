import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeClustersCommand,
  serializeAws_json1_1DescribeClustersCommand,
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

export type DescribeClustersCommandInput = DescribeClustersRequest;
export type DescribeClustersCommandOutput = DescribeClustersResponse & __MetadataBearer;

/**
 * <p>Gets information about AWS CloudHSM clusters.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the clusters. When the response contains only a subset of clusters, it includes
 *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
 *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
 *       an empty or null value), that means there are no more clusters to get.</p>
 */
export class DescribeClustersCommand extends $Command<
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "DescribeClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClustersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClustersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClustersCommandOutput> {
    return deserializeAws_json1_1DescribeClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
