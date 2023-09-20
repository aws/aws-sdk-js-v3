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
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/models_4";
import { de_DescribePublicIpv4PoolsCommand, se_DescribePublicIpv4PoolsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePublicIpv4PoolsCommand}.
 */
export interface DescribePublicIpv4PoolsCommandInput extends DescribePublicIpv4PoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePublicIpv4PoolsCommand}.
 */
export interface DescribePublicIpv4PoolsCommandOutput extends DescribePublicIpv4PoolsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified IPv4 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePublicIpv4PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePublicIpv4PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePublicIpv4PoolsRequest
 *   PoolIds: [ // PublicIpv4PoolIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribePublicIpv4PoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePublicIpv4PoolsResult
 * //   PublicIpv4Pools: [ // PublicIpv4PoolSet
 * //     { // PublicIpv4Pool
 * //       PoolId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PoolAddressRanges: [ // PublicIpv4PoolRangeSet
 * //         { // PublicIpv4PoolRange
 * //           FirstAddress: "STRING_VALUE",
 * //           LastAddress: "STRING_VALUE",
 * //           AddressCount: Number("int"),
 * //           AvailableAddressCount: Number("int"),
 * //         },
 * //       ],
 * //       TotalAddressCount: Number("int"),
 * //       TotalAvailableAddressCount: Number("int"),
 * //       NetworkBorderGroup: "STRING_VALUE",
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
 * @param DescribePublicIpv4PoolsCommandInput - {@link DescribePublicIpv4PoolsCommandInput}
 * @returns {@link DescribePublicIpv4PoolsCommandOutput}
 * @see {@link DescribePublicIpv4PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePublicIpv4PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribePublicIpv4PoolsCommand extends $Command<
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
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
  constructor(readonly input: DescribePublicIpv4PoolsCommandInput) {
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
  ): Handler<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePublicIpv4PoolsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePublicIpv4PoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribePublicIpv4Pools",
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
  private serialize(input: DescribePublicIpv4PoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePublicIpv4PoolsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePublicIpv4PoolsCommandOutput> {
    return de_DescribePublicIpv4PoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
