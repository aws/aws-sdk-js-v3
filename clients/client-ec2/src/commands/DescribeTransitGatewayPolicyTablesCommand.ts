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
import {
  DescribeTransitGatewayPolicyTablesRequest,
  DescribeTransitGatewayPolicyTablesResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayPolicyTablesCommand,
  se_DescribeTransitGatewayPolicyTablesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayPolicyTablesCommand}.
 */
export interface DescribeTransitGatewayPolicyTablesCommandInput extends DescribeTransitGatewayPolicyTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayPolicyTablesCommand}.
 */
export interface DescribeTransitGatewayPolicyTablesCommandOutput
  extends DescribeTransitGatewayPolicyTablesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more transit gateway route policy tables.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPolicyTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPolicyTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayPolicyTablesRequest
 *   TransitGatewayPolicyTableIds: [ // TransitGatewayPolicyTableIdStringList
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
 * const command = new DescribeTransitGatewayPolicyTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayPolicyTablesResult
 * //   TransitGatewayPolicyTables: [ // TransitGatewayPolicyTableList
 * //     { // TransitGatewayPolicyTable
 * //       TransitGatewayPolicyTableId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
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
 * @param DescribeTransitGatewayPolicyTablesCommandInput - {@link DescribeTransitGatewayPolicyTablesCommandInput}
 * @returns {@link DescribeTransitGatewayPolicyTablesCommandOutput}
 * @see {@link DescribeTransitGatewayPolicyTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPolicyTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayPolicyTablesCommand extends $Command<
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayPolicyTablesCommandInput) {
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
  ): Handler<DescribeTransitGatewayPolicyTablesCommandInput, DescribeTransitGatewayPolicyTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewayPolicyTablesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayPolicyTablesCommand";
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
  private serialize(
    input: DescribeTransitGatewayPolicyTablesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayPolicyTablesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayPolicyTablesCommandOutput> {
    return de_DescribeTransitGatewayPolicyTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
