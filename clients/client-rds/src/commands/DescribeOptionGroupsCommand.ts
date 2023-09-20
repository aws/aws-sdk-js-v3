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

import { DescribeOptionGroupsMessage, OptionGroups } from "../models/models_1";
import { de_DescribeOptionGroupsCommand, se_DescribeOptionGroupsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandInput extends DescribeOptionGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandOutput extends OptionGroups, __MetadataBearer {}

/**
 * @public
 * <p>Describes the available option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeOptionGroupsMessage
 *   OptionGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   EngineName: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // OptionGroups
 * //   OptionGroupsList: [ // OptionGroupsList
 * //     { // OptionGroup
 * //       OptionGroupName: "STRING_VALUE",
 * //       OptionGroupDescription: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       Options: [ // OptionsList
 * //         { // Option
 * //           OptionName: "STRING_VALUE",
 * //           OptionDescription: "STRING_VALUE",
 * //           Persistent: true || false,
 * //           Permanent: true || false,
 * //           Port: Number("int"),
 * //           OptionVersion: "STRING_VALUE",
 * //           OptionSettings: [ // OptionSettingConfigurationList
 * //             { // OptionSetting
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               DefaultValue: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               ApplyType: "STRING_VALUE",
 * //               DataType: "STRING_VALUE",
 * //               AllowedValues: "STRING_VALUE",
 * //               IsModifiable: true || false,
 * //               IsCollection: true || false,
 * //             },
 * //           ],
 * //           DBSecurityGroupMemberships: [ // DBSecurityGroupMembershipList
 * //             { // DBSecurityGroupMembership
 * //               DBSecurityGroupName: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //             },
 * //           ],
 * //           VpcSecurityGroupMemberships: [ // VpcSecurityGroupMembershipList
 * //             { // VpcSecurityGroupMembership
 * //               VpcSecurityGroupId: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       AllowsVpcAndNonVpcInstanceMemberships: true || false,
 * //       VpcId: "STRING_VALUE",
 * //       OptionGroupArn: "STRING_VALUE",
 * //       SourceOptionGroup: "STRING_VALUE",
 * //       SourceAccountId: "STRING_VALUE",
 * //       CopyTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOptionGroupsCommandInput - {@link DescribeOptionGroupsCommandInput}
 * @returns {@link DescribeOptionGroupsCommandOutput}
 * @see {@link DescribeOptionGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the available option groups
 * ```javascript
 * // The following example lists the options groups for an Oracle Database 19c instance.
 * const input = {
 *   "EngineName": "oracle-ee",
 *   "MajorEngineVersion": "19"
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroupsList": [
 *     {
 *       "AllowsVpcAndNonVpcInstanceMemberships": true,
 *       "EngineName": "oracle-ee",
 *       "MajorEngineVersion": "19",
 *       "OptionGroupArn": "arn:aws:rds:us-west-1:111122223333:og:default:oracle-ee-19",
 *       "OptionGroupDescription": "Default option group for oracle-ee 19",
 *       "OptionGroupName": "default:oracle-ee-19",
 *       "Options": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-available-option-groups-1680283066000
 * ```
 *
 */
export class DescribeOptionGroupsCommand extends $Command<
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
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
  constructor(readonly input: DescribeOptionGroupsCommandInput) {
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
  ): Handler<DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptionGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeOptionGroups",
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
  private serialize(input: DescribeOptionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOptionGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOptionGroupsCommandOutput> {
    return de_DescribeOptionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
