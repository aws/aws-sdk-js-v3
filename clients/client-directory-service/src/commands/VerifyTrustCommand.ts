// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { VerifyTrustRequest, VerifyTrustResult } from "../models/models_0";
import { VerifyTrust } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyTrustCommand}.
 */
export interface VerifyTrustCommandInput extends VerifyTrustRequest {}
/**
 * @public
 *
 * The output of {@link VerifyTrustCommand}.
 */
export interface VerifyTrustCommandOutput extends VerifyTrustResult, __MetadataBearer {}

/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust
 *       relationships.</p>
 *          <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an
 *       external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, VerifyTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, VerifyTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // VerifyTrustRequest
 *   TrustId: "STRING_VALUE", // required
 * };
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * // { // VerifyTrustResult
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyTrustCommandInput - {@link VerifyTrustCommandInput}
 * @returns {@link VerifyTrustCommandOutput}
 * @see {@link VerifyTrustCommandInput} for command's `input` shape.
 * @see {@link VerifyTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To verify a trust
 * ```javascript
 * // The following example verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
 * const input = {
 *   TrustId: "t-9267353df0"
 * };
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrustId: "t-9267353df0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class VerifyTrustCommand extends $Command
  .classBuilder<
    VerifyTrustCommandInput,
    VerifyTrustCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "VerifyTrust", {})
  .n("DirectoryServiceClient", "VerifyTrustCommand")
  .sc(VerifyTrust)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyTrustRequest;
      output: VerifyTrustResult;
    };
    sdk: {
      input: VerifyTrustCommandInput;
      output: VerifyTrustCommandOutput;
    };
  };
}
