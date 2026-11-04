// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFleetLocationAttributesInput, DescribeFleetLocationAttributesOutput } from "../models/models_0";
import { DescribeFleetLocationAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFleetLocationAttributesCommand}.
 */
export interface DescribeFleetLocationAttributesCommandInput extends DescribeFleetLocationAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetLocationAttributesCommand}.
 */
export interface DescribeFleetLocationAttributesCommandOutput extends DescribeFleetLocationAttributesOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity.
 *
 * This operation can be used in the following ways:
 *
 * - To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested.
 * - To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order.
 *
 * When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * If successful, a `LocationAttributes` object is returned for each requested location. If the fleet does not have a requested location, no information is returned.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * [Amazon GameLift Servers service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetLocationAttributesInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetLocationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetLocationAttributesOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   LocationAttributes: [ // LocationAttributesList
 * //     { // LocationAttributes
 * //       LocationState: { // LocationState
 * //         Location: "STRING_VALUE",
 * //         Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND" || "EXPIRED",
 * //         PlayerGatewayStatus: "DISABLED" || "ENABLED",
 * //       },
 * //       StoppedActions: [ // FleetActionList
 * //         "AUTO_SCALING",
 * //       ],
 * //       UpdateStatus: "PENDING_UPDATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetLocationAttributesCommandInput - {@link DescribeFleetLocationAttributesCommandInput}
 * @returns {@link DescribeFleetLocationAttributesCommandOutput}
 * @see {@link DescribeFleetLocationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationAttributesCommandOutput} for command's `response` shape.
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
export class DescribeFleetLocationAttributesCommand extends command<DescribeFleetLocationAttributesCommandInput, DescribeFleetLocationAttributesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetLocationAttributes",
  DescribeFleetLocationAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetLocationAttributesInput;
      output: DescribeFleetLocationAttributesOutput;
    };
    sdk: {
      input: DescribeFleetLocationAttributesCommandInput;
      output: DescribeFleetLocationAttributesCommandOutput;
    };
  };
}
