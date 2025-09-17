// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  ListAddressListImportJobsRequest,
  ListAddressListImportJobsResponse,
  ListAddressListImportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAddressListImportJobsCommand, se_ListAddressListImportJobsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAddressListImportJobsCommand}.
 */
export interface ListAddressListImportJobsCommandInput extends ListAddressListImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAddressListImportJobsCommand}.
 */
export interface ListAddressListImportJobsCommandOutput extends ListAddressListImportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists jobs for an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListAddressListImportJobsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListAddressListImportJobsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListAddressListImportJobsRequest
 *   AddressListId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListAddressListImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAddressListImportJobsResponse
 * //   ImportJobs: [ // ImportJobs // required
 * //     { // ImportJob
 * //       JobId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "STOPPED", // required
 * //       PreSignedUrl: "STRING_VALUE", // required
 * //       ImportedItemsCount: Number("int"),
 * //       FailedItemsCount: Number("int"),
 * //       ImportDataFormat: { // ImportDataFormat
 * //         ImportDataType: "CSV" || "JSON", // required
 * //       },
 * //       AddressListId: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       StartTimestamp: new Date("TIMESTAMP"),
 * //       CompletedTimestamp: new Date("TIMESTAMP"),
 * //       Error: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAddressListImportJobsCommandInput - {@link ListAddressListImportJobsCommandInput}
 * @returns {@link ListAddressListImportJobsCommandOutput}
 * @see {@link ListAddressListImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAddressListImportJobsCommandOutput} for command's `response` shape.
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
export class ListAddressListImportJobsCommand extends $Command
  .classBuilder<
    ListAddressListImportJobsCommandInput,
    ListAddressListImportJobsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "ListAddressListImportJobs", {})
  .n("MailManagerClient", "ListAddressListImportJobsCommand")
  .f(void 0, ListAddressListImportJobsResponseFilterSensitiveLog)
  .ser(se_ListAddressListImportJobsCommand)
  .de(de_ListAddressListImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAddressListImportJobsRequest;
      output: ListAddressListImportJobsResponse;
    };
    sdk: {
      input: ListAddressListImportJobsCommandInput;
      output: ListAddressListImportJobsCommandOutput;
    };
  };
}
