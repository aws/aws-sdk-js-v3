// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { CreateLocationInput, CreateLocationOutput } from "../models/models_0";
import { CreateLocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationCommand}.
 */
export interface CreateLocationCommandInput extends CreateLocationInput {}
/**
 * @public
 *
 * The output of {@link CreateLocationCommand}.
 */
export interface CreateLocationCommandOutput extends CreateLocationOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Anywhere</p>
 *          <p>Creates a custom location for use in an Anywhere fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateLocationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateLocationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateLocationInput
 *   LocationName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationOutput
 * //   Location: { // LocationModel
 * //     LocationName: "STRING_VALUE",
 * //     LocationArn: "STRING_VALUE",
 * //     PingBeacon: { // PingBeacon
 * //       UDPEndpoint: { // UDPEndpoint
 * //         Domain: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLocationCommandInput - {@link CreateLocationCommandInput}
 * @returns {@link CreateLocationCommandOutput}
 * @see {@link CreateLocationCommandInput} for command's `input` shape.
 * @see {@link CreateLocationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class CreateLocationCommand extends $Command
  .classBuilder<
    CreateLocationCommandInput,
    CreateLocationCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "CreateLocation", {})
  .n("GameLiftClient", "CreateLocationCommand")
  .sc(CreateLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationInput;
      output: CreateLocationOutput;
    };
    sdk: {
      input: CreateLocationCommandInput;
      output: CreateLocationCommandOutput;
    };
  };
}
