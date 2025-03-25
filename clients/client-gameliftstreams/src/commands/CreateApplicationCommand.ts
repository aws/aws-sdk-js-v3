// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { CreateApplicationInput, CreateApplicationOutput } from "../models/models_0";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationInput {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationOutput, __MetadataBearer {}

/**
 * <p>Creates an application resource in Amazon GameLift Streams, which specifies the application content you want to stream, such as a game build or other
 *             software, and configures the settings to run it.</p>
 *          <p> Before you create an application, upload your application content files to an Amazon Simple Storage Service (Amazon S3) bucket. For more information, see
 *                 <b>Getting Started</b> in the Amazon GameLift Streams Developer Guide. </p>
 *          <important>
 *             <p> Make sure that your files in the Amazon S3 bucket are the correct version you want to use. As soon as you create a Amazon GameLift Streams application,
 *                 you cannot change the files at a later time. </p>
 *          </important>
 *          <p> If the request is successful, Amazon GameLift Streams begins to create an application and sets the status to <code>INITIALIZED</code>. When an
 *             application reaches <code>READY</code> status, you can use the application to set up stream groups and start streams. To track application
 *             status, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetApplication.html">GetApplication</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateApplicationCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateApplicationCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * const client = new GameLiftStreamsClient(config);
 * const input = { // CreateApplicationInput
 *   Description: "STRING_VALUE", // required
 *   RuntimeEnvironment: { // RuntimeEnvironment
 *     Type: "PROTON" || "WINDOWS" || "UBUNTU", // required
 *     Version: "STRING_VALUE", // required
 *   },
 *   ExecutablePath: "STRING_VALUE", // required
 *   ApplicationSourceUri: "STRING_VALUE", // required
 *   ApplicationLogPaths: [ // FilePaths
 *     "STRING_VALUE",
 *   ],
 *   ApplicationLogOutputUri: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   RuntimeEnvironment: { // RuntimeEnvironment
 * //     Type: "PROTON" || "WINDOWS" || "UBUNTU", // required
 * //     Version: "STRING_VALUE", // required
 * //   },
 * //   ExecutablePath: "STRING_VALUE",
 * //   ApplicationLogPaths: [ // FilePaths
 * //     "STRING_VALUE",
 * //   ],
 * //   ApplicationLogOutputUri: "STRING_VALUE",
 * //   ApplicationSourceUri: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Status: "INITIALIZED" || "PROCESSING" || "READY" || "DELETING" || "ERROR",
 * //   StatusReason: "internalError" || "accessDenied",
 * //   ReplicationStatuses: [ // ReplicationStatuses
 * //     { // ReplicationStatus
 * //       Location: "STRING_VALUE",
 * //       Status: "REPLICATING" || "COMPLETED",
 * //     },
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   AssociatedStreamGroups: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the
 *          conflict before retrying this request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the resource to exceed an allowed service quota. Resolve the issue before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before
 *          retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "CreateApplication", {})
  .n("GameLiftStreamsClient", "CreateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationCommand)
  .de(de_CreateApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationInput;
      output: CreateApplicationOutput;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
