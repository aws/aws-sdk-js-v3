import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeSourceRegionsCommand,
  serializeAws_queryDescribeSourceRegionsCommand,
} from "../protocols/Aws_query";
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

export type DescribeSourceRegionsCommandInput = DescribeSourceRegionsMessage;
export type DescribeSourceRegionsCommandOutput = SourceRegionMessage & __MetadataBearer;

/**
 * <p>Returns a list of the source AWS Regions where the current AWS Region can create a
 *             read replica or copy a DB snapshot from. This API action supports pagination.</p>
 */
export class DescribeSourceRegionsCommand extends $Command<
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSourceRegionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeSourceRegionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSourceRegionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SourceRegionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSourceRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSourceRegionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceRegionsCommandOutput> {
    return deserializeAws_queryDescribeSourceRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
