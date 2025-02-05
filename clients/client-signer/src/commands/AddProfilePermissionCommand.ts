// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddProfilePermissionRequest, AddProfilePermissionResponse } from "../models/models_0";
import { de_AddProfilePermissionCommand, se_AddProfilePermissionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddProfilePermissionCommand}.
 */
export interface AddProfilePermissionCommandInput extends AddProfilePermissionRequest {}
/**
 * @public
 *
 * The output of {@link AddProfilePermissionCommand}.
 */
export interface AddProfilePermissionCommandOutput extends AddProfilePermissionResponse, __MetadataBearer {}

/**
 * <p>Adds cross-account permissions to a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, AddProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, AddProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SignerClient(config);
 * const input = { // AddProfilePermissionRequest
 *   profileName: "STRING_VALUE", // required
 *   profileVersion: "STRING_VALUE",
 *   action: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE",
 *   statementId: "STRING_VALUE", // required
 * };
 * const command = new AddProfilePermissionCommand(input);
 * const response = await client.send(command);
 * // { // AddProfilePermissionResponse
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddProfilePermissionCommandInput - {@link AddProfilePermissionCommandInput}
 * @returns {@link AddProfilePermissionCommandOutput}
 * @see {@link AddProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link AddProfilePermissionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The client is making a request that exceeds service limits.</p>
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
 * @public
 */
export class AddProfilePermissionCommand extends $Command
  .classBuilder<
    AddProfilePermissionCommandInput,
    AddProfilePermissionCommandOutput,
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
  .s("WallabyService", "AddProfilePermission", {})
  .n("SignerClient", "AddProfilePermissionCommand")
  .f(void 0, void 0)
  .ser(se_AddProfilePermissionCommand)
  .de(de_AddProfilePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddProfilePermissionRequest;
      output: AddProfilePermissionResponse;
    };
    sdk: {
      input: AddProfilePermissionCommandInput;
      output: AddProfilePermissionCommandOutput;
    };
  };
}
