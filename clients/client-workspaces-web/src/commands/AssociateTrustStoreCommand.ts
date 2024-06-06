// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTrustStoreRequest, AssociateTrustStoreResponse } from "../models/models_0";
import { de_AssociateTrustStoreCommand, se_AssociateTrustStoreCommand } from "../protocols/Aws_restJson1";
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "AssociateTrustStore", {})
  .n("WorkSpacesWebClient", "AssociateTrustStoreCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTrustStoreCommand)
  .de(de_AssociateTrustStoreCommand)
  .build() {}
