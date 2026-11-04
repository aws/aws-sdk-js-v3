// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/models_0";
import { CreateVpcPeeringAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateVpcPeeringAuthorizationCommandOutput extends CreateVpcPeeringAuthorizationOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift Servers fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use [CreateVpcPeeringConnection](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html) to establish the peering connection. For more information, see [VPC Peering with Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
 *
 * You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You cannot peer with VPCs that are in different Regions.
 *
 * To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift Servers fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers. If successful, VPC peering is authorized for the specified VPC.
 *
 * To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift Servers fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers.
 *
 * The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid.
 *
 * > **Note:**
 * >
 * > Amazon GameLift Servers uses the caller's credentials to update peer-VPC resources. The IAM user that calls this operation must have the following Amazon EC2 permissions enabled:
 * >
 * > - `ec2:AcceptVpcPeeringConnection`
 * > - `ec2:AuthorizeSecurityGroupEgress`
 * > - `ec2:AuthorizeSecurityGroupIngress`
 * > - `ec2:CreateRoute`
 * > - `ec2:DescribeRouteTables`
 * > - `ec2:DescribeSecurityGroups`
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class CreateVpcPeeringAuthorizationCommand extends command<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "CreateVpcPeeringAuthorization",
  CreateVpcPeeringAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcPeeringAuthorizationInput;
      output: CreateVpcPeeringAuthorizationOutput;
    };
    sdk: {
      input: CreateVpcPeeringAuthorizationCommandInput;
      output: CreateVpcPeeringAuthorizationCommandOutput;
    };
  };
}
