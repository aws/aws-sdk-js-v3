// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListImportErrorsRequest, ListImportErrorsResponse } from "../models/models_0";
import { de_ListImportErrorsCommand, se_ListImportErrorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportErrorsCommand}.
 */
export interface ListImportErrorsCommandInput extends ListImportErrorsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportErrorsCommand}.
 */
export interface ListImportErrorsCommandOutput extends ListImportErrorsResponse, __MetadataBearer {}

/**
 * <p>List import errors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListImportErrorsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListImportErrorsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListImportErrorsRequest
 *   importID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImportErrorsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportErrorsResponse
 * //   items: [ // ImportErrors
 * //     { // ImportTaskError
 * //       errorDateTime: "STRING_VALUE",
 * //       errorType: "STRING_VALUE",
 * //       errorData: { // ImportErrorData
 * //         sourceServerID: "STRING_VALUE",
 * //         applicationID: "STRING_VALUE",
 * //         waveID: "STRING_VALUE",
 * //         ec2LaunchTemplateID: "STRING_VALUE",
 * //         rowNumber: Number("long"),
 * //         rawError: "STRING_VALUE",
 * //         accountID: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportErrorsCommandInput - {@link ListImportErrorsCommandInput}
 * @returns {@link ListImportErrorsCommandOutput}
 * @see {@link ListImportErrorsCommandInput} for command's `input` shape.
 * @see {@link ListImportErrorsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListImportErrorsCommand extends $Command
  .classBuilder<
    ListImportErrorsCommandInput,
    ListImportErrorsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "ListImportErrors", {})
  .n("MgnClient", "ListImportErrorsCommand")
  .f(void 0, void 0)
  .ser(se_ListImportErrorsCommand)
  .de(de_ListImportErrorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportErrorsRequest;
      output: ListImportErrorsResponse;
    };
    sdk: {
      input: ListImportErrorsCommandInput;
      output: ListImportErrorsCommandOutput;
    };
  };
}
