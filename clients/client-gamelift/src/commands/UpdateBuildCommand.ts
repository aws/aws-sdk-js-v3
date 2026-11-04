// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBuildInput } from "../models/models_0";
import type { UpdateBuildOutput } from "../models/models_1";
import { UpdateBuild$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBuildCommand}.
 */
export interface UpdateBuildCommandInput extends UpdateBuildInput {}
/**
 * @public
 *
 * The output of {@link UpdateBuildCommand}.
 */
export interface UpdateBuildCommandOutput extends UpdateBuildOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.
 *
 * **Learn more**
 *
 * [Upload a Custom Server Build](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html)
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateBuildInput
 *   BuildId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdateBuildCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBuildOutput
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
 * @param UpdateBuildCommandInput - {@link UpdateBuildCommandInput}
 * @returns {@link UpdateBuildCommandOutput}
 * @see {@link UpdateBuildCommandInput} for command's `input` shape.
 * @see {@link UpdateBuildCommandOutput} for command's `response` shape.
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
export class UpdateBuildCommand extends command<UpdateBuildCommandInput, UpdateBuildCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBuild",
  UpdateBuild$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBuildInput;
      output: UpdateBuildOutput;
    };
    sdk: {
      input: UpdateBuildCommandInput;
      output: UpdateBuildCommandOutput;
    };
  };
}
