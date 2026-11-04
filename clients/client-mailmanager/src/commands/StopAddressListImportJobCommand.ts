// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopAddressListImportJobRequest, StopAddressListImportJobResponse } from "../models/models_0";
import { StopAddressListImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopAddressListImportJobCommand}.
 */
export interface StopAddressListImportJobCommandInput extends StopAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAddressListImportJobCommand}.
 */
export interface StopAddressListImportJobCommandOutput extends StopAddressListImportJobResponse, __MetadataBearer {}

/**
 * Stops an ongoing import job for an address list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StopAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StopAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // StopAddressListImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAddressListImportJobCommandInput - {@link StopAddressListImportJobCommandInput}
 * @returns {@link StopAddressListImportJobCommandOutput}
 * @see {@link StopAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link StopAddressListImportJobCommandOutput} for command's `response` shape.
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
export class StopAddressListImportJobCommand extends command<StopAddressListImportJobCommandInput, StopAddressListImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StopAddressListImportJob",
  StopAddressListImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAddressListImportJobRequest;
      output: {};
    };
    sdk: {
      input: StopAddressListImportJobCommandInput;
      output: StopAddressListImportJobCommandOutput;
    };
  };
}
