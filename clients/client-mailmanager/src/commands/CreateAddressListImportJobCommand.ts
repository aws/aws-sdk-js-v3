// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  CreateAddressListImportJobRequest,
  CreateAddressListImportJobResponse,
  CreateAddressListImportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAddressListImportJobCommand, se_CreateAddressListImportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an import job for an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class CreateAddressListImportJobCommand extends $Command
  .classBuilder<
    CreateAddressListImportJobCommandInput,
    CreateAddressListImportJobCommandOutput,
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
  .s("MailManagerSvc", "CreateAddressListImportJob", {})
  .n("MailManagerClient", "CreateAddressListImportJobCommand")
  .f(void 0, CreateAddressListImportJobResponseFilterSensitiveLog)
  .ser(se_CreateAddressListImportJobCommand)
  .de(de_CreateAddressListImportJobCommand)
  .build() {
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
