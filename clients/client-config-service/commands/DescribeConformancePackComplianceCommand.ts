import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConformancePackComplianceCommand,
  serializeAws_json1_1DescribeConformancePackComplianceCommand,
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

export type DescribeConformancePackComplianceCommandInput = DescribeConformancePackComplianceRequest;
export type DescribeConformancePackComplianceCommandOutput = DescribeConformancePackComplianceResponse &
  __MetadataBearer;

/**
 * <p>Returns compliance details for each rule in that conformance pack.</p>
 * 		       <note>
 *             <p>You must provide exact rule names.</p>
 *          </note>
 */
export class DescribeConformancePackComplianceCommand extends $Command<
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConformancePackComplianceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePackComplianceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConformancePackComplianceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConformancePackComplianceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConformancePackComplianceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConformancePackComplianceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConformancePackComplianceCommandOutput> {
    return deserializeAws_json1_1DescribeConformancePackComplianceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
