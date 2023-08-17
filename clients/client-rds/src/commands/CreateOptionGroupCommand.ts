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

import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/models_0";
import { de_CreateOptionGroupCommand, se_CreateOptionGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandInput extends CreateOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandOutput extends CreateOptionGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new option group. You can create up to 20 option groups.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 *   EngineName: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE", // required
 *   OptionGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateOptionGroupResult
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
 * @param CreateOptionGroupCommandInput - {@link CreateOptionGroupCommandInput}
 * @returns {@link CreateOptionGroupCommandOutput}
 * @see {@link CreateOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupAlreadyExistsFault} (client fault)
 *  <p>The option group you are trying to create already exists.</p>
 *
 * @throws {@link OptionGroupQuotaExceededFault} (client fault)
 *  <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To Create an Amazon RDS option group
 * ```javascript
 * // The following example creates a new Amazon RDS option group for Oracle MySQL version 8,0 named MyOptionGroup.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "8.0",
 *   "OptionGroupDescription": "MySQL 8.0 option group",
 *   "OptionGroupName": "MyOptionGroup"
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {
 *     "AllowsVpcAndNonVpcInstanceMemberships": true,
 *     "EngineName": "mysql",
 *     "MajorEngineVersion": "8.0",
 *     "OptionGroupArn": "arn:aws:rds:us-east-1:123456789012:og:myoptiongroup",
 *     "OptionGroupDescription": "MySQL 8.0 option group",
 *     "OptionGroupName": "myoptiongroup",
 *     "Options": []
 *   }
 * }
 * *\/
 * // example id: to-create-an-amazon-rds-option-group-1679958217590
 * ```
 *
 */
export class CreateOptionGroupCommand extends $Command<
  CreateOptionGroupCommandInput,
  CreateOptionGroupCommandOutput,
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
  constructor(readonly input: CreateOptionGroupCommandInput) {
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
  ): Handler<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateOptionGroupCommand";
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
  private serialize(input: CreateOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOptionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOptionGroupCommandOutput> {
    return de_CreateOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
