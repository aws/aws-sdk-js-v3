// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFleetLocationsInput, CreateFleetLocationsOutput } from "../models/models_0";
import { CreateFleetLocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFleetLocationsCommand}.
 */
export interface CreateFleetLocationsCommandInput extends CreateFleetLocationsInput {}
/**
 * @public
 *
 * The output of {@link CreateFleetLocationsCommand}.
 */
export interface CreateFleetLocationsCommandOutput extends CreateFleetLocationsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Adds remote locations to an EC2 fleet and begins populating the new locations with instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings.
 *
 * > **Note:** You can't add remote locations to a fleet that resides in an Amazon Web Services Region that doesn't support multiple locations. Fleets created prior to March 2021 can't support multiple locations.
 *
 * To add fleet locations, specify the fleet to be updated and provide a list of one or more locations.
 *
 * If successful, this operation returns the list of added locations with their status set to `NEW`. Amazon GameLift Servers initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using [DescribeFleetEvents](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html).
 *
 * **Learn more**
 *
 * [Setting up fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * [Update fleet locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-editing.html#fleets-update-locations)
 *
 * [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateFleetLocationsInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationConfigurationList // required
 *     { // LocationConfiguration
 *       Location: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFleetLocationsCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetLocationsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   LocationStates: [ // LocationStateList
 * //     { // LocationState
 * //       Location: "STRING_VALUE",
 * //       Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND" || "EXPIRED",
 * //       PlayerGatewayStatus: "DISABLED" || "ENABLED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateFleetLocationsCommandInput - {@link CreateFleetLocationsCommandInput}
 * @returns {@link CreateFleetLocationsCommandOutput}
 * @see {@link CreateFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link CreateFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link NotReadyException} (client fault)
 *
 * The operation failed because Amazon GameLift Servers has not yet finished validating this compute. We recommend attempting 8 to 10 retries over 3 to 5 minutes with [exponential backoffs and jitter](http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/).
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
export class CreateFleetLocationsCommand extends command<CreateFleetLocationsCommandInput, CreateFleetLocationsCommandOutput>(
  _ep0,
  _mw0,
  "CreateFleetLocations",
  CreateFleetLocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetLocationsInput;
      output: CreateFleetLocationsOutput;
    };
    sdk: {
      input: CreateFleetLocationsCommandInput;
      output: CreateFleetLocationsCommandOutput;
    };
  };
}
