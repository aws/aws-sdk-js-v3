// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringAuthorizationsInput, DescribeVpcPeeringAuthorizationsOutput } from "../models/models_0";
import {
  de_DescribeVpcPeeringAuthorizationsCommand,
  se_DescribeVpcPeeringAuthorizationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcPeeringAuthorizationsCommand}.
 */
export interface DescribeVpcPeeringAuthorizationsCommandInput extends DescribeVpcPeeringAuthorizationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeVpcPeeringAuthorizationsCommand}.
 */
export interface DescribeVpcPeeringAuthorizationsCommandOutput
  extends DescribeVpcPeeringAuthorizationsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account.
 *             This operation returns all VPC peering authorizations and requests for peering. This
 *             includes those initiated and received by this account. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = {};
 * const command = new DescribeVpcPeeringAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcPeeringAuthorizationsOutput
 * //   VpcPeeringAuthorizations: [ // VpcPeeringAuthorizationList
 * //     { // VpcPeeringAuthorization
 * //       GameLiftAwsAccountId: "STRING_VALUE",
 * //       PeerVpcAwsAccountId: "STRING_VALUE",
 * //       PeerVpcId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcPeeringAuthorizationsCommandInput - {@link DescribeVpcPeeringAuthorizationsCommandInput}
 * @returns {@link DescribeVpcPeeringAuthorizationsCommandOutput}
 * @see {@link DescribeVpcPeeringAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringAuthorizationsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class DescribeVpcPeeringAuthorizationsCommand extends $Command
  .classBuilder<
    DescribeVpcPeeringAuthorizationsCommandInput,
    DescribeVpcPeeringAuthorizationsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeVpcPeeringAuthorizations", {})
  .n("GameLiftClient", "DescribeVpcPeeringAuthorizationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcPeeringAuthorizationsCommand)
  .de(de_DescribeVpcPeeringAuthorizationsCommand)
  .build() {}
