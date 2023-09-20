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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInternetGatewaysRequest, DescribeInternetGatewaysResult } from "../models/models_4";
import { de_DescribeInternetGatewaysCommand, se_DescribeInternetGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandInput extends DescribeInternetGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandOutput extends DescribeInternetGatewaysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInternetGatewaysRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   InternetGatewayIds: [ // InternetGatewayIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInternetGatewaysResult
 * //   InternetGateways: [ // InternetGatewayList
 * //     { // InternetGateway
 * //       Attachments: [ // InternetGatewayAttachmentList
 * //         { // InternetGatewayAttachment
 * //           State: "attaching" || "attached" || "detaching" || "detached",
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InternetGatewayId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInternetGatewaysCommandInput - {@link DescribeInternetGatewaysCommandInput}
 * @returns {@link DescribeInternetGatewaysCommandOutput}
 * @see {@link DescribeInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the Internet gateway for a VPC
 * ```javascript
 * // This example describes the Internet gateway for the specified VPC.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "attachment.vpc-id",
 *       "Values": [
 *         "vpc-a01106c2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InternetGateways": [
 *     {
 *       "Attachments": [
 *         {
 *           "State": "attached",
 *           "VpcId": "vpc-a01106c2"
 *         }
 *       ],
 *       "InternetGatewayId": "igw-c0a643a9",
 *       "Tags": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-internet-gateways-1
 * ```
 *
 */
export class DescribeInternetGatewaysCommand extends $Command<
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
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
  constructor(readonly input: DescribeInternetGatewaysCommandInput) {
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
  ): Handler<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInternetGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInternetGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInternetGateways",
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
  private serialize(input: DescribeInternetGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInternetGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInternetGatewaysCommandOutput> {
    return de_DescribeInternetGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
