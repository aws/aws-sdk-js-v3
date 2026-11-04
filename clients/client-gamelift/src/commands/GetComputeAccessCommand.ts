// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComputeAccessInput, GetComputeAccessOutput } from "../models/models_0";
import { GetComputeAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandInput extends GetComputeAccessInput {}
/**
 * @public
 *
 * The output of {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandOutput extends GetComputeAccessOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Container
 *
 * Requests authorization to remotely connect to a hosting resource in a Amazon GameLift Servers managed fleet. This operation is not used with Amazon GameLift Servers Anywhere fleets.
 *
 * **Request options**
 *
 * Provide the fleet ID and compute name. The compute name varies depending on the type of fleet.
 *
 * - For a compute in a managed EC2 fleet, provide an instance ID. Each instance in the fleet is a compute.
 * - For a compute in a managed container fleet, provide a compute name. In a container fleet, each game server container group on a fleet instance is assigned a compute name.
 *
 * **Results**
 *
 * If successful, this operation returns a set of temporary Amazon Web Services credentials, including a two-part access key and a session token.
 *
 * - With a managed EC2 fleet (where compute type is `EC2`), use these credentials with Amazon EC2 Systems Manager (SSM) to start a session with the compute. For more details, see [Starting a session (CLI)](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#sessions-start-cli) in the *Amazon EC2 Systems Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // GetComputeAccessInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new GetComputeAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeAccessOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   ComputeName: "STRING_VALUE",
 * //   ComputeArn: "STRING_VALUE",
 * //   Credentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * //   Target: "STRING_VALUE",
 * //   ContainerIdentifiers: [ // ContainerIdentifierList
 * //     { // ContainerIdentifier
 * //       ContainerName: "STRING_VALUE",
 * //       ContainerRuntimeId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetComputeAccessCommandInput - {@link GetComputeAccessCommandInput}
 * @returns {@link GetComputeAccessCommandOutput}
 * @see {@link GetComputeAccessCommandInput} for command's `input` shape.
 * @see {@link GetComputeAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class GetComputeAccessCommand extends command<GetComputeAccessCommandInput, GetComputeAccessCommandOutput>(
  _ep0,
  _mw0,
  "GetComputeAccess",
  GetComputeAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComputeAccessInput;
      output: GetComputeAccessOutput;
    };
    sdk: {
      input: GetComputeAccessCommandInput;
      output: GetComputeAccessCommandOutput;
    };
  };
}
