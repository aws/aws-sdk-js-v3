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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeRegionsRequest, DescribeRegionsResult } from "../models/models_4";
import { de_DescribeRegionsCommand, se_DescribeRegionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegionsCommand}.
 */
export interface DescribeRegionsCommandInput extends DescribeRegionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegionsCommand}.
 */
export interface DescribeRegionsCommandOutput extends DescribeRegionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the Regions that are enabled for your account, or all Regions.</p>
 *          <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/ec2-service.html">
 *        Amazon Elastic Compute Cloud endpoints and quotas</a>.</p>
 *          <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRegionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeRegionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RegionNames: [ // RegionNameStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   AllRegions: true || false,
 * };
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegionsResult
 * //   Regions: [ // RegionList
 * //     { // Region
 * //       Endpoint: "STRING_VALUE",
 * //       RegionName: "STRING_VALUE",
 * //       OptInStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRegionsCommandInput - {@link DescribeRegionsCommandInput}
 * @returns {@link DescribeRegionsCommandOutput}
 * @see {@link DescribeRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe your regions
 * ```javascript
 * // This example describes all the regions that are available to you.
 * const input = undefined;
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Regions": [
 *     {
 *       "Endpoint": "ec2.ap-south-1.amazonaws.com",
 *       "RegionName": "ap-south-1"
 *     },
 *     {
 *       "Endpoint": "ec2.eu-west-1.amazonaws.com",
 *       "RegionName": "eu-west-1"
 *     },
 *     {
 *       "Endpoint": "ec2.ap-southeast-1.amazonaws.com",
 *       "RegionName": "ap-southeast-1"
 *     },
 *     {
 *       "Endpoint": "ec2.ap-southeast-2.amazonaws.com",
 *       "RegionName": "ap-southeast-2"
 *     },
 *     {
 *       "Endpoint": "ec2.eu-central-1.amazonaws.com",
 *       "RegionName": "eu-central-1"
 *     },
 *     {
 *       "Endpoint": "ec2.ap-northeast-2.amazonaws.com",
 *       "RegionName": "ap-northeast-2"
 *     },
 *     {
 *       "Endpoint": "ec2.ap-northeast-1.amazonaws.com",
 *       "RegionName": "ap-northeast-1"
 *     },
 *     {
 *       "Endpoint": "ec2.us-east-1.amazonaws.com",
 *       "RegionName": "us-east-1"
 *     },
 *     {
 *       "Endpoint": "ec2.sa-east-1.amazonaws.com",
 *       "RegionName": "sa-east-1"
 *     },
 *     {
 *       "Endpoint": "ec2.us-west-1.amazonaws.com",
 *       "RegionName": "us-west-1"
 *     },
 *     {
 *       "Endpoint": "ec2.us-west-2.amazonaws.com",
 *       "RegionName": "us-west-2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-regions-1
 * ```
 *
 */
export class DescribeRegionsCommand extends $Command<
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeRegionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegionsCommandInput, DescribeRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRegionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeRegionsCommand";
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
  private serialize(input: DescribeRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRegionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRegionsCommandOutput> {
    return de_DescribeRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
