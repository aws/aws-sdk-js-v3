// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrustStoreRequest, UpdateTrustStoreResponse } from "../models/models_0";
import { UpdateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandInput extends UpdateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandOutput extends UpdateTrustStoreResponse, __MetadataBearer {}

/**
 * Updates the trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateTrustStoreRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   certificatesToAdd: [ // CertificateList
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 *   certificatesToDelete: [ // CertificateThumbprintList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrustStoreResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateTrustStoreCommandInput - {@link UpdateTrustStoreCommandInput}
 * @returns {@link UpdateTrustStoreCommandOutput}
 * @see {@link UpdateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class UpdateTrustStoreCommand extends command<UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTrustStore",
  UpdateTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrustStoreRequest;
      output: UpdateTrustStoreResponse;
    };
    sdk: {
      input: UpdateTrustStoreCommandInput;
      output: UpdateTrustStoreCommandOutput;
    };
  };
}
