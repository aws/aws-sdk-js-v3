import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateWorkforceRequest, CreateWorkforceResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateWorkforceCommand,
  serializeAws_json1_1CreateWorkforceCommand,
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

export type CreateWorkforceCommandInput = CreateWorkforceRequest;
export type CreateWorkforceCommandOutput = CreateWorkforceResponse & __MetadataBearer;

/**
 * <p>Use this operation to create a workforce. This operation will return an error
 *       if a workforce already exists in the AWS Region that you specify. You can only
 *       create one workforce in each AWS Region per AWS account.</p>
 *
 *          <p>If you want to create a new workforce in an AWS Region where
 *       a workforce already exists, use the  API
 *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
 *       to create a new workforce.</p>
 *
 *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
 *     in <code>CognitoConfig</code>.
 *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
 *     For more information, see
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
 *       Create a Private Workforce (Amazon Cognito)</a>.</p>
 *
 *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
 *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
 *       because groups are used by Ground Truth and Amazon A2I to create work teams.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
 *       Create a Private Workforce (OIDC IdP)</a>.</p>
 */
export class CreateWorkforceCommand extends $Command<
  CreateWorkforceCommandInput,
  CreateWorkforceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkforceCommandInput, CreateWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkforceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkforceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkforceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkforceCommandOutput> {
    return deserializeAws_json1_1CreateWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
