// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAddressListImportJobRequest, StartAddressListImportJobResponse } from "../models/models_0";
import { StartAddressListImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAddressListImportJobCommand}.
 */
export interface StartAddressListImportJobCommandInput extends StartAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAddressListImportJobCommand}.
 */
export interface StartAddressListImportJobCommandOutput extends StartAddressListImportJobResponse, __MetadataBearer {}

/**
 * Starts an import job for an address list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StartAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StartAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // StartAddressListImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StartAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAddressListImportJobCommandInput - {@link StartAddressListImportJobCommandInput}
 * @returns {@link StartAddressListImportJobCommandOutput}
 * @see {@link StartAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAddressListImportJobCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Occurs when a user is denied access to a specific resource or action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when a requested resource is not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Occurs when an operation exceeds a predefined service quota or limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class StartAddressListImportJobCommand extends command<StartAddressListImportJobCommandInput, StartAddressListImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartAddressListImportJob",
  StartAddressListImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAddressListImportJobRequest;
      output: {};
    };
    sdk: {
      input: StartAddressListImportJobCommandInput;
      output: StartAddressListImportJobCommandOutput;
    };
  };
}
