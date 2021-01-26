import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import {
  deserializeAws_json1_1RegisterDefaultPatchBaselineCommand,
  serializeAws_json1_1RegisterDefaultPatchBaselineCommand,
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

export type RegisterDefaultPatchBaselineCommandInput = RegisterDefaultPatchBaselineRequest;
export type RegisterDefaultPatchBaselineCommandOutput = RegisterDefaultPatchBaselineResult & __MetadataBearer;

/**
 * <p>Defines the default patch baseline for the relevant operating system.</p>
 *          <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline
 *    ARN as the baseline ID value. For example, for CentOS, specify
 *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
 *     <code>pb-0574b43a65ea646ed</code>.</p>
 */
export class RegisterDefaultPatchBaselineCommand extends $Command<
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterDefaultPatchBaselineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "RegisterDefaultPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDefaultPatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterDefaultPatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDefaultPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDefaultPatchBaselineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterDefaultPatchBaselineCommandOutput> {
    return deserializeAws_json1_1RegisterDefaultPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
