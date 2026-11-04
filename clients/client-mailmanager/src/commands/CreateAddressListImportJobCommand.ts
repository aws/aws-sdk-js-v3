// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAddressListImportJobRequest, CreateAddressListImportJobResponse } from "../models/models_0";
import { CreateAddressListImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAddressListImportJobCommand}.
 */
export interface CreateAddressListImportJobCommandInput extends CreateAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddressListImportJobCommand}.
 */
export interface CreateAddressListImportJobCommandOutput extends CreateAddressListImportJobResponse, __MetadataBearer {}

/**
 * Creates an import job for an address list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateAddressListImportJobRequest
 *   ClientToken: "STRING_VALUE",
 *   AddressListId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ImportDataFormat: { // ImportDataFormat
 *     ImportDataType: "CSV" || "JSON", // required
 *   },
 * };
 * const command = new CreateAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddressListImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   PreSignedUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAddressListImportJobCommandInput - {@link CreateAddressListImportJobCommandInput}
 * @returns {@link CreateAddressListImportJobCommandOutput}
 * @see {@link CreateAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateAddressListImportJobCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Occurs when a user is denied access to a specific resource or action.
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
export class CreateAddressListImportJobCommand extends command<CreateAddressListImportJobCommandInput, CreateAddressListImportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateAddressListImportJob",
  CreateAddressListImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAddressListImportJobRequest;
      output: CreateAddressListImportJobResponse;
    };
    sdk: {
      input: CreateAddressListImportJobCommandInput;
      output: CreateAddressListImportJobCommandOutput;
    };
  };
}
