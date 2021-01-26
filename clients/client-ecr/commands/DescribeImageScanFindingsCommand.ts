import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImageScanFindingsCommand,
  serializeAws_json1_1DescribeImageScanFindingsCommand,
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

export type DescribeImageScanFindingsCommandInput = DescribeImageScanFindingsRequest;
export type DescribeImageScanFindingsCommandOutput = DescribeImageScanFindingsResponse & __MetadataBearer;

/**
 * <p>Returns the scan findings for the specified image.</p>
 */
export class DescribeImageScanFindingsCommand extends $Command<
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImageScanFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeImageScanFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageScanFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageScanFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImageScanFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageScanFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageScanFindingsCommandOutput> {
    return deserializeAws_json1_1DescribeImageScanFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
