// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import { GetRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecordCommand}.
 */
export interface GetRecordCommandInput extends GetRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetRecordCommand}.
 */
export interface GetRecordCommandOutput extends GetRecordResponse, __MetadataBearer {}

/**
 * Use for `OnlineStore` serving from a `FeatureStore`. Only the latest records stored in the `OnlineStore` can be retrieved. If no Record with `RecordIdentifierValue` is found, then an empty result is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // GetRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierValueAsString: "STRING_VALUE", // required
 *   FeatureNames: [ // FeatureNames
 *     "STRING_VALUE",
 *   ],
 *   ExpirationTimeResponse: "Enabled" || "Disabled",
 * };
 * const command = new GetRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordResponse
 * //   Record: [ // Record
 * //     { // FeatureValue
 * //       FeatureName: "STRING_VALUE", // required
 * //       ValueAsString: "STRING_VALUE",
 * //       ValueAsStringList: [ // ValueAsStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ExpiresAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecordCommandInput - {@link GetRecordCommandInput}
 * @returns {@link GetRecordCommandOutput}
 * @see {@link GetRecordCommandInput} for command's `input` shape.
 * @see {@link GetRecordCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRecordCommand extends command<GetRecordCommandInput, GetRecordCommandOutput>(
  _ep0,
  _mw0,
  "GetRecord",
  GetRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecordRequest;
      output: GetRecordResponse;
    };
    sdk: {
      input: GetRecordCommandInput;
      output: GetRecordCommandOutput;
    };
  };
}
