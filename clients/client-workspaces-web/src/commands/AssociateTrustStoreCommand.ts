// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTrustStoreRequest, AssociateTrustStoreResponse } from "../models/models_0";
import { AssociateTrustStore } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrustStoreCommand}.
 */
export interface AssociateTrustStoreCommandInput extends AssociateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrustStoreCommand}.
 */
export interface AssociateTrustStoreCommandOutput extends AssociateTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Associates a trust store with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateTrustStoreRequest
 *   portalArn: "STRING_VALUE", // required
 *   trustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTrustStoreResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   trustStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateTrustStoreCommandInput - {@link AssociateTrustStoreCommandInput}
 * @returns {@link AssociateTrustStoreCommandOutput}
 * @see {@link AssociateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link AssociateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class AssociateTrustStoreCommand extends $Command
  .classBuilder<
    AssociateTrustStoreCommandInput,
    AssociateTrustStoreCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "AssociateTrustStore", {})
  .n("WorkSpacesWebClient", "AssociateTrustStoreCommand")
  .sc(AssociateTrustStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTrustStoreRequest;
      output: AssociateTrustStoreResponse;
    };
    sdk: {
      input: AssociateTrustStoreCommandInput;
      output: AssociateTrustStoreCommandOutput;
    };
  };
}
