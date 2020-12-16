import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DescribeJobRunRequest, DescribeJobRunResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobRunCommand,
  serializeAws_restJson1DescribeJobRunCommand,
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

export type DescribeJobRunCommandInput = DescribeJobRunRequest;
export type DescribeJobRunCommandOutput = DescribeJobRunResponse & __MetadataBearer;

/**
 * <p>Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 */
export class DescribeJobRunCommand extends $Command<
  DescribeJobRunCommandInput,
  DescribeJobRunCommandOutput,
  EMRContainersClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobRunCommandInput, DescribeJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobRunCommandOutput> {
    return deserializeAws_restJson1DescribeJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
