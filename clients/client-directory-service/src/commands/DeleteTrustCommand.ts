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
import type { DeleteTrustRequest, DeleteTrustResult } from "../models/models_0";
import { DeleteTrust$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrustCommand}.
 */
export interface DeleteTrustCommandInput extends DeleteTrustRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrustCommand}.
 */
export interface DeleteTrustCommandOutput extends DeleteTrustResult, __MetadataBearer {}

/**
 * <p>Deletes an existing trust relationship between your Managed Microsoft AD directory and an external
 *       domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteTrustRequest
 *   TrustId: "STRING_VALUE", // required
 *   DeleteAssociatedConditionalForwarder: true || false,
 * };
 * const command = new DeleteTrustCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrustResult
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrustCommandInput - {@link DeleteTrustCommandInput}
 * @returns {@link DeleteTrustCommandOutput}
 * @see {@link DeleteTrustCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustCommandOutput} for command's `response` shape.
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
 * @example To delete a trust
 * ```javascript
 * // The following example deletes an existing trust between your Microsoft AD in the AWS cloud and an external domain.
 * const input = {
 *   DeleteAssociatedConditionalForwarder: true,
 *   TrustId: "t-9267353743"
 * };
 * const command = new DeleteTrustCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrustId: "t-9267353743"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTrustCommand extends $Command
  .classBuilder<
    DeleteTrustCommandInput,
    DeleteTrustCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeleteTrust", {})
  .n("DirectoryServiceClient", "DeleteTrustCommand")
  .sc(DeleteTrust$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustRequest;
      output: DeleteTrustResult;
    };
    sdk: {
      input: DeleteTrustCommandInput;
      output: DeleteTrustCommandOutput;
    };
  };
}
