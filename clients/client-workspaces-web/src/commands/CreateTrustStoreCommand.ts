// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrustStoreRequest, CreateTrustStoreResponse } from "../models/models_0";
import { CreateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandInput extends CreateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreResponse, __MetadataBearer {}

/**
 * Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateTrustStoreRequest
 *   certificateList: [ // CertificateList // required
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustStoreResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrustStoreCommandInput - {@link CreateTrustStoreCommandInput}
 * @returns {@link CreateTrustStoreCommandOutput}
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
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
export class CreateTrustStoreCommand extends command<CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrustStore",
  CreateTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustStoreRequest;
      output: CreateTrustStoreResponse;
    };
    sdk: {
      input: CreateTrustStoreCommandInput;
      output: CreateTrustStoreCommandOutput;
    };
  };
}
