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
import { DescribeNetworkInsightsPathsRequest, DescribeNetworkInsightsPathsResult } from "../models/models_4";
import { de_DescribeNetworkInsightsPathsCommand, se_DescribeNetworkInsightsPathsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsPathsCommand}.
 */
export interface DescribeNetworkInsightsPathsCommandInput extends DescribeNetworkInsightsPathsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsPathsCommand}.
 */
export interface DescribeNetworkInsightsPathsCommandOutput
  extends DescribeNetworkInsightsPathsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your paths.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsPathsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsPathsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsPathsRequest
 *   NetworkInsightsPathIds: [ // NetworkInsightsPathIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsPathsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsPathsResult
 * //   NetworkInsightsPaths: [ // NetworkInsightsPathList
 * //     { // NetworkInsightsPath
 * //       NetworkInsightsPathId: "STRING_VALUE",
 * //       NetworkInsightsPathArn: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Source: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       SourceIp: "STRING_VALUE",
 * //       DestinationIp: "STRING_VALUE",
 * //       Protocol: "tcp" || "udp",
 * //       DestinationPort: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FilterAtSource: { // PathFilter
 * //         SourceAddress: "STRING_VALUE",
 * //         SourcePortRange: { // FilterPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationAddress: "STRING_VALUE",
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       },
 * //       FilterAtDestination: {
 * //         SourceAddress: "STRING_VALUE",
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationAddress: "STRING_VALUE",
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsPathsCommandInput - {@link DescribeNetworkInsightsPathsCommandInput}
 * @returns {@link DescribeNetworkInsightsPathsCommandOutput}
 * @see {@link DescribeNetworkInsightsPathsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsPathsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeNetworkInsightsPathsCommand extends $Command<
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput,
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
  constructor(readonly input: DescribeNetworkInsightsPathsCommandInput) {
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
  ): Handler<DescribeNetworkInsightsPathsCommandInput, DescribeNetworkInsightsPathsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInsightsPathsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInsightsPathsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeNetworkInsightsPaths",
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
  private serialize(input: DescribeNetworkInsightsPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNetworkInsightsPathsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInsightsPathsCommandOutput> {
    return de_DescribeNetworkInsightsPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
