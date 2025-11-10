// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteContainerGroupDefinitionInput, DeleteContainerGroupDefinitionOutput } from "../models/models_0";
import { DeleteContainerGroupDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContainerGroupDefinitionCommand}.
 */
export interface DeleteContainerGroupDefinitionCommandInput extends DeleteContainerGroupDefinitionInput {}
/**
 * @public
 *
 * The output of {@link DeleteContainerGroupDefinitionCommand}.
 */
export interface DeleteContainerGroupDefinitionCommandOutput
  extends DeleteContainerGroupDefinitionOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>
 *             <b>Request options:</b>
 *          </p>
 *          <p>Deletes a container group definition. </p>
 *          <ul>
 *             <li>
 *                <p>Delete an entire container group definition, including all versions. Specify the
 *           container group definition name, or use an ARN value without the version number.</p>
 *             </li>
 *             <li>
 *                <p>Delete a particular version. Specify the container group definition name and a version
 *           number, or use an ARN value that includes the version number.</p>
 *             </li>
 *             <li>
 *                <p>Keep the newest versions and delete all older versions. Specify the container group
 *           definition name and the number of versions to retain. For example, set
 *             <code>VersionCountToRetain</code> to 5 to delete all but the five most recent
 *           versions.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Result</b>
 *          </p>
 *          <p>If successful, Amazon GameLift Servers removes the container group definition versions that you request deletion for.
 *     This request will fail for any requested versions if the following is true: </p>
 *          <ul>
 *             <li>
 *                <p>If the version is being used in an active fleet</p>
 *             </li>
 *             <li>
 *                <p>If the version is being deployed to a fleet in a deployment that's currently in progress.</p>
 *             </li>
 *             <li>
 *                <p>If the version is designated as a rollback definition in a fleet deployment that's currently in progress.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-create-groups.html">Manage a container group definition</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteContainerGroupDefinitionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteContainerGroupDefinitionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteContainerGroupDefinitionInput
 *   Name: "STRING_VALUE", // required
 *   VersionNumber: Number("int"),
 *   VersionCountToRetain: Number("int"),
 * };
 * const command = new DeleteContainerGroupDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerGroupDefinitionCommandInput - {@link DeleteContainerGroupDefinitionCommandInput}
 * @returns {@link DeleteContainerGroupDefinitionCommandOutput}
 * @see {@link DeleteContainerGroupDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerGroupDefinitionCommandOutput} for command's `response` shape.
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
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DeleteContainerGroupDefinitionCommand extends $Command
  .classBuilder<
    DeleteContainerGroupDefinitionCommandInput,
    DeleteContainerGroupDefinitionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeleteContainerGroupDefinition", {})
  .n("GameLiftClient", "DeleteContainerGroupDefinitionCommand")
  .sc(DeleteContainerGroupDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerGroupDefinitionInput;
      output: {};
    };
    sdk: {
      input: DeleteContainerGroupDefinitionCommandInput;
      output: DeleteContainerGroupDefinitionCommandOutput;
    };
  };
}
