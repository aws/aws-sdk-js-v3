// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListImportFailuresRequest, ListImportFailuresResponse } from "../models/models_0";
import { de_ListImportFailuresCommand, se_ListImportFailuresCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportFailuresCommand}.
 */
export interface ListImportFailuresCommandInput extends ListImportFailuresRequest {}
/**
 * @public
 *
 * The output of {@link ListImportFailuresCommand}.
 */
export interface ListImportFailuresCommandOutput extends ListImportFailuresResponse, __MetadataBearer {}

/**
 * <p> Returns a list of failures for the specified import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListImportFailuresCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListImportFailuresCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudTrailClient(config);
 * const input = { // ListImportFailuresRequest
 *   ImportId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListImportFailuresCommand(input);
 * const response = await client.send(command);
 * // { // ListImportFailuresResponse
 * //   Failures: [ // ImportFailureList
 * //     { // ImportFailureListItem
 * //       Location: "STRING_VALUE",
 * //       Status: "FAILED" || "RETRY" || "SUCCEEDED",
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportFailuresCommandInput - {@link ListImportFailuresCommandInput}
 * @returns {@link ListImportFailuresCommandOutput}
 * @see {@link ListImportFailuresCommandInput} for command's `input` shape.
 * @see {@link ListImportFailuresCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 * @public
 */
export class ListImportFailuresCommand extends $Command
  .classBuilder<
    ListImportFailuresCommandInput,
    ListImportFailuresCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "ListImportFailures", {})
  .n("CloudTrailClient", "ListImportFailuresCommand")
  .f(void 0, void 0)
  .ser(se_ListImportFailuresCommand)
  .de(de_ListImportFailuresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportFailuresRequest;
      output: ListImportFailuresResponse;
    };
    sdk: {
      input: ListImportFailuresCommandInput;
      output: ListImportFailuresCommandOutput;
    };
  };
}
