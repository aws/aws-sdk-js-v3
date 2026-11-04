// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScriptInput, CreateScriptOutput } from "../models/models_0";
import { CreateScript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandInput extends CreateScriptInput {}
/**
 * @public
 *
 * The output of {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandOutput extends CreateScriptOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere
 *
 * Creates a new script record for your Amazon GameLift Servers Realtime script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Amazon GameLift Servers Realtime fleet to host your game sessions. Script logic is executed during an active game session.
 *
 * To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations:
 *
 * - A locally available directory. Use the *ZipFile* parameter for this option.
 * - An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the *StorageLocation* parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift Servers service to access your S3 bucket.
 *
 * If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift Servers-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift Servers accesses the file at this storage location as needed for deployment.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers Amazon GameLift Servers Realtime](https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html)
 *
 * [Set Up a Role for Amazon GameLift Servers Access](https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html)
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateScriptInput
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NodeJsVersion: "STRING_VALUE",
 * };
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * // { // CreateScriptOutput
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
 * @param CreateScriptCommandInput - {@link CreateScriptCommandInput}
 * @returns {@link CreateScriptCommandOutput}
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link TaggingFailedException} (client fault)
 *
 * The requested tagging operation did not succeed. This may be due to invalid tag format or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
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
export class CreateScriptCommand extends command<CreateScriptCommandInput, CreateScriptCommandOutput>(
  _ep0,
  _mw0,
  "CreateScript",
  CreateScript$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScriptInput;
      output: CreateScriptOutput;
    };
    sdk: {
      input: CreateScriptCommandInput;
      output: CreateScriptCommandOutput;
    };
  };
}
