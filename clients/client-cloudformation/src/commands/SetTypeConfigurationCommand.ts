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
import { SetTypeConfigurationInput, SetTypeConfigurationOutput } from "../models/models_0";
import { de_SetTypeConfigurationCommand, se_SetTypeConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetTypeConfigurationCommand}.
 */
export interface SetTypeConfigurationCommandInput extends SetTypeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link SetTypeConfigurationCommand}.
 */
export interface SetTypeConfigurationCommandOutput extends SetTypeConfigurationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Specifies the configuration data for a registered CloudFormation extension, in the given account and
 *    Region.</p>
 *          <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element
 *    of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at
 *     the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <important>
 *             <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such
 *     as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using
 *      dynamic references to specify template values</a> in the <i>CloudFormation User
 *     Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeConfigurationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeConfigurationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // SetTypeConfigurationInput
 *   TypeArn: "STRING_VALUE",
 *   Configuration: "STRING_VALUE", // required
 *   ConfigurationAlias: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 * };
 * const command = new SetTypeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetTypeConfigurationOutput
 * //   ConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetTypeConfigurationCommandInput - {@link SetTypeConfigurationCommandInput}
 * @returns {@link SetTypeConfigurationCommandOutput}
 * @see {@link SetTypeConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetTypeConfigurationCommandOutput} for command's `response` shape.
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
export class SetTypeConfigurationCommand extends $Command<
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
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
  constructor(readonly input: SetTypeConfigurationCommandInput) {
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
  ): Handler<SetTypeConfigurationCommandInput, SetTypeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTypeConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SetTypeConfigurationCommand";
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
  private serialize(input: SetTypeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetTypeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTypeConfigurationCommandOutput> {
    return de_SetTypeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
