import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { PutModelPackageGroupPolicyInput, PutModelPackageGroupPolicyOutput } from "../models/models_2";
import {
  deserializeAws_json1_1PutModelPackageGroupPolicyCommand,
  serializeAws_json1_1PutModelPackageGroupPolicyCommand,
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

export interface PutModelPackageGroupPolicyCommandInput extends PutModelPackageGroupPolicyInput {}
export interface PutModelPackageGroupPolicyCommandOutput extends PutModelPackageGroupPolicyOutput, __MetadataBearer {}

/**
 * <p>Adds a resouce policy to control access to a model group. For information about
 *             resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, PutModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, PutModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new PutModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutModelPackageGroupPolicyCommand extends $Command<
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutModelPackageGroupPolicyCommandInput) {
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
  ): Handler<PutModelPackageGroupPolicyCommandInput, PutModelPackageGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "PutModelPackageGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutModelPackageGroupPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutModelPackageGroupPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutModelPackageGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutModelPackageGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutModelPackageGroupPolicyCommandOutput> {
    return deserializeAws_json1_1PutModelPackageGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
