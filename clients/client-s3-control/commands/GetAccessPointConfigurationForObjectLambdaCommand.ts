import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import {
  GetAccessPointConfigurationForObjectLambdaRequest,
  GetAccessPointConfigurationForObjectLambdaResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand,
  serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type GetAccessPointConfigurationForObjectLambdaCommandInput = GetAccessPointConfigurationForObjectLambdaRequest;
export type GetAccessPointConfigurationForObjectLambdaCommandOutput = GetAccessPointConfigurationForObjectLambdaResult &
  __MetadataBearer;

/**
 * <p>Returns configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetAccessPointConfigurationForObjectLambdaCommand extends $Command<
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessPointConfigurationForObjectLambdaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccessPointConfigurationForObjectLambdaCommandInput,
    GetAccessPointConfigurationForObjectLambdaCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessPointConfigurationForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessPointConfigurationForObjectLambdaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAccessPointConfigurationForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> {
    return deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
