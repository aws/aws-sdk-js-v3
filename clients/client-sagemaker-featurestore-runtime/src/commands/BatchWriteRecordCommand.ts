// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchWriteRecordRequest, BatchWriteRecordResponse } from "../models/models_0";
import { BatchWriteRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Writes a batch of `Records` to one or more `FeatureGroup`s. Use this API for bulk ingestion of records into the `OnlineStore` and `OfflineStore`.
 *
 * You can set the ingested records to expire at a given time to live (TTL) duration after the record's event time by specifying the `TtlDuration` parameter. A request level `TtlDuration` applies to all entries that do not specify their own `TtlDuration`.
 *
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
 *
 * You do not have permission to perform an action.
 *
 * @throws {@link InternalFailure} (server fault)
 *
 * An internal failure occurred. Try your request again. If the problem persists, contact Amazon Web Services customer support.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * A resource that is required to perform an action was not found.
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ValidationError} (client fault)
 *
 * There was an error validating your request.
 *
 * @throws {@link SageMakerFeatureStoreRuntimeServiceException}
 *
 * Base exception class for all service exceptions from SageMakerFeatureStoreRuntime service.
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
export class BatchWriteRecordCommand extends command<BatchWriteRecordCommandInput, BatchWriteRecordCommandOutput>(
  _ep0,
  _mw0,
  "BatchWriteRecord",
  BatchWriteRecord$
) {
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
