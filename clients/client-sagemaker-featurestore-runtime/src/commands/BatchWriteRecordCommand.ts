// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchWriteRecordRequest, BatchWriteRecordResponse } from "../models/models_0";
import type {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";
import { BatchWriteRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchWriteRecordCommand}.
 */
export interface BatchWriteRecordCommandInput extends BatchWriteRecordRequest {}
/**
 * @public
 *
 * The output of {@link BatchWriteRecordCommand}.
 */
export interface BatchWriteRecordCommandOutput extends BatchWriteRecordResponse, __MetadataBearer {}

/**
 * <p>Writes a batch of <code>Records</code> to one or more <code>FeatureGroup</code>s. Use
 *          this API for bulk ingestion of records into the <code>OnlineStore</code> and
 *             <code>OfflineStore</code>.</p>
 *          <p>You can set the ingested records to expire at a given time to live (TTL) duration after
 *          the record's event time by specifying the <code>TtlDuration</code> parameter. A request
 *          level <code>TtlDuration</code> applies to all entries that do not specify their own
 *             <code>TtlDuration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, BatchWriteRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, BatchWriteRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // BatchWriteRecordRequest
 *   Entries: [ // BatchWriteRecordEntries // required
 *     { // BatchWriteRecordEntry
 *       FeatureGroupName: "STRING_VALUE", // required
 *       Record: [ // Record // required
 *         { // FeatureValue
 *           FeatureName: "STRING_VALUE", // required
 *           ValueAsString: "STRING_VALUE",
 *           ValueAsStringList: [ // ValueAsStringList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetStores: [ // TargetStores
 *         "OnlineStore" || "OfflineStore",
 *       ],
 *       TtlDuration: { // TtlDuration
 *         Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 *         Value: Number("int"), // required
 *       },
 *     },
 *   ],
 *   TtlDuration: {
 *     Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 *     Value: Number("int"), // required
 *   },
 * };
 * const command = new BatchWriteRecordCommand(input);
 * const response = await client.send(command);
 * // { // BatchWriteRecordResponse
 * //   Errors: [ // BatchWriteRecordErrors // required
 * //     { // BatchWriteRecordError
 * //       Entry: { // BatchWriteRecordEntry
 * //         FeatureGroupName: "STRING_VALUE", // required
 * //         Record: [ // Record // required
 * //           { // FeatureValue
 * //             FeatureName: "STRING_VALUE", // required
 * //             ValueAsString: "STRING_VALUE",
 * //             ValueAsStringList: [ // ValueAsStringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         TargetStores: [ // TargetStores
 * //           "OnlineStore" || "OfflineStore",
 * //         ],
 * //         TtlDuration: { // TtlDuration
 * //           Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 * //           Value: Number("int"), // required
 * //         },
 * //       },
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UnprocessedEntries: [ // UnprocessedBatchWriteRecordEntries // required
 * //     {
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       Record: [ // required
 * //         {
 * //           FeatureName: "STRING_VALUE", // required
 * //           ValueAsString: "STRING_VALUE",
 * //           ValueAsStringList: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TargetStores: [
 * //         "OnlineStore" || "OfflineStore",
 * //       ],
 * //       TtlDuration: {
 * //         Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 * //         Value: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchWriteRecordCommandInput - {@link BatchWriteRecordCommandInput}
 * @returns {@link BatchWriteRecordCommandOutput}
 * @see {@link BatchWriteRecordCommandInput} for command's `input` shape.
 * @see {@link BatchWriteRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>A resource that is required to perform an action was not found.</p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>There was an error validating your request.</p>
 *
 * @throws {@link SageMakerFeatureStoreRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerFeatureStoreRuntime service.</p>
 *
 *
 * @example Write records to multiple feature groups
 * ```javascript
 * //
 * const input = {
 *   Entries: [
 *     {
 *       FeatureGroupName: "my-feature-group",
 *       Record: [
 *         {
 *           FeatureName: "customer_id",
 *           ValueAsString: "cust-001"
 *         },
 *         {
 *           FeatureName: "age",
 *           ValueAsString: "25"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new BatchWriteRecordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Errors:   [],
 *   UnprocessedEntries:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchWriteRecordCommand extends $Command
  .classBuilder<
    BatchWriteRecordCommandInput,
    BatchWriteRecordCommandOutput,
    SageMakerFeatureStoreRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerFeatureStoreRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSageMakerFeatureStoreRuntime", "BatchWriteRecord", {})
  .n("SageMakerFeatureStoreRuntimeClient", "BatchWriteRecordCommand")
  .sc(BatchWriteRecord$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchWriteRecordRequest;
      output: BatchWriteRecordResponse;
    };
    sdk: {
      input: BatchWriteRecordCommandInput;
      output: BatchWriteRecordCommandOutput;
    };
  };
}
