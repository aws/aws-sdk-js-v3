// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceSyncConfigInput, DeleteServiceSyncConfigOutput } from "../models/models_0";
import { DeleteServiceSyncConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceSyncConfigCommand}.
 */
export interface DeleteServiceSyncConfigCommandInput extends DeleteServiceSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceSyncConfigCommand}.
 */
export interface DeleteServiceSyncConfigCommandOutput extends DeleteServiceSyncConfigOutput, __MetadataBearer {}

/**
 * Delete the Proton Ops file.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteServiceSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteServiceSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteServiceSyncConfigInput
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceSyncConfigOutput
 * //   serviceSyncConfig: { // ServiceSyncConfig
 * //     serviceName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     filePath: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServiceSyncConfigCommandInput - {@link DeleteServiceSyncConfigCommandInput}
 * @returns {@link DeleteServiceSyncConfigCommandOutput}
 * @see {@link DeleteServiceSyncConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class DeleteServiceSyncConfigCommand extends command<DeleteServiceSyncConfigCommandInput, DeleteServiceSyncConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceSyncConfig",
  DeleteServiceSyncConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceSyncConfigInput;
      output: DeleteServiceSyncConfigOutput;
    };
    sdk: {
      input: DeleteServiceSyncConfigCommandInput;
      output: DeleteServiceSyncConfigCommandOutput;
    };
  };
}
