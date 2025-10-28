// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { DisassociateApplicationsInput, DisassociateApplicationsOutput } from "../models/models_0";
import { de_DisassociateApplicationsCommand, se_DisassociateApplicationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationsCommand}.
 */
export interface DisassociateApplicationsCommandInput extends DisassociateApplicationsInput {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationsCommand}.
 */
export interface DisassociateApplicationsCommandOutput extends DisassociateApplicationsOutput, __MetadataBearer {}

/**
 * <p> When you disassociate, or unlink, an application from a stream group, you can no longer stream this application by using that stream group's allocated compute resources. Any streams in process will continue until they terminate, which helps avoid interrupting an end-user's stream. Amazon GameLift Streams will not initiate new streams in the stream group using the disassociated application. The disassociate action does not affect the stream capacity of a stream group. To disassociate an application, the stream group must be in <code>ACTIVE</code> status. </p> <p> If you disassociate the default application, Amazon GameLift Streams will automatically choose a new default application from the remaining associated applications. To change which application is the default application, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html">UpdateStreamGroup</a> and specify a new <code>DefaultApplicationIdentifier</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, DisassociateApplicationsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, DisassociateApplicationsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // DisassociateApplicationsInput
 *   Identifier: "STRING_VALUE", // required
 *   ApplicationIdentifiers: [ // Identifiers // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateApplicationsOutput
 * //   Arn: "STRING_VALUE",
 * //   ApplicationArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateApplicationsCommandInput - {@link DisassociateApplicationsCommandInput}
 * @returns {@link DisassociateApplicationsCommandOutput}
 * @see {@link DisassociateApplicationsCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class DisassociateApplicationsCommand extends $Command
  .classBuilder<
    DisassociateApplicationsCommandInput,
    DisassociateApplicationsCommandOutput,
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
  .s("GameLiftStreams", "DisassociateApplications", {})
  .n("GameLiftStreamsClient", "DisassociateApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateApplicationsCommand)
  .de(de_DisassociateApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApplicationsInput;
      output: DisassociateApplicationsOutput;
    };
    sdk: {
      input: DisassociateApplicationsCommandInput;
      output: DisassociateApplicationsCommandOutput;
    };
  };
}
