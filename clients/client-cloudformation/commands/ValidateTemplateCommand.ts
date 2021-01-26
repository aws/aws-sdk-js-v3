import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ValidateTemplateInput, ValidateTemplateOutput } from "../models/models_0";
import {
  deserializeAws_queryValidateTemplateCommand,
  serializeAws_queryValidateTemplateCommand,
} from "../protocols/Aws_query";
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

export type ValidateTemplateCommandInput = ValidateTemplateInput;
export type ValidateTemplateCommandOutput = ValidateTemplateOutput & __MetadataBearer;

/**
 * <p>Validates a specified template. AWS CloudFormation first checks if the template is
 *          valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both
 *          these checks fail, AWS CloudFormation returns a template validation error.</p>
 */
export class ValidateTemplateCommand extends $Command<
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateTemplateCommandInput, ValidateTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ValidateTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryValidateTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateTemplateCommandOutput> {
    return deserializeAws_queryValidateTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
