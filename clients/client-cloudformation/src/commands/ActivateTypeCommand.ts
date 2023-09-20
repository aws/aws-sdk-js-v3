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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ActivateTypeInput, ActivateTypeOutput } from "../models/models_0";
import { de_ActivateTypeCommand, se_ActivateTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ActivateTypeCommand}.
 */
export interface ActivateTypeCommandInput extends ActivateTypeInput {}
/**
 * @public
 *
 * The output of {@link ActivateTypeCommand}.
 */
export interface ActivateTypeCommandOutput extends ActivateTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Activates a public third-party extension, making it available for use in stack templates. For more information,
 *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public
 *     extensions</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <p>Once you have activated a public third-party extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see
 *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at
 *     the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ActivateTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ActivateTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ActivateTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   PublicTypeArn: "STRING_VALUE",
 *   PublisherId: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   TypeNameAlias: "STRING_VALUE",
 *   AutoUpdate: true || false,
 *   LoggingConfig: { // LoggingConfig
 *     LogRoleArn: "STRING_VALUE", // required
 *     LogGroupName: "STRING_VALUE", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   VersionBump: "MAJOR" || "MINOR",
 *   MajorVersion: Number("long"),
 * };
 * const command = new ActivateTypeCommand(input);
 * const response = await client.send(command);
 * // { // ActivateTypeOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ActivateTypeCommandInput - {@link ActivateTypeCommandInput}
 * @returns {@link ActivateTypeCommandOutput}
 * @see {@link ActivateTypeCommandInput} for command's `input` shape.
 * @see {@link ActivateTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ActivateTypeCommand extends $Command<
  ActivateTypeCommandInput,
  ActivateTypeCommandOutput,
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
  constructor(readonly input: ActivateTypeCommandInput) {
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
  ): Handler<ActivateTypeCommandInput, ActivateTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ActivateTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ActivateTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ActivateType",
      },
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
  private serialize(input: ActivateTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ActivateTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateTypeCommandOutput> {
    return de_ActivateTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
