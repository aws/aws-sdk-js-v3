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

import { ModifyOptionGroupMessage, ModifyOptionGroupResult } from "../models/models_1";
import { de_ModifyOptionGroupCommand, se_ModifyOptionGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyOptionGroupCommand}.
 */
export interface ModifyOptionGroupCommandInput extends ModifyOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyOptionGroupCommand}.
 */
export interface ModifyOptionGroupCommandOutput extends ModifyOptionGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 *   OptionsToInclude: [ // OptionConfigurationList
 *     { // OptionConfiguration
 *       OptionName: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       OptionVersion: "STRING_VALUE",
 *       DBSecurityGroupMemberships: [ // DBSecurityGroupNameList
 *         "STRING_VALUE",
 *       ],
 *       VpcSecurityGroupMemberships: [ // VpcSecurityGroupIdList
 *         "STRING_VALUE",
 *       ],
 *       OptionSettings: [ // OptionSettingsList
 *         { // OptionSetting
 *           Name: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           DefaultValue: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *           ApplyType: "STRING_VALUE",
 *           DataType: "STRING_VALUE",
 *           AllowedValues: "STRING_VALUE",
 *           IsModifiable: true || false,
 *           IsCollection: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   OptionsToRemove: [ // OptionNamesList
 *     "STRING_VALUE",
 *   ],
 *   ApplyImmediately: true || false,
 * };
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyOptionGroupResult
 * //   OptionGroup: { // OptionGroup
 * //     OptionGroupName: "STRING_VALUE",
 * //     OptionGroupDescription: "STRING_VALUE",
 * //     EngineName: "STRING_VALUE",
 * //     MajorEngineVersion: "STRING_VALUE",
 * //     Options: [ // OptionsList
 * //       { // Option
 * //         OptionName: "STRING_VALUE",
 * //         OptionDescription: "STRING_VALUE",
 * //         Persistent: true || false,
 * //         Permanent: true || false,
 * //         Port: Number("int"),
 * //         OptionVersion: "STRING_VALUE",
 * //         OptionSettings: [ // OptionSettingConfigurationList
 * //           { // OptionSetting
 * //             Name: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //             ApplyType: "STRING_VALUE",
 * //             DataType: "STRING_VALUE",
 * //             AllowedValues: "STRING_VALUE",
 * //             IsModifiable: true || false,
 * //             IsCollection: true || false,
 * //           },
 * //         ],
 * //         DBSecurityGroupMemberships: [ // DBSecurityGroupMembershipList
 * //           { // DBSecurityGroupMembership
 * //             DBSecurityGroupName: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //         VpcSecurityGroupMemberships: [ // VpcSecurityGroupMembershipList
 * //           { // VpcSecurityGroupMembership
 * //             VpcSecurityGroupId: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     AllowsVpcAndNonVpcInstanceMemberships: true || false,
 * //     VpcId: "STRING_VALUE",
 * //     OptionGroupArn: "STRING_VALUE",
 * //     SourceOptionGroup: "STRING_VALUE",
 * //     SourceAccountId: "STRING_VALUE",
 * //     CopyTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyOptionGroupCommandInput - {@link ModifyOptionGroupCommandInput}
 * @returns {@link ModifyOptionGroupCommandOutput}
 * @see {@link ModifyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidOptionGroupStateFault} (client fault)
 *  <p>The option group isn't in the <i>available</i> state.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify an option group
 * ```javascript
 * // The following example adds an option to an option group.
 * const input = {
 *   "ApplyImmediately": true,
 *   "OptionGroupName": "myawsuser-og02",
 *   "OptionsToInclude": [
 *     {
 *       "DBSecurityGroupMemberships": [
 *         "default"
 *       ],
 *       "OptionName": "MEMCACHED"
 *     }
 *   ]
 * };
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {}
 * }
 * *\/
 * // example id: to-modify-an-option-group-1473890247875
 * ```
 *
 */
export class ModifyOptionGroupCommand extends $Command<
  ModifyOptionGroupCommandInput,
  ModifyOptionGroupCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyOptionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyOptionGroupCommand";
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
  private serialize(input: ModifyOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyOptionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyOptionGroupCommandOutput> {
    return de_ModifyOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
