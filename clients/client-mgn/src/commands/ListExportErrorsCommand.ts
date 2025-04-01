// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListExportErrorsRequest, ListExportErrorsResponse } from "../models/models_0";
import { de_ListExportErrorsCommand, se_ListExportErrorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportErrorsCommand}.
 */
export interface ListExportErrorsCommandInput extends ListExportErrorsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportErrorsCommand}.
 */
export interface ListExportErrorsCommandOutput extends ListExportErrorsResponse, __MetadataBearer {}

/**
 * <p>List export errors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListExportErrorsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListExportErrorsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListExportErrorsRequest
 *   exportID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExportErrorsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportErrorsResponse
 * //   items: [ // ExportErrors
 * //     { // ExportTaskError
 * //       errorDateTime: "STRING_VALUE",
 * //       errorData: { // ExportErrorData
 * //         rawError: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportErrorsCommandInput - {@link ListExportErrorsCommandInput}
 * @returns {@link ListExportErrorsCommandOutput}
 * @see {@link ListExportErrorsCommandInput} for command's `input` shape.
 * @see {@link ListExportErrorsCommandOutput} for command's `response` shape.
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
export class ListExportErrorsCommand extends $Command
  .classBuilder<
    ListExportErrorsCommandInput,
    ListExportErrorsCommandOutput,
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
  .s("ApplicationMigrationService", "ListExportErrors", {})
  .n("MgnClient", "ListExportErrorsCommand")
  .f(void 0, void 0)
  .ser(se_ListExportErrorsCommand)
  .de(de_ListExportErrorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportErrorsRequest;
      output: ListExportErrorsResponse;
    };
    sdk: {
      input: ListExportErrorsCommandInput;
      output: ListExportErrorsCommandOutput;
    };
  };
}
