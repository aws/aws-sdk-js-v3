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

import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeSourceRegionsCommand,
  serializeAws_queryDescribeSourceRegionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * ```
 *
 * @param DescribeSourceRegionsCommandInput - {@link DescribeSourceRegionsCommandInput}
 * @returns {@link DescribeSourceRegionsCommandOutput}
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 *
 * @example To describe source regions
 * ```javascript
 * // To list the AWS regions where a Read Replica can be created.
 * const input = {};
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SourceRegions": [
 *     {
 *       "Endpoint": "https://rds.ap-northeast-1.amazonaws.com",
 *       "RegionName": "ap-northeast-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-northeast-2.amazonaws.com",
 *       "RegionName": "ap-northeast-2",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-south-1.amazonaws.com",
 *       "RegionName": "ap-south-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-southeast-1.amazonaws.com",
 *       "RegionName": "ap-southeast-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.ap-southeast-2.amazonaws.com",
 *       "RegionName": "ap-southeast-2",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-central-1.amazonaws.com",
 *       "RegionName": "eu-central-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.eu-west-1.amazonaws.com",
 *       "RegionName": "eu-west-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.sa-east-1.amazonaws.com",
 *       "RegionName": "sa-east-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.us-west-1.amazonaws.com",
 *       "RegionName": "us-west-1",
 *       "Status": "available"
 *     },
 *     {
 *       "Endpoint": "https://rds.us-west-2.amazonaws.com",
 *       "RegionName": "us-west-2",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-source-regions-1473457722410
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
    return serializeAws_queryDescribeSourceRegionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceRegionsCommandOutput> {
    return deserializeAws_queryDescribeSourceRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
