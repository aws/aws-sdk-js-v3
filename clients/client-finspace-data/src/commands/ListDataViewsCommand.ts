// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListDataViewsRequest, ListDataViewsResponse } from "../models/models_0";
import { de_ListDataViewsCommand, se_ListDataViewsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataViewsCommand}.
 */
export interface ListDataViewsCommandInput extends ListDataViewsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataViewsCommand}.
 */
export interface ListDataViewsCommandOutput extends ListDataViewsResponse, __MetadataBearer {}

/**
 * <p>Lists all available Dataviews for a Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListDataViewsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListDataViewsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // ListDataViewsRequest
 *   datasetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataViewsResponse
 * //   nextToken: "STRING_VALUE",
 * //   dataViews: [ // DataViewList
 * //     { // DataViewSummary
 * //       dataViewId: "STRING_VALUE",
 * //       dataViewArn: "STRING_VALUE",
 * //       datasetId: "STRING_VALUE",
 * //       asOfTimestamp: Number("long"),
 * //       partitionColumns: [ // PartitionColumnList
 * //         "STRING_VALUE",
 * //       ],
 * //       sortColumns: [ // SortColumnList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "RUNNING" || "STARTING" || "FAILED" || "CANCELLED" || "TIMEOUT" || "SUCCESS" || "PENDING" || "FAILED_CLEANUP_FAILED",
 * //       errorInfo: { // DataViewErrorInfo
 * //         errorMessage: "STRING_VALUE",
 * //         errorCategory: "VALIDATION" || "SERVICE_QUOTA_EXCEEDED" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INTERNAL_SERVICE_EXCEPTION" || "CANCELLED" || "USER_RECOVERABLE",
 * //       },
 * //       destinationTypeProperties: { // DataViewDestinationTypeParams
 * //         destinationType: "STRING_VALUE", // required
 * //         s3DestinationExportFileFormat: "PARQUET" || "DELIMITED_TEXT",
 * //         s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       autoUpdate: true || false,
 * //       createTime: Number("long"),
 * //       lastModifiedTime: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataViewsCommandInput - {@link ListDataViewsCommandInput}
 * @returns {@link ListDataViewsCommandOutput}
 * @see {@link ListDataViewsCommandInput} for command's `input` shape.
 * @see {@link ListDataViewsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class ListDataViewsCommand extends $Command
  .classBuilder<
    ListDataViewsCommandInput,
    ListDataViewsCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "ListDataViews", {})
  .n("FinspaceDataClient", "ListDataViewsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataViewsCommand)
  .de(de_ListDataViewsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataViewsRequest;
      output: ListDataViewsResponse;
    };
    sdk: {
      input: ListDataViewsCommandInput;
      output: ListDataViewsCommandOutput;
    };
  };
}
