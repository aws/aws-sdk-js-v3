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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/models_0";
import {
  de_CreateVpcPeeringAuthorizationCommand,
  se_CreateVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcPeeringAuthorizationCommand}.
 */
export interface CreateVpcPeeringAuthorizationCommandInput extends CreateVpcPeeringAuthorizationInput {}
/**
 * @public
 *
 * The output of {@link CreateVpcPeeringAuthorizationCommand}.
 */
export interface CreateVpcPeeringAuthorizationCommandOutput
  extends CreateVpcPeeringAuthorizationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Requests authorization to create or delete a peer connection between the VPC for your
 *             Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on
 *             your fleet to communicate directly with other Amazon Web Services resources. After you've received
 *             authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more
 *             information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift
 *                 Fleets</a>.</p>
 *          <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to,
 *             including the account that you use to manage your Amazon GameLift fleets. You cannot peer with
 *             VPCs that are in different Regions.</p>
 *          <p>To request authorization to create a connection, call this operation from the Amazon Web Services
 *             account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable
 *             your game servers to retrieve data from a DynamoDB table, use the account that manages
 *             that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you
 *             want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If
 *             successful, VPC peering is authorized for the specified VPC. </p>
 *          <p>To request authorization to delete a connection, call this operation from the Amazon Web Services
 *             account with the VPC that is peered with your Amazon GameLift fleet. Identify the following
 *             values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the
 *             Amazon Web Services account that you use to manage Amazon GameLift. </p>
 *          <p>The authorization remains valid for 24 hours unless it is canceled. You must create or
 *             delete the peering connection while the authorization is valid. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateVpcPeeringAuthorizationInput
 *   GameLiftAwsAccountId: "STRING_VALUE", // required
 *   PeerVpcId: "STRING_VALUE", // required
 * };
 * const command = new CreateVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcPeeringAuthorizationOutput
 * //   VpcPeeringAuthorization: { // VpcPeeringAuthorization
 * //     GameLiftAwsAccountId: "STRING_VALUE",
 * //     PeerVpcAwsAccountId: "STRING_VALUE",
 * //     PeerVpcId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcPeeringAuthorizationCommandInput - {@link CreateVpcPeeringAuthorizationCommandInput}
 * @returns {@link CreateVpcPeeringAuthorizationCommandOutput}
 * @see {@link CreateVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
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
export class CreateVpcPeeringAuthorizationCommand extends $Command<
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
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
  constructor(readonly input: CreateVpcPeeringAuthorizationCommandInput) {
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
  ): Handler<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcPeeringAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateVpcPeeringAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "CreateVpcPeeringAuthorization",
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
  private serialize(input: CreateVpcPeeringAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVpcPeeringAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput> {
    return de_CreateVpcPeeringAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
