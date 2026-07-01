// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrustStoreRequest, DeleteTrustStoreResponse } from "../models/models_0";
import { DeleteTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandInput extends DeleteTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandOutput extends DeleteTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes the trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteTrustStoreRequest
 *   trustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrustStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrustStoreCommandInput - {@link DeleteTrustStoreCommandInput}
 * @returns {@link DeleteTrustStoreCommandOutput}
 * @see {@link DeleteTrustStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustStoreCommandOutput} for command's `response` shape.
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
export class DeleteTrustStoreCommand extends command<DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrustStore",
  DeleteTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrustStoreCommandInput;
      output: DeleteTrustStoreCommandOutput;
    };
  };
}
