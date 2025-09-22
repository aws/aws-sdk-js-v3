// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetAddressListImportJobRequest, GetAddressListImportJobResponse } from "../models/models_0";
import { GetAddressListImportJob } from "../schemas/schemas_1_Address";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAddressListImportJobCommand}.
 */
export interface GetAddressListImportJobCommandInput extends GetAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetAddressListImportJobCommand}.
 */
export interface GetAddressListImportJobCommandOutput extends GetAddressListImportJobResponse, __MetadataBearer {}

/**
 * <p>Fetch attributes of an import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetAddressListImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAddressListImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Status: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "STOPPED", // required
 * //   PreSignedUrl: "STRING_VALUE", // required
 * //   ImportedItemsCount: Number("int"),
 * //   FailedItemsCount: Number("int"),
 * //   ImportDataFormat: { // ImportDataFormat
 * //     ImportDataType: "CSV" || "JSON", // required
 * //   },
 * //   AddressListId: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   StartTimestamp: new Date("TIMESTAMP"),
 * //   CompletedTimestamp: new Date("TIMESTAMP"),
 * //   Error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAddressListImportJobCommandInput - {@link GetAddressListImportJobCommandInput}
 * @returns {@link GetAddressListImportJobCommandOutput}
 * @see {@link GetAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link GetAddressListImportJobCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class GetAddressListImportJobCommand extends $Command
  .classBuilder<
    GetAddressListImportJobCommandInput,
    GetAddressListImportJobCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetAddressListImportJob", {})
  .n("MailManagerClient", "GetAddressListImportJobCommand")
  .sc(GetAddressListImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAddressListImportJobRequest;
      output: GetAddressListImportJobResponse;
    };
    sdk: {
      input: GetAddressListImportJobCommandInput;
      output: GetAddressListImportJobCommandOutput;
    };
  };
}
