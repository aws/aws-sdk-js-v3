import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RegisterOnPremisesInstanceInput } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterOnPremisesInstanceCommand,
  serializeAws_json1_1RegisterOnPremisesInstanceCommand,
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

export type RegisterOnPremisesInstanceCommandInput = RegisterOnPremisesInstanceInput;
export type RegisterOnPremisesInstanceCommandOutput = __MetadataBearer;

/**
 * <p>Registers an on-premises instance.</p>
 *         <note>
 *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request.
 *                 You cannot use both.</p>
 *         </note>
 */
export class RegisterOnPremisesInstanceCommand extends $Command<
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterOnPremisesInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "RegisterOnPremisesInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterOnPremisesInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterOnPremisesInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterOnPremisesInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterOnPremisesInstanceCommandOutput> {
    return deserializeAws_json1_1RegisterOnPremisesInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
