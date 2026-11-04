// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrustRequest, DeleteTrustResult } from "../models/models_0";
import { DeleteTrust$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class DeleteTrustCommand extends command<DeleteTrustCommandInput, DeleteTrustCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrust",
  DeleteTrust$
) {
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
