// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRecordRequest } from "../models/models_0";
import { UpdateRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRecordCommand}.
 */
export interface UpdateRecordCommandInput extends UpdateRecordRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecordCommand}.
 */
export interface UpdateRecordCommandOutput extends __MetadataBearer {}

/**
 * Updates one or more feature values for an existing record in the specified feature group. Features that you do not include in the request remain unchanged. You can update up to 100 features per call.
 *
 * > **Important:** This operation is available only for feature groups that use the `Standard_V2` or `InMemory` online store type.
 *
 * The record must already exist. If the record does not exist or has been soft-deleted, the operation returns a `ResourceNotFound` error. To create a record, use `PutRecord`.
 *
 * If you provide an `EventTime` that is older than the record's current `EventTime`, the service rejects the update with a `ConflictException`. If the `EventTime` is equal to or newer than the current value, the service applies the update. If you omit `EventTime`, the service keeps the record's existing `EventTime` and applies the update.
 *
 * If you specify a `TtlDuration`, you must also provide an `EventTime` in the request. Otherwise, the operation returns a `ValidationError`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, UpdateRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, UpdateRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // UpdateRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierValueAsString: "STRING_VALUE", // required
 *   Features: [ // Record // required
 *     { // FeatureValue
 *       FeatureName: "STRING_VALUE", // required
 *       ValueAsString: "STRING_VALUE",
 *       ValueAsStringList: [ // ValueAsStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TargetStores: [ // TargetStores
 *     "OnlineStore" || "OfflineStore",
 *   ],
 *   TtlDuration: { // TtlDuration
 *     Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 *     Value: Number("int"), // required
 *   },
 * };
 * const command = new UpdateRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRecordCommandInput - {@link UpdateRecordCommandInput}
 * @returns {@link UpdateRecordCommandOutput}
 * @see {@link UpdateRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *
 * You do not have permission to perform an action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The service rejected the update because the provided `EventTime` is older than the record's current `EventTime`. To persist the update, retrieve the record's latest `EventTime` and resubmit the request with an `EventTime` that is equal to or newer than the current value.
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
 * @example Update specific features in a record
 * ```javascript
 * //
 * const input = {
 *   FeatureGroupName: "my-feature-group",
 *   Features: [
 *     {
 *       FeatureName: "age",
 *       ValueAsString: "26"
 *     },
 *     {
 *       FeatureName: "membership_tier",
 *       ValueAsString: "gold"
 *     },
 *     {
 *       FeatureName: "event_time",
 *       ValueAsString: "2026-07-26T12:00:00Z"
 *     }
 *   ],
 *   RecordIdentifierValueAsString: "cust-001"
 * };
 * const command = new UpdateRecordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update features and set a time-to-live (TTL) duration
 * ```javascript
 * //
 * const input = {
 *   FeatureGroupName: "my-feature-group",
 *   Features: [
 *     {
 *       FeatureName: "age",
 *       ValueAsString: "26"
 *     },
 *     {
 *       FeatureName: "event_time",
 *       ValueAsString: "2026-07-26T12:00:00Z"
 *     }
 *   ],
 *   RecordIdentifierValueAsString: "cust-001",
 *   TtlDuration: {
 *     Unit: "Weeks",
 *     Value: 4
 *   }
 * };
 * const command = new UpdateRecordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRecordCommand extends command<UpdateRecordCommandInput, UpdateRecordCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRecord",
  UpdateRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecordRequest;
      output: {};
    };
    sdk: {
      input: UpdateRecordCommandInput;
      output: UpdateRecordCommandOutput;
    };
  };
}
