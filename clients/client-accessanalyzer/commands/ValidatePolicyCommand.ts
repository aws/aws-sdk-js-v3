import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ValidatePolicyRequest, ValidatePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ValidatePolicyCommand,
  serializeAws_restJson1ValidatePolicyCommand,
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

export interface ValidatePolicyCommandInput extends ValidatePolicyRequest {}
export interface ValidatePolicyCommandOutput extends ValidatePolicyResponse, __MetadataBearer {}

/**
 * <p>Requests the validation of a policy and returns a list of findings. The findings help
 *          you identify issues and provide actionable recommendations to resolve the issue and enable
 *          you to author functional policies that meet security best practices. </p>
 */
export class ValidatePolicyCommand extends $Command<
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidatePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidatePolicyCommandInput, ValidatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ValidatePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidatePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidatePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidatePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidatePolicyCommandOutput> {
    return deserializeAws_restJson1ValidatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
