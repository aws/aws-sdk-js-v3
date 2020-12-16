import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAnalysisPermissionsRequest, DescribeAnalysisPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAnalysisPermissionsCommand,
  serializeAws_restJson1DescribeAnalysisPermissionsCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeAnalysisPermissionsCommandInput = DescribeAnalysisPermissionsRequest;
export type DescribeAnalysisPermissionsCommandOutput = DescribeAnalysisPermissionsResponse & __MetadataBearer;

/**
 * <p>Provides the read and write permissions for an analysis.</p>
 */
export class DescribeAnalysisPermissionsCommand extends $Command<
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnalysisPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnalysisPermissionsCommandInput, DescribeAnalysisPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAnalysisPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnalysisPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnalysisPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnalysisPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAnalysisPermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAnalysisPermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeAnalysisPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
