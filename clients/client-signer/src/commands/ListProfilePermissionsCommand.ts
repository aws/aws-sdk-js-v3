// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProfilePermissionsRequest, ListProfilePermissionsResponse } from "../models/models_0";
import { ListProfilePermissions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the cross-account permissions associated with a signing profile.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 *          <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class ListProfilePermissionsCommand extends $Command
  .classBuilder<
    ListProfilePermissionsCommandInput,
    ListProfilePermissionsCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "ListProfilePermissions", {})
  .n("SignerClient", "ListProfilePermissionsCommand")
  .sc(ListProfilePermissions)
  .build() {
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
