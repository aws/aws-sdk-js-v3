// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { DeleteIdNamespaceInput, DeleteIdNamespaceOutput } from "../models/models_0";
import { DeleteIdNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandInput extends DeleteIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandOutput extends DeleteIdNamespaceOutput, __MetadataBearer {}

/**
 * <p>Deletes the <code>IdNamespace</code> with a given name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdNamespaceOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteIdNamespaceCommandInput - {@link DeleteIdNamespaceCommandInput}
 * @returns {@link DeleteIdNamespaceCommandOutput}
 * @see {@link DeleteIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class DeleteIdNamespaceCommand extends $Command
  .classBuilder<
    DeleteIdNamespaceCommandInput,
    DeleteIdNamespaceCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "DeleteIdNamespace", {})
  .n("EntityResolutionClient", "DeleteIdNamespaceCommand")
  .sc(DeleteIdNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdNamespaceInput;
      output: DeleteIdNamespaceOutput;
    };
    sdk: {
      input: DeleteIdNamespaceCommandInput;
      output: DeleteIdNamespaceCommandOutput;
    };
  };
}
