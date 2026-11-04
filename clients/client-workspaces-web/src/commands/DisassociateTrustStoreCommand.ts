// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateTrustStoreRequest, DisassociateTrustStoreResponse } from "../models/models_0";
import { DisassociateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateTrustStoreCommand}.
 */
export interface DisassociateTrustStoreCommandInput extends DisassociateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrustStoreCommand}.
 */
export interface DisassociateTrustStoreCommandOutput extends DisassociateTrustStoreResponse, __MetadataBearer {}

/**
 * Disassociates a trust store from a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateTrustStoreRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTrustStoreCommandInput - {@link DisassociateTrustStoreCommandInput}
 * @returns {@link DisassociateTrustStoreCommandOutput}
 * @see {@link DisassociateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrustStoreCommandOutput} for command's `response` shape.
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
export class DisassociateTrustStoreCommand extends command<DisassociateTrustStoreCommandInput, DisassociateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateTrustStore",
  DisassociateTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTrustStoreRequest;
      output: {};
    };
    sdk: {
      input: DisassociateTrustStoreCommandInput;
      output: DisassociateTrustStoreCommandOutput;
    };
  };
}
