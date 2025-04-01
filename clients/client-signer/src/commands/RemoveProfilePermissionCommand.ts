// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveProfilePermissionRequest, RemoveProfilePermissionResponse } from "../models/models_0";
import { de_RemoveProfilePermissionCommand, se_RemoveProfilePermissionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes cross-account permissions from a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RemoveProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RemoveProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource encountered a conflicting state.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
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
export class RemoveProfilePermissionCommand extends $Command
  .classBuilder<
    RemoveProfilePermissionCommandInput,
    RemoveProfilePermissionCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "RemoveProfilePermission", {})
  .n("SignerClient", "RemoveProfilePermissionCommand")
  .f(void 0, void 0)
  .ser(se_RemoveProfilePermissionCommand)
  .de(de_RemoveProfilePermissionCommand)
  .build() {
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
