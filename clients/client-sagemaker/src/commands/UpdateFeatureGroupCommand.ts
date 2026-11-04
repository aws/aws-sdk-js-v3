// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFeatureGroupRequest, UpdateFeatureGroupResponse } from "../models/models_5";
import { UpdateFeatureGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFeatureGroupCommand}.
 */
export interface UpdateFeatureGroupCommandInput extends UpdateFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFeatureGroupCommand}.
 */
export interface UpdateFeatureGroupCommandOutput extends UpdateFeatureGroupResponse, __MetadataBearer {}

/**
 * Updates the feature group by either adding features or updating the online store configuration. Use one of the following request parameters at a time while using the `UpdateFeatureGroup` API.
 *
 * You can add features for your feature group using the `FeatureAdditions` request parameter. Features cannot be removed from a feature group.
 *
 * You can update the online store configuration by using the `OnlineStoreConfig` request parameter. If a `TtlDuration` is specified, the default `TtlDuration` applies for all records added to the feature group *after the feature group is updated*. If a record level `TtlDuration` exists from using the `PutRecord` API, the record level `TtlDuration` applies to that record instead of the default `TtlDuration`. To remove the default `TtlDuration` from an existing feature group, use the `UpdateFeatureGroup` API and set the `TtlDuration` `Unit` and `Value` to `null`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   FeatureAdditions: [ // FeatureAdditions
 *     { // FeatureDefinition
 *       FeatureName: "STRING_VALUE", // required
 *       FeatureType: "Integral" || "Fractional" || "String", // required
 *       CollectionType: "List" || "Set" || "Vector",
 *       CollectionConfig: { // CollectionConfig Union: only one key present
 *         VectorConfig: { // VectorConfig
 *           Dimension: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 *   OnlineStoreConfig: { // OnlineStoreConfigUpdate
 *     TtlDuration: { // TtlDuration
 *       Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks",
 *       Value: Number("int"),
 *     },
 *     StorageType: "Standard" || "Standard_V2" || "InMemory",
 *   },
 *   ThroughputConfig: { // ThroughputConfigUpdate
 *     ThroughputMode: "OnDemand" || "Provisioned",
 *     ProvisionedReadCapacityUnits: Number("int"),
 *     ProvisionedWriteCapacityUnits: Number("int"),
 *   },
 * };
 * const command = new UpdateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFeatureGroupResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFeatureGroupCommandInput - {@link UpdateFeatureGroupCommandInput}
 * @returns {@link UpdateFeatureGroupCommandOutput}
 * @see {@link UpdateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateFeatureGroupCommand extends command<UpdateFeatureGroupCommandInput, UpdateFeatureGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFeatureGroup",
  UpdateFeatureGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFeatureGroupRequest;
      output: UpdateFeatureGroupResponse;
    };
    sdk: {
      input: UpdateFeatureGroupCommandInput;
      output: UpdateFeatureGroupCommandOutput;
    };
  };
}
