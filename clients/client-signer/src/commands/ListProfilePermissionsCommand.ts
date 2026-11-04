// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfilePermissionsRequest, ListProfilePermissionsResponse } from "../models/models_0";
import { ListProfilePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfilePermissionsCommand}.
 */
export interface ListProfilePermissionsCommandInput extends ListProfilePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilePermissionsCommand}.
 */
export interface ListProfilePermissionsCommandOutput extends ListProfilePermissionsResponse, __MetadataBearer {}

/**
 * Lists the cross-account permissions associated with a signing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListProfilePermissionsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListProfilePermissionsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // ListProfilePermissionsRequest
 *   profileName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilePermissionsResponse
 * //   revisionId: "STRING_VALUE",
 * //   policySizeBytes: Number("int"),
 * //   permissions: [ // Permissions
 * //     { // Permission
 * //       action: "STRING_VALUE",
 * //       principal: "STRING_VALUE",
 * //       statementId: "STRING_VALUE",
 * //       profileVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilePermissionsCommandInput - {@link ListProfilePermissionsCommandInput}
 * @returns {@link ListProfilePermissionsCommandOutput}
 * @see {@link ListProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The allowed number of job-signing requests has been exceeded.
 *
 * This error supersedes the error `ThrottlingException`.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You signing certificate could not be validated.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class ListProfilePermissionsCommand extends command<ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "ListProfilePermissions",
  ListProfilePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfilePermissionsRequest;
      output: ListProfilePermissionsResponse;
    };
    sdk: {
      input: ListProfilePermissionsCommandInput;
      output: ListProfilePermissionsCommandOutput;
    };
  };
}
