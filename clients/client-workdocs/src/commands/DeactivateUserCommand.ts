// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateUserRequest } from "../models/models_0";
import { DeactivateUser } from "../schemas/schemas_12_DeactivateUser";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateUserCommand}.
 */
export interface DeactivateUserCommandInput extends DeactivateUserRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateUserCommand}.
 */
export interface DeactivateUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Deactivates the specified user, which revokes the user's access to Amazon
 *             WorkDocs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeactivateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeactivateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeactivateUserRequest
 *   UserId: "STRING_VALUE", // required
 *   AuthenticationToken: "STRING_VALUE",
 * };
 * const command = new DeactivateUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateUserCommandInput - {@link DeactivateUserCommandInput}
 * @returns {@link DeactivateUserCommandOutput}
 * @see {@link DeactivateUserCommandInput} for command's `input` shape.
 * @see {@link DeactivateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DeactivateUserCommand extends $Command
  .classBuilder<
    DeactivateUserCommandInput,
    DeactivateUserCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "DeactivateUser", {})
  .n("WorkDocsClient", "DeactivateUserCommand")
  .sc(DeactivateUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateUserRequest;
      output: {};
    };
    sdk: {
      input: DeactivateUserCommandInput;
      output: DeactivateUserCommandOutput;
    };
  };
}
