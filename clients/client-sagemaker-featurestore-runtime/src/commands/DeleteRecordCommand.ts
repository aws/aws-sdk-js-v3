// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecordRequest } from "../models/models_0";
import { DeleteRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecordCommand}.
 */
export interface DeleteRecordCommandInput extends DeleteRecordRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecordCommand}.
 */
export interface DeleteRecordCommandOutput extends __MetadataBearer {}

/**
 * Deletes a `Record` from a `FeatureGroup` in the `OnlineStore`. Feature Store supports both `SoftDelete` and `HardDelete`. For `SoftDelete` (default), feature columns are set to `null` and the record is no longer retrievable by `GetRecord` or `BatchGetRecord`. For `HardDelete`, the complete `Record` is removed from the `OnlineStore`. In both cases, Feature Store appends the deleted record marker to the `OfflineStore`. The deleted record marker is a record with the same `RecordIdentifer` as the original, but with `is_deleted` value set to `True`, `EventTime` set to the delete input `EventTime`, and other feature values set to `null`.
 *
 * Note that the `EventTime` specified in `DeleteRecord` should be set later than the `EventTime` of the existing record in the `OnlineStore` for that `RecordIdentifer`. If it is not, the deletion does not occur:
 *
 * - For `SoftDelete`, the existing (not deleted) record remains in the `OnlineStore`, though the delete record marker is still written to the `OfflineStore`.
 * - `HardDelete` returns `EventTime`: `400 ValidationException` to indicate that the delete operation failed. No delete record marker is written to the `OfflineStore`.
 *
 * When a record is deleted from the `OnlineStore`, the deleted record marker is appended to the `OfflineStore`. If you have the Iceberg table format enabled for your `OfflineStore`, you can remove all history of a record from the `OfflineStore` using Amazon Athena or Apache Spark. For information on how to hard delete a record from the `OfflineStore` with the Iceberg table format enabled, see [Delete records from the offline store](https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-delete-records.html#feature-store-delete-records-offline-store).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // DeleteRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierValueAsString: "STRING_VALUE", // required
 *   EventTime: "STRING_VALUE", // required
 *   TargetStores: [ // TargetStores
 *     "OnlineStore" || "OfflineStore",
 *   ],
 *   DeletionMode: "SoftDelete" || "HardDelete",
 * };
 * const command = new DeleteRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecordCommandInput - {@link DeleteRecordCommandInput}
 * @returns {@link DeleteRecordCommandOutput}
 * @see {@link DeleteRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteRecordCommand extends command<DeleteRecordCommandInput, DeleteRecordCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecord",
  DeleteRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecordRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecordCommandInput;
      output: DeleteRecordCommandOutput;
    };
  };
}
