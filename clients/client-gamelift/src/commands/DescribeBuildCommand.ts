// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DescribeBuildInput, DescribeBuildOutput } from "../models/models_0";
import { DescribeBuild } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBuildCommand}.
 */
export interface DescribeBuildCommandInput extends DescribeBuildInput {}
/**
 * @public
 *
 * The output of {@link DescribeBuildCommand}.
 */
export interface DescribeBuildCommandOutput extends DescribeBuildOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Retrieves properties for a custom game build. To request a build resource, specify a
 *             build ID. If successful, an object containing the build properties is returned.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom
 *                 Server Build</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeBuildInput
 *   BuildId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBuildCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBuildOutput
 * //   Build: { // Build
 * //     BuildId: "STRING_VALUE",
 * //     BuildArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "INITIALIZED" || "READY" || "FAILED",
 * //     SizeOnDisk: Number("long"),
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023" || "WINDOWS_2022",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ServerSdkVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBuildCommandInput - {@link DescribeBuildCommandInput}
 * @returns {@link DescribeBuildCommandOutput}
 * @see {@link DescribeBuildCommandInput} for command's `input` shape.
 * @see {@link DescribeBuildCommandOutput} for command's `response` shape.
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
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
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
export class DescribeBuildCommand extends $Command
  .classBuilder<
    DescribeBuildCommandInput,
    DescribeBuildCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeBuild", {})
  .n("GameLiftClient", "DescribeBuildCommand")
  .sc(DescribeBuild)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBuildInput;
      output: DescribeBuildOutput;
    };
    sdk: {
      input: DescribeBuildCommandInput;
      output: DescribeBuildCommandOutput;
    };
  };
}
