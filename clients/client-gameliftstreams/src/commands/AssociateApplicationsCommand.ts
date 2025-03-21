// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { AssociateApplicationsInput, AssociateApplicationsOutput } from "../models/models_0";
import { de_AssociateApplicationsCommand, se_AssociateApplicationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateApplicationsCommand}.
 */
export interface AssociateApplicationsCommandInput extends AssociateApplicationsInput {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationsCommand}.
 */
export interface AssociateApplicationsCommandOutput extends AssociateApplicationsOutput, __MetadataBearer {}

/**
 * <p>When you associate, or link, an application with a stream group, then Amazon GameLift Streams can launch the application using the stream group's allocated compute resources. The stream group must be in <code>ACTIVE</code> status. You can reverse this action by using <a>DisassociateApplications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, AssociateApplicationsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, AssociateApplicationsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * const client = new GameLiftStreamsClient(config);
 * const input = { // AssociateApplicationsInput
 *   Identifier: "STRING_VALUE", // required
 *   ApplicationIdentifiers: [ // Identifiers // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApplicationsOutput
 * //   Arn: "STRING_VALUE",
 * //   ApplicationArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateApplicationsCommandInput - {@link AssociateApplicationsCommandInput}
 * @returns {@link AssociateApplicationsCommandOutput}
 * @see {@link AssociateApplicationsCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the
 *          permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the resource to exceed an allowed service quota. Resolve the
 *          issue before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the
 *          suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints.
 *          Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 * @public
 */
export class AssociateApplicationsCommand extends $Command
  .classBuilder<
    AssociateApplicationsCommandInput,
    AssociateApplicationsCommandOutput,
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
  .s("GameLiftStreams", "AssociateApplications", {})
  .n("GameLiftStreamsClient", "AssociateApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_AssociateApplicationsCommand)
  .de(de_AssociateApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationsInput;
      output: AssociateApplicationsOutput;
    };
    sdk: {
      input: AssociateApplicationsCommandInput;
      output: AssociateApplicationsCommandOutput;
    };
  };
}
