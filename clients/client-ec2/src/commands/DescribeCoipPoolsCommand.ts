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
import { DescribeCoipPoolsRequest, DescribeCoipPoolsResult } from "../models/models_3";
import { de_DescribeCoipPoolsCommand, se_DescribeCoipPoolsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCoipPoolsCommand}.
 */
export interface DescribeCoipPoolsCommandInput extends DescribeCoipPoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCoipPoolsCommand}.
 */
export interface DescribeCoipPoolsCommandOutput extends DescribeCoipPoolsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified customer-owned address pools or all of your customer-owned address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCoipPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCoipPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCoipPoolsRequest
 *   PoolIds: [ // CoipPoolIdSet
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
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeCoipPoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCoipPoolsResult
 * //   CoipPools: [ // CoipPoolSet
 * //     { // CoipPool
 * //       PoolId: "STRING_VALUE",
 * //       PoolCidrs: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PoolArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCoipPoolsCommandInput - {@link DescribeCoipPoolsCommandInput}
 * @returns {@link DescribeCoipPoolsCommandOutput}
 * @see {@link DescribeCoipPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeCoipPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeCoipPoolsCommand extends $Command<
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput,
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
  constructor(readonly input: DescribeCoipPoolsCommandInput) {
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
  ): Handler<DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCoipPoolsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCoipPoolsCommand";
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
  private serialize(input: DescribeCoipPoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCoipPoolsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCoipPoolsCommandOutput> {
    return de_DescribeCoipPoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
