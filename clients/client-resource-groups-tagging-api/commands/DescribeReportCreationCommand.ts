import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReportCreationCommand,
  serializeAws_json1_1DescribeReportCreationCommand,
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

export type DescribeReportCreationCommandInput = DescribeReportCreationInput;
export type DescribeReportCreationCommandOutput = DescribeReportCreationOutput & __MetadataBearer;

/**
 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
 *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
 */
export class DescribeReportCreationCommand extends $Command<
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReportCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "DescribeReportCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReportCreationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReportCreationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReportCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReportCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReportCreationCommandOutput> {
    return deserializeAws_json1_1DescribeReportCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
