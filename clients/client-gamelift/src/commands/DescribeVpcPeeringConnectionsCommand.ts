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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringConnectionsInput, DescribeVpcPeeringConnectionsOutput } from "../models/models_0";
import {
  de_DescribeVpcPeeringConnectionsCommand,
  se_DescribeVpcPeeringConnectionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandInput extends DescribeVpcPeeringConnectionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandOutput
  extends DescribeVpcPeeringConnectionsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information on VPC peering connections. Use this operation to get peering
 *             information for all fleets or for one specific fleet ID. </p>
 *          <p>To retrieve connection information, call this operation from the Amazon Web Services account that is
 *             used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to
 *             retrieve all connection records. If successful, the retrieved information includes both
 *             active and pending connections. Active connections identify the IpV4 CIDR block that the
 *             VPC uses to connect. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeVpcPeeringConnectionsInput
 *   FleetId: "STRING_VALUE",
 * };
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcPeeringConnectionsOutput
 * //   VpcPeeringConnections: [ // VpcPeeringConnectionList
 * //     { // VpcPeeringConnection
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       IpV4CidrBlock: "STRING_VALUE",
 * //       VpcPeeringConnectionId: "STRING_VALUE",
 * //       Status: { // VpcPeeringConnectionStatus
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       PeerVpcId: "STRING_VALUE",
 * //       GameLiftVpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcPeeringConnectionsCommandInput - {@link DescribeVpcPeeringConnectionsCommandInput}
 * @returns {@link DescribeVpcPeeringConnectionsCommandOutput}
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeVpcPeeringConnectionsCommand extends $Command<
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: DescribeVpcPeeringConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcPeeringConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeVpcPeeringConnectionsCommand";
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
  private serialize(input: DescribeVpcPeeringConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpcPeeringConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> {
    return de_DescribeVpcPeeringConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
