import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { deserializeAws_queryCreatePolicyCommand, serializeAws_queryCreatePolicyCommand } from "../protocols/Aws_query";
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

export type CreatePolicyCommandInput = CreatePolicyRequest;
export type CreatePolicyCommandOutput = CreatePolicyResponse & __MetadataBearer;

/**
 * <p>Creates a new managed policy for your AWS account.</p>
 *          <p>This operation creates a policy version with a version identifier of <code>v1</code> and
 *          sets v1 as the policy's default version. For more information about policy versions, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 */
export class CreatePolicyCommand extends $Command<
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePolicyCommandInput, CreatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreatePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePolicyCommandOutput> {
    return deserializeAws_queryCreatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
