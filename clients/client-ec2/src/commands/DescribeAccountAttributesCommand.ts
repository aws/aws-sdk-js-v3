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
import { DescribeAccountAttributesRequest, DescribeAccountAttributesResult } from "../models/models_3";
import { de_DescribeAccountAttributesCommand, se_DescribeAccountAttributesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes attributes of your Amazon Web Services account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: This attribute is deprecated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *                   that you can assign to a network interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAccountAttributesRequest
 *   AttributeNames: [ // AccountAttributeNameStringList
 *     "supported-platforms" || "default-vpc",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAttributesResult
 * //   AccountAttributes: [ // AccountAttributeList
 * //     { // AccountAttribute
 * //       AttributeName: "STRING_VALUE",
 * //       AttributeValues: [ // AccountAttributeValueList
 * //         { // AccountAttributeValue
 * //           AttributeValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a single attribute for your AWS account
 * ```javascript
 * // This example describes the supported-platforms attribute for your AWS account.
 * const input = {
 *   "AttributeNames": [
 *     "supported-platforms"
 *   ]
 * };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountAttributes": [
 *     {
 *       "AttributeName": "supported-platforms",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "EC2"
 *         },
 *         {
 *           "AttributeValue": "VPC"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-account-attributes-1
 * ```
 *
 * @example To describe all attributes for your AWS account
 * ```javascript
 * // This example describes the attributes for your AWS account.
 * const input = undefined;
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountAttributes": [
 *     {
 *       "AttributeName": "supported-platforms",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "EC2"
 *         },
 *         {
 *           "AttributeValue": "VPC"
 *         }
 *       ]
 *     },
 *     {
 *       "AttributeName": "vpc-max-security-groups-per-interface",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "5"
 *         }
 *       ]
 *     },
 *     {
 *       "AttributeName": "max-elastic-ips",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "5"
 *         }
 *       ]
 *     },
 *     {
 *       "AttributeName": "max-instances",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "20"
 *         }
 *       ]
 *     },
 *     {
 *       "AttributeName": "vpc-max-elastic-ips",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "5"
 *         }
 *       ]
 *     },
 *     {
 *       "AttributeName": "default-vpc",
 *       "AttributeValues": [
 *         {
 *           "AttributeValue": "none"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-account-attributes-2
 * ```
 *
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
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
  constructor(readonly input: DescribeAccountAttributesCommandInput) {
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
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAccountAttributesCommand";
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
  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return de_DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
