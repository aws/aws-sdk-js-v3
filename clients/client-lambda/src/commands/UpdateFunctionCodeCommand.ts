// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  FunctionConfiguration,
  FunctionConfigurationFilterSensitiveLog,
  UpdateFunctionCodeRequest,
  UpdateFunctionCodeRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionCodeCommand,
  serializeAws_restJson1UpdateFunctionCodeCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFunctionCodeCommandInput extends UpdateFunctionCodeRequest {}
export interface UpdateFunctionCodeCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package
 *       must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p>
 *          <p>If the function's package type is <code>Image</code>, then you must specify the code package in
 *         <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p>
 *          <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file
 *         archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide
 *       the function code inline using the <code>ZipFile</code> field.</p>
 *          <p>The code in the deployment package must be compatible with the target instruction set architecture of the
 *       function (<code>x86-64</code> or <code>arm64</code>).</p>
 *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
 *       only the unpublished version.</p>
 *          <note>
 *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In
 *           Amazon ECR, if you update the image tag to a new image, Lambda does not automatically
 *         update the function.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionCodeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionCodeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCodeCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCodeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class UpdateFunctionCodeCommand extends $Command<
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
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
