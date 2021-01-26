import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, UpdateFunctionCodeRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionCodeCommand,
  serializeAws_restJson1UpdateFunctionCodeCommand,
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

export type UpdateFunctionCodeCommandInput = UpdateFunctionCodeRequest;
export type UpdateFunctionCodeCommandOutput = FunctionConfiguration & __MetadataBearer;

/**
 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed
 *       by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p>
 *
 *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
 *       only the unpublished version.</p>
 *          <note>
 *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if
 *         you update the image tag to a new image, Lambda does not automatically update the function.</p>
 *          </note>
 */
export class UpdateFunctionCodeCommand extends $Command<
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFunctionCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFunctionCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFunctionCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFunctionCodeCommandOutput> {
    return deserializeAws_restJson1UpdateFunctionCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
