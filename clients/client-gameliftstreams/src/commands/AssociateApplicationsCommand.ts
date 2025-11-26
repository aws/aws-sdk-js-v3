// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GameLiftStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GameLiftStreamsClient";
import type { AssociateApplicationsInput, AssociateApplicationsOutput } from "../models/models_0";
import { AssociateApplications } from "../schemas/schemas_0";

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
 * <p>When you associate, or link, an application with a stream group, then Amazon GameLift Streams can launch the application using the stream group's allocated compute resources. The stream group must be in <code>ACTIVE</code> status. You can reverse this action by using <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_DisassociateApplications.html">DisassociateApplications</a>.</p> <p>If a stream group does not already have a linked application, Amazon GameLift Streams will automatically assign the first application provided in <code>ApplicationIdentifiers</code> as the default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, AssociateApplicationsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, AssociateApplicationsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
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
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the resource to exceed an allowed service quota. Resolve the issue before you try again.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "AssociateApplications", {})
  .n("GameLiftStreamsClient", "AssociateApplicationsCommand")
  .sc(AssociateApplications)
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
