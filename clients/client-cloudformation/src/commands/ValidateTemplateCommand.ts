// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ValidateTemplateInput, ValidateTemplateOutput } from "../models/models_0";
import { de_ValidateTemplateCommand, se_ValidateTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidateTemplateCommand}.
 */
export interface ValidateTemplateCommandInput extends ValidateTemplateInput {}
/**
 * @public
 *
 * The output of {@link ValidateTemplateCommand}.
 */
export interface ValidateTemplateCommandOutput extends ValidateTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't,
 *     CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation
 *    returns a template validation error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ValidateTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ValidateTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ValidateTemplateInput
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 * };
 * const command = new ValidateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ValidateTemplateOutput
 * //   Parameters: [ // TemplateParameters
 * //     { // TemplateParameter
 * //       ParameterKey: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       NoEcho: true || false,
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   Capabilities: [ // Capabilities
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //   ],
 * //   CapabilitiesReason: "STRING_VALUE",
 * //   DeclaredTransforms: [ // TransformsList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateTemplateCommandInput - {@link ValidateTemplateCommandInput}
 * @returns {@link ValidateTemplateCommandOutput}
 * @see {@link ValidateTemplateCommandInput} for command's `input` shape.
 * @see {@link ValidateTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ValidateTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidateTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateTemplateCommandOutput> {
    return de_ValidateTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
