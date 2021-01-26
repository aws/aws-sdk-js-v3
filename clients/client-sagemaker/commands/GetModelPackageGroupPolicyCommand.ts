import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { GetModelPackageGroupPolicyInput, GetModelPackageGroupPolicyOutput } from "../models/models_2";
import {
  deserializeAws_json1_1GetModelPackageGroupPolicyCommand,
  serializeAws_json1_1GetModelPackageGroupPolicyCommand,
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

export type GetModelPackageGroupPolicyCommandInput = GetModelPackageGroupPolicyInput;
export type GetModelPackageGroupPolicyCommandOutput = GetModelPackageGroupPolicyOutput & __MetadataBearer;

/**
 * <p>Gets a resource policy that manages access for a model group. For information about
 *             resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>AWS Identity and
 *                     Access Management User Guide.</i>.</p>
 */
export class GetModelPackageGroupPolicyCommand extends $Command<
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetModelPackageGroupPolicyCommandInput) {
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
  ): Handler<GetModelPackageGroupPolicyCommandInput, GetModelPackageGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetModelPackageGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetModelPackageGroupPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetModelPackageGroupPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetModelPackageGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetModelPackageGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetModelPackageGroupPolicyCommandOutput> {
    return deserializeAws_json1_1GetModelPackageGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
