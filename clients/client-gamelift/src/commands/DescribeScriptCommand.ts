// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeScriptInput, DescribeScriptOutput } from "../models/models_0";
import { DescribeScript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeScriptCommand}.
 */
export interface DescribeScriptCommandInput extends DescribeScriptInput {}
/**
 * @public
 *
 * The output of {@link DescribeScriptCommand}.
 */
export interface DescribeScriptCommandOutput extends DescribeScriptOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Retrieves properties for a Realtime script.
 *
 * To request a script record, specify the script ID. If successful, an object containing the script properties is returned.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers Amazon GameLift Servers Realtime](https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html)
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeScriptInput
 *   ScriptId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScriptCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScriptOutput
 * //   Script: { // Script
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     SizeOnDisk: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     StorageLocation: { // S3Location
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ObjectVersion: "STRING_VALUE",
 * //     },
 * //     NodeJsVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScriptCommandInput - {@link DescribeScriptCommandInput}
 * @returns {@link DescribeScriptCommandOutput}
 * @see {@link DescribeScriptCommandInput} for command's `input` shape.
 * @see {@link DescribeScriptCommandOutput} for command's `response` shape.
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
export class DescribeScriptCommand extends command<DescribeScriptCommandInput, DescribeScriptCommandOutput>(
  _ep0,
  _mw0,
  "DescribeScript",
  DescribeScript$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScriptInput;
      output: DescribeScriptOutput;
    };
    sdk: {
      input: DescribeScriptCommandInput;
      output: DescribeScriptCommandOutput;
    };
  };
}
