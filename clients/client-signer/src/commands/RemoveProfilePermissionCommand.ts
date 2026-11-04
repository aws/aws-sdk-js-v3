// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveProfilePermissionRequest, RemoveProfilePermissionResponse } from "../models/models_0";
import { RemoveProfilePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveProfilePermissionCommand}.
 */
export interface RemoveProfilePermissionCommandInput extends RemoveProfilePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveProfilePermissionCommand}.
 */
export interface RemoveProfilePermissionCommandOutput extends RemoveProfilePermissionResponse, __MetadataBearer {}

/**
 * Removes cross-account permissions from a signing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RemoveProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RemoveProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // RemoveProfilePermissionRequest
 *   profileName: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 * };
 * const command = new RemoveProfilePermissionCommand(input);
 * const response = await client.send(command);
 * // { // RemoveProfilePermissionResponse
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveProfilePermissionCommandInput - {@link RemoveProfilePermissionCommandInput}
 * @returns {@link RemoveProfilePermissionCommandOutput}
 * @see {@link RemoveProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource encountered a conflicting state.
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
export class RemoveProfilePermissionCommand extends command<RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput>(
  _ep0,
  _mw0,
  "RemoveProfilePermission",
  RemoveProfilePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveProfilePermissionRequest;
      output: RemoveProfilePermissionResponse;
    };
    sdk: {
      input: RemoveProfilePermissionCommandInput;
      output: RemoveProfilePermissionCommandOutput;
    };
  };
}
