// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrailsRequest, ListTrailsResponse } from "../models/models_0";
import { de_ListTrailsCommand, se_ListTrailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrailsCommand}.
 */
export interface ListTrailsCommandInput extends ListTrailsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrailsCommand}.
 */
export interface ListTrailsCommandOutput extends ListTrailsResponse, __MetadataBearer {}

/**
 * <p>Lists trails that are in the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudTrailClient(config);
 * const input = { // ListTrailsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrailsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrailsResponse
 * //   Trails: [ // Trails
 * //     { // TrailInfo
 * //       TrailARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       HomeRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrailsCommandInput - {@link ListTrailsCommandInput}
 * @returns {@link ListTrailsCommandOutput}
 * @see {@link ListTrailsCommandInput} for command's `input` shape.
 * @see {@link ListTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
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
export class ListTrailsCommand extends $Command
  .classBuilder<
    ListTrailsCommandInput,
    ListTrailsCommandOutput,
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
  .s("CloudTrail_20131101", "ListTrails", {})
  .n("CloudTrailClient", "ListTrailsCommand")
  .f(void 0, void 0)
  .ser(se_ListTrailsCommand)
  .de(de_ListTrailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrailsRequest;
      output: ListTrailsResponse;
    };
    sdk: {
      input: ListTrailsCommandInput;
      output: ListTrailsCommandOutput;
    };
  };
}
