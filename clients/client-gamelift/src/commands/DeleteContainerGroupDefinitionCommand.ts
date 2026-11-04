// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContainerGroupDefinitionInput, DeleteContainerGroupDefinitionOutput } from "../models/models_0";
import { DeleteContainerGroupDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteContainerGroupDefinitionCommandOutput extends DeleteContainerGroupDefinitionOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** Container
 *
 * **Request options:**
 *
 * Deletes a container group definition.
 *
 * - Delete an entire container group definition, including all versions. Specify the container group definition name, or use an ARN value without the version number.
 * - Delete a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number.
 * - Keep the newest versions and delete all older versions. Specify the container group definition name and the number of versions to retain. For example, set `VersionCountToRetain` to 5 to delete all but the five most recent versions.
 *
 * **Result**
 *
 * If successful, Amazon GameLift Servers removes the container group definition versions that you request deletion for. This request will fail for any requested versions if the following is true:
 *
 * - If the version is being used in an active fleet
 * - If the version is being deployed to a fleet in a deployment that's currently in progress.
 * - If the version is designated as a rollback definition in a fleet deployment that's currently in progress.
 *
 * **Learn more**
 *
 * - [Manage a container group definition](https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-create-groups.html)
 *
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
 * @throws {@link TaggingFailedException} (client fault)
 *
 * The requested tagging operation did not succeed. This may be due to invalid tag format or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DeleteContainerGroupDefinitionCommand extends command<DeleteContainerGroupDefinitionCommandInput, DeleteContainerGroupDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContainerGroupDefinition",
  DeleteContainerGroupDefinition$
) {
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
