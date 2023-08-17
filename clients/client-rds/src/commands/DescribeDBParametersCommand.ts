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

import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/models_1";
import { de_DescribeDBParametersCommand, se_DescribeDBParametersCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandInput extends DescribeDBParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandOutput extends DBParameterGroupDetails, __MetadataBearer {}

/**
 * @public
 * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBParametersMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
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
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupDetails
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       ApplyType: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       ApplyMethod: "immediate" || "pending-reboot",
 * //       SupportedEngineModes: [ // EngineModeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBParametersCommandInput - {@link DescribeDBParametersCommandInput}
 * @returns {@link DescribeDBParametersCommandOutput}
 * @see {@link DescribeDBParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the parameters in a DB parameter group
 * ```javascript
 * // The following example retrieves the details of the specified DB parameter group.
 * const input = {
 *   "DBParameterGroupName": "mydbpg"
 * };
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Parameters": [
 *     {
 *       "AllowedValues": "0,1",
 *       "ApplyMethod": "pending-reboot",
 *       "ApplyType": "static",
 *       "DataType": "boolean",
 *       "Description": "Controls whether user-defined functions that have only an xxx symbol for the main function can be loaded",
 *       "IsModifiable": false,
 *       "ParameterName": "allow-suspicious-udfs",
 *       "Source": "engine-default"
 *     },
 *     {
 *       "AllowedValues": "0,1",
 *       "ApplyMethod": "pending-reboot",
 *       "ApplyType": "static",
 *       "DataType": "boolean",
 *       "Description": "Controls whether the server autogenerates SSL key and certificate files in the data directory, if they do not already exist.",
 *       "IsModifiable": false,
 *       "ParameterName": "auto_generate_certs",
 *       "Source": "engine-default"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-parameters-in-a-db-parameter-group-1680279500600
 * ```
 *
 */
export class DescribeDBParametersCommand extends $Command<
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
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
  constructor(readonly input: DescribeDBParametersCommandInput) {
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
  ): Handler<DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBParametersCommand";
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
  private serialize(input: DescribeDBParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBParametersCommandOutput> {
    return de_DescribeDBParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
