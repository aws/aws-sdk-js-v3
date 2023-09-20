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

import { DescribeOptionGroupOptionsMessage, OptionGroupOptionsMessage } from "../models/models_1";
import { de_DescribeOptionGroupOptionsCommand, se_DescribeOptionGroupOptionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandInput extends DescribeOptionGroupOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandOutput extends OptionGroupOptionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Describes all available options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeOptionGroupOptionsMessage
 *   EngineName: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * // { // OptionGroupOptionsMessage
 * //   OptionGroupOptions: [ // OptionGroupOptionsList
 * //     { // OptionGroupOption
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       MinimumRequiredMinorEngineVersion: "STRING_VALUE",
 * //       PortRequired: true || false,
 * //       DefaultPort: Number("int"),
 * //       OptionsDependedOn: [ // OptionsDependedOn
 * //         "STRING_VALUE",
 * //       ],
 * //       OptionsConflictsWith: [ // OptionsConflictsWith
 * //         "STRING_VALUE",
 * //       ],
 * //       Persistent: true || false,
 * //       Permanent: true || false,
 * //       RequiresAutoMinorEngineVersionUpgrade: true || false,
 * //       VpcOnly: true || false,
 * //       SupportsOptionVersionDowngrade: true || false,
 * //       OptionGroupOptionSettings: [ // OptionGroupOptionSettingsList
 * //         { // OptionGroupOptionSetting
 * //           SettingName: "STRING_VALUE",
 * //           SettingDescription: "STRING_VALUE",
 * //           DefaultValue: "STRING_VALUE",
 * //           ApplyType: "STRING_VALUE",
 * //           AllowedValues: "STRING_VALUE",
 * //           IsModifiable: true || false,
 * //           IsRequired: true || false,
 * //           MinimumEngineVersionPerAllowedValue: [ // MinimumEngineVersionPerAllowedValueList
 * //             { // MinimumEngineVersionPerAllowedValue
 * //               AllowedValue: "STRING_VALUE",
 * //               MinimumEngineVersion: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OptionGroupOptionVersions: [ // OptionGroupOptionVersionsList
 * //         { // OptionVersion
 * //           Version: "STRING_VALUE",
 * //           IsDefault: true || false,
 * //         },
 * //       ],
 * //       CopyableCrossAccount: true || false,
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOptionGroupOptionsCommandInput - {@link DescribeOptionGroupOptionsCommandInput}
 * @returns {@link DescribeOptionGroupOptionsCommandOutput}
 * @see {@link DescribeOptionGroupOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe all available options
 * ```javascript
 * // The following example lists the options for an RDS for MySQL version 8.0 DB instance.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "8.0"
 * };
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroupOptions": [
 *     {
 *       "Description": "MariaDB Audit Plugin",
 *       "EngineName": "mysql",
 *       "MajorEngineVersion": "8.0",
 *       "MinimumRequiredMinorEngineVersion": "25",
 *       "Name": "MARIADB_AUDIT_PLUGIN",
 *       "OptionGroupOptionSettings": [
 *         {
 *           "ApplyType": "DYNAMIC",
 *           "IsModifiable": true,
 *           "IsRequired": false,
 *           "MinimumEngineVersionPerAllowedValue": [],
 *           "SettingDescription": "Include specified users",
 *           "SettingName": "SERVER_AUDIT_INCL_USERS"
 *         },
 *         {
 *           "ApplyType": "DYNAMIC",
 *           "IsModifiable": true,
 *           "IsRequired": false,
 *           "MinimumEngineVersionPerAllowedValue": [],
 *           "SettingDescription": "Exclude specified users",
 *           "SettingName": "SERVER_AUDIT_EXCL_USERS"
 *         }
 *       ],
 *       "OptionsConflictsWith": [],
 *       "OptionsDependedOn": [],
 *       "Permanent": false,
 *       "Persistent": false,
 *       "PortRequired": false,
 *       "RequiresAutoMinorEngineVersionUpgrade": false,
 *       "VpcOnly": false
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-all-available-options-1680286049492
 * ```
 *
 */
export class DescribeOptionGroupOptionsCommand extends $Command<
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
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
  constructor(readonly input: DescribeOptionGroupOptionsCommandInput) {
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
  ): Handler<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptionGroupOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeOptionGroupOptions",
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
  private serialize(input: DescribeOptionGroupOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOptionGroupOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOptionGroupOptionsCommandOutput> {
    return de_DescribeOptionGroupOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
