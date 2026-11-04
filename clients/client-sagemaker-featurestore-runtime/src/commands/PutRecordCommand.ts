// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRecordRequest } from "../models/models_0";
import { PutRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRecordCommand}.
 */
export interface PutRecordCommandInput extends PutRecordRequest {}
/**
 * @public
 *
 * The output of {@link PutRecordCommand}.
 */
export interface PutRecordCommandOutput extends __MetadataBearer {}

/**
 * The `PutRecord` API is used to ingest a list of `Records` into your feature group.
 *
 * If a new record’s `EventTime` is greater, the new record is written to both the `OnlineStore` and `OfflineStore`. Otherwise, the record is a historic record and it is written only to the `OfflineStore`.
 *
 * You can specify the ingestion to be applied to the `OnlineStore`, `OfflineStore`, or both by using the `TargetStores` request parameter.
 *
 * You can set the ingested record to expire at a given time to live (TTL) duration after the record’s event time, `ExpiresAt` = `EventTime` + `TtlDuration`, by specifying the `TtlDuration` parameter. A record level `TtlDuration` is set when specifying the `TtlDuration` parameter using the `PutRecord` API call. If the input `TtlDuration` is `null` or unspecified, `TtlDuration` is set to the default feature group level `TtlDuration`. A record level `TtlDuration` supersedes the group level `TtlDuration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // PutRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   Record: [ // Record // required
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
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRecordCommandInput - {@link PutRecordCommandInput}
 * @returns {@link PutRecordCommandOutput}
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
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
export class PutRecordCommand extends command<PutRecordCommandInput, PutRecordCommandOutput>(
  _ep0,
  _mw0,
  "PutRecord",
  PutRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecordRequest;
      output: {};
    };
    sdk: {
      input: PutRecordCommandInput;
      output: PutRecordCommandOutput;
    };
  };
}
