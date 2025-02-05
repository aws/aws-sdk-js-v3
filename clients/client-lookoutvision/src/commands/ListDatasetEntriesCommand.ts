// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { ListDatasetEntriesRequest, ListDatasetEntriesResponse } from "../models/models_0";
import { de_ListDatasetEntriesCommand, se_ListDatasetEntriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetEntriesCommand}.
 */
export interface ListDatasetEntriesCommandInput extends ListDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetEntriesCommand}.
 */
export interface ListDatasetEntriesCommandOutput extends ListDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
 *       information for a single image, including the image location and the assigned label.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LookoutVisionClient(config);
 * const input = { // ListDatasetEntriesRequest
 *   ProjectName: "STRING_VALUE", // required
 *   DatasetType: "STRING_VALUE", // required
 *   Labeled: true || false,
 *   AnomalyClass: "STRING_VALUE",
 *   BeforeCreationDate: new Date("TIMESTAMP"),
 *   AfterCreationDate: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SourceRefContains: "STRING_VALUE",
 * };
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetEntriesResponse
 * //   DatasetEntries: [ // DatasetEntryList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetEntriesCommandInput - {@link ListDatasetEntriesCommandInput}
 * @returns {@link ListDatasetEntriesCommandOutput}
 * @see {@link ListDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 * @public
 */
export class ListDatasetEntriesCommand extends $Command
  .classBuilder<
    ListDatasetEntriesCommandInput,
    ListDatasetEntriesCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "ListDatasetEntries", {})
  .n("LookoutVisionClient", "ListDatasetEntriesCommand")
  .f(void 0, void 0)
  .ser(se_ListDatasetEntriesCommand)
  .de(de_ListDatasetEntriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetEntriesRequest;
      output: ListDatasetEntriesResponse;
    };
    sdk: {
      input: ListDatasetEntriesCommandInput;
      output: ListDatasetEntriesCommandOutput;
    };
  };
}
