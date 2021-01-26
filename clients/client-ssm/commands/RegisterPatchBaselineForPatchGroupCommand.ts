import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterPatchBaselineForPatchGroupResult,
} from "../models/models_1";
import {
  deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand,
  serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand,
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

export type RegisterPatchBaselineForPatchGroupCommandInput = RegisterPatchBaselineForPatchGroupRequest;
export type RegisterPatchBaselineForPatchGroupCommandOutput = RegisterPatchBaselineForPatchGroupResult &
  __MetadataBearer;

/**
 * <p>Registers a patch baseline for a patch group.</p>
 */
export class RegisterPatchBaselineForPatchGroupCommand extends $Command<
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterPatchBaselineForPatchGroupCommandInput) {
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
  ): Handler<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "RegisterPatchBaselineForPatchGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterPatchBaselineForPatchGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> {
    return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
