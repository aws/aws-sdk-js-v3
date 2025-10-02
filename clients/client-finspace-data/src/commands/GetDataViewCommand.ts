// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetDataViewRequest, GetDataViewResponse } from "../models/models_0";
import { de_GetDataViewCommand, se_GetDataViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataViewCommand}.
 */
export interface GetDataViewCommandInput extends GetDataViewRequest {}
/**
 * @public
 *
 * The output of {@link GetDataViewCommand}.
 */
export interface GetDataViewCommandOutput extends GetDataViewResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Dataview.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetDataViewCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetDataViewCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetDataViewRequest
 *   dataViewId: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetDataViewCommand(input);
 * const response = await client.send(command);
 * // { // GetDataViewResponse
 * //   autoUpdate: true || false,
 * //   partitionColumns: [ // PartitionColumnList
 * //     "STRING_VALUE",
 * //   ],
 * //   datasetId: "STRING_VALUE",
 * //   asOfTimestamp: Number("long"),
 * //   errorInfo: { // DataViewErrorInfo
 * //     errorMessage: "STRING_VALUE",
 * //     errorCategory: "VALIDATION" || "SERVICE_QUOTA_EXCEEDED" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INTERNAL_SERVICE_EXCEPTION" || "CANCELLED" || "USER_RECOVERABLE",
 * //   },
 * //   lastModifiedTime: Number("long"),
 * //   createTime: Number("long"),
 * //   sortColumns: [ // SortColumnList
 * //     "STRING_VALUE",
 * //   ],
 * //   dataViewId: "STRING_VALUE",
 * //   dataViewArn: "STRING_VALUE",
 * //   destinationTypeParams: { // DataViewDestinationTypeParams
 * //     destinationType: "STRING_VALUE", // required
 * //     s3DestinationExportFileFormat: "PARQUET" || "DELIMITED_TEXT",
 * //     s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   status: "RUNNING" || "STARTING" || "FAILED" || "CANCELLED" || "TIMEOUT" || "SUCCESS" || "PENDING" || "FAILED_CLEANUP_FAILED",
 * // };
 *
 * ```
 *
 * @param GetDataViewCommandInput - {@link GetDataViewCommandInput}
 * @returns {@link GetDataViewCommandOutput}
 * @see {@link GetDataViewCommandInput} for command's `input` shape.
 * @see {@link GetDataViewCommandOutput} for command's `response` shape.
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
export class GetDataViewCommand extends $Command
  .classBuilder<
    GetDataViewCommandInput,
    GetDataViewCommandOutput,
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
  .s("AWSHabaneroPublicAPI", "GetDataView", {})
  .n("FinspaceDataClient", "GetDataViewCommand")
  .f(void 0, void 0)
  .ser(se_GetDataViewCommand)
  .de(de_GetDataViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataViewRequest;
      output: GetDataViewResponse;
    };
    sdk: {
      input: GetDataViewCommandInput;
      output: GetDataViewCommandOutput;
    };
  };
}
