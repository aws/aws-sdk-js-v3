// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrustStoreRequest, GetTrustStoreResponse } from "../models/models_0";
import { GetTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandInput extends GetTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandOutput extends GetTrustStoreResponse, __MetadataBearer {}

/**
 * Gets the trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetTrustStoreRequest
 *   trustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreResponse
 * //   trustStore: { // TrustStore
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     trustStoreArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCommandInput - {@link GetTrustStoreCommandInput}
 * @returns {@link GetTrustStoreCommandOutput}
 * @see {@link GetTrustStoreCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCommandOutput} for command's `response` shape.
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
export class GetTrustStoreCommand extends command<GetTrustStoreCommandInput, GetTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustStore",
  GetTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreRequest;
      output: GetTrustStoreResponse;
    };
    sdk: {
      input: GetTrustStoreCommandInput;
      output: GetTrustStoreCommandOutput;
    };
  };
}
