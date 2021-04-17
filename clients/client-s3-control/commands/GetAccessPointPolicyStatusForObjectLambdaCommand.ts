import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import {
  GetAccessPointPolicyStatusForObjectLambdaRequest,
  GetAccessPointPolicyStatusForObjectLambdaResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand,
  serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand,
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

export interface GetAccessPointPolicyStatusForObjectLambdaCommandInput
  extends GetAccessPointPolicyStatusForObjectLambdaRequest {}
export interface GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  extends GetAccessPointPolicyStatusForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <p>Returns the status of the resource policy associated with an Object Lambda Access Point.</p>
 */
export class GetAccessPointPolicyStatusForObjectLambdaCommand extends $Command<
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessPointPolicyStatusForObjectLambdaCommandInput) {
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
    GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessPointPolicyStatusForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessPointPolicyStatusForObjectLambdaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessPointPolicyStatusForObjectLambdaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> {
    return deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
