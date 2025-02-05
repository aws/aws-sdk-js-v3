// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateLocationInput, CreateLocationOutput } from "../models/models_0";
import { de_CreateLocationCommand, se_CreateLocationCommand } from "../protocols/Aws_json1_1";

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
 * <p>Creates a custom location for use in an Anywhere fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateLocationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateLocationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "CreateLocation", {})
  .n("GameLiftClient", "CreateLocationCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocationCommand)
  .de(de_CreateLocationCommand)
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
