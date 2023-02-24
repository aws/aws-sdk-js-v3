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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  ValidateTemplateInput,
  ValidateTemplateInputFilterSensitiveLog,
  ValidateTemplateOutput,
  ValidateTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryValidateTemplateCommand,
  serializeAws_queryValidateTemplateCommand,
} from "../protocols/Aws_query";

export interface ValidateTemplateCommandInput extends ValidateTemplateInput {}
export interface ValidateTemplateCommandOutput extends ValidateTemplateOutput, __MetadataBearer {}

/**
 * <p>Validates a specified template. CloudFormation first checks if the template is
 *          valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If
 *          both these checks fail, CloudFormation returns a template validation error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ValidateTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ValidateTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ValidateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateTemplateCommandInput} for command's `input` shape.
 * @see {@link ValidateTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class ValidateTemplateCommand extends $Command<
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput,
  CloudFormationClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ValidateTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateTemplateInputFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateTemplateOutputFilterSensitiveLog,
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
