// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateTrustStoreRequest, AssociateTrustStoreResponse } from "../models/models_0";
import { AssociateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associates a trust store with a web portal.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class AssociateTrustStoreCommand extends command<AssociateTrustStoreCommandInput, AssociateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "AssociateTrustStore",
  AssociateTrustStore$
) {
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
