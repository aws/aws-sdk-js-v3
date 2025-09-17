// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { CreateDataViewRequest, CreateDataViewResponse } from "../models/models_0";
import { de_CreateDataViewCommand, se_CreateDataViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataViewCommand}.
 */
export interface CreateDataViewCommandInput extends CreateDataViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataViewCommand}.
 */
export interface CreateDataViewCommandOutput extends CreateDataViewResponse, __MetadataBearer {}

/**
 * <p>Creates a Dataview for a Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateDataViewCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateDataViewCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // CreateDataViewRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   autoUpdate: true || false,
 *   sortColumns: [ // SortColumnList
 *     "STRING_VALUE",
 *   ],
 *   partitionColumns: [ // PartitionColumnList
 *     "STRING_VALUE",
 *   ],
 *   asOfTimestamp: Number("long"),
 *   destinationTypeParams: { // DataViewDestinationTypeParams
 *     destinationType: "STRING_VALUE", // required
 *     s3DestinationExportFileFormat: "PARQUET" || "DELIMITED_TEXT",
 *     s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateDataViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataViewResponse
 * //   datasetId: "STRING_VALUE",
 * //   dataViewId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataViewCommandInput - {@link CreateDataViewCommandInput}
 * @returns {@link CreateDataViewCommandOutput}
 * @see {@link CreateDataViewCommandInput} for command's `input` shape.
 * @see {@link CreateDataViewCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
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
export class CreateDataViewCommand extends $Command
  .classBuilder<
    CreateDataViewCommandInput,
    CreateDataViewCommandOutput,
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
  .s("AWSHabaneroPublicAPI", "CreateDataView", {})
  .n("FinspaceDataClient", "CreateDataViewCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataViewCommand)
  .de(de_CreateDataViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataViewRequest;
      output: CreateDataViewResponse;
    };
    sdk: {
      input: CreateDataViewCommandInput;
      output: CreateDataViewCommandOutput;
    };
  };
}
