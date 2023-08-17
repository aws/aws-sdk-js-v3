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

import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import { de_DescribeSourceRegionsCommand, se_DescribeSourceRegionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceRegionsCommand}.
 */
export interface DescribeSourceRegionsCommandInput extends DescribeSourceRegionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSourceRegionsCommand}.
 */
export interface DescribeSourceRegionsCommandOutput extends SourceRegionMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica,
 *          copy a DB snapshot from, or replicate automated backups from.</p>
 *          <p>Use this operation to determine whether cross-Region features are supported between other Regions
 *             and your current Region. This operation supports pagination.</p>
 *          <p>To return information about the Regions that are enabled for your account, or all Regions,
 *             use the EC2 operation <code>DescribeRegions</code>. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html">
 *                 DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeSourceRegionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeSourceRegionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeSourceRegionsMessage
 *   RegionName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * // { // SourceRegionMessage
 * //   Marker: "STRING_VALUE",
 * //   SourceRegions: [ // SourceRegionList
 * //     { // SourceRegion
 * //       RegionName: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SupportsDBInstanceAutomatedBackupsReplication: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSourceRegionsCommandInput - {@link DescribeSourceRegionsCommandInput}
 * @returns {@link DescribeSourceRegionsCommandOutput}
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe source Regions
 * ```javascript
 * // The following example retrieves details about all source AWS Regions where the current AWS Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. It also shows that automated backups can be replicated only from US West (Oregon) to the destination AWS Region, US East (N. Virginia).
 * const input = {
 *   "RegionName": "us-east-1"
 * };
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SourceRegions": [
 *     {
 *       "Endpoint": "https://rds.af-south-1.amazonaws.com",
 *       "RegionName": "af-south-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-east-1.amazonaws.com",
 *       "RegionName": "ap-east-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-northeast-1.amazonaws.com",
 *       "RegionName": "ap-northeast-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-northeast-2.amazonaws.com",
 *       "RegionName": "ap-northeast-2",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-northeast-3.amazonaws.com",
 *       "RegionName": "ap-northeast-3",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-south-1.amazonaws.com",
 *       "RegionName": "ap-south-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-southeast-1.amazonaws.com",
 *       "RegionName": "ap-southeast-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-southeast-2.amazonaws.com",
 *       "RegionName": "ap-southeast-2",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-southeast-3.amazonaws.com",
 *       "RegionName": "ap-southeast-3",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.ca-central-1.amazonaws.com",
 *       "RegionName": "ca-central-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-north-1.amazonaws.com",
 *       "RegionName": "eu-north-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-south-1.amazonaws.com",
 *       "RegionName": "eu-south-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-west-1.amazonaws.com",
 *       "RegionName": "eu-west-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-west-2.amazonaws.com",
 *       "RegionName": "eu-west-2",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-west-3.amazonaws.com",
 *       "RegionName": "eu-west-3",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.me-central-1.amazonaws.com",
 *       "RegionName": "me-central-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.me-south-1.amazonaws.com",
 *       "RegionName": "me-south-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": false
 *     },
 *     {
 *       "Endpoint": "https://rds.sa-east-1.amazonaws.com",
 *       "RegionName": "sa-east-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.us-east-2.amazonaws.com",
 *       "RegionName": "us-east-2",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.us-west-1.amazonaws.com",
 *       "RegionName": "us-west-1",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     },
 *     {
 *       "Endpoint": "https://rds.us-west-2.amazonaws.com",
 *       "RegionName": "us-west-2",
 *       "Status": "available",
 *       "SupportsDBInstanceAutomatedBackupsReplication": true
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-source-regions-1680283924227
 * ```
 *
 */
export class DescribeSourceRegionsCommand extends $Command<
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
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
  constructor(readonly input: DescribeSourceRegionsCommandInput) {
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
  ): Handler<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSourceRegionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeSourceRegionsCommand";
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
  private serialize(input: DescribeSourceRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSourceRegionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceRegionsCommandOutput> {
    return de_DescribeSourceRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
