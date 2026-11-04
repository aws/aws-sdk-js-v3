// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceSyncConfigInput, CreateServiceSyncConfigOutput } from "../models/models_0";
import { CreateServiceSyncConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceSyncConfigCommand}.
 */
export interface CreateServiceSyncConfigCommandInput extends CreateServiceSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceSyncConfigCommand}.
 */
export interface CreateServiceSyncConfigCommandOutput extends CreateServiceSyncConfigOutput, __MetadataBearer {}

/**
 * Create the Proton Ops configuration file.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateServiceSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateServiceSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateServiceSyncConfigInput
 *   serviceName: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   branch: "STRING_VALUE", // required
 *   filePath: "STRING_VALUE", // required
 * };
 * const command = new CreateServiceSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceSyncConfigOutput
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
 * @param CreateServiceSyncConfigCommandInput - {@link CreateServiceSyncConfigCommandInput}
 * @returns {@link CreateServiceSyncConfigCommandOutput}
 * @see {@link CreateServiceSyncConfigCommandInput} for command's `input` shape.
 * @see {@link CreateServiceSyncConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
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
export class CreateServiceSyncConfigCommand extends command<CreateServiceSyncConfigCommandInput, CreateServiceSyncConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceSyncConfig",
  CreateServiceSyncConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceSyncConfigInput;
      output: CreateServiceSyncConfigOutput;
    };
    sdk: {
      input: CreateServiceSyncConfigCommandInput;
      output: CreateServiceSyncConfigCommandOutput;
    };
  };
}
