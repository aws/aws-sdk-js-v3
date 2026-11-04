// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetRecordRequest, BatchGetRecordResponse } from "../models/models_0";
import { BatchGetRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetRecordCommand}.
 */
export interface BatchGetRecordCommandInput extends BatchGetRecordRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRecordCommand}.
 */
export interface BatchGetRecordCommandOutput extends BatchGetRecordResponse, __MetadataBearer {}

/**
 * Retrieves a batch of `Records` from a `FeatureGroup`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // BatchGetRecordRequest
 *   Identifiers: [ // BatchGetRecordIdentifiers // required
 *     { // BatchGetRecordIdentifier
 *       FeatureGroupName: "STRING_VALUE", // required
 *       RecordIdentifiersValueAsString: [ // RecordIdentifiers // required
 *         "STRING_VALUE",
 *       ],
 *       FeatureNames: [ // FeatureNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExpirationTimeResponse: "Enabled" || "Disabled",
 * };
 * const command = new BatchGetRecordCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRecordResponse
 * //   Records: [ // BatchGetRecordResultDetails // required
 * //     { // BatchGetRecordResultDetail
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifierValueAsString: "STRING_VALUE", // required
 * //       Record: [ // Record // required
 * //         { // FeatureValue
 * //           FeatureName: "STRING_VALUE", // required
 * //           ValueAsString: "STRING_VALUE",
 * //           ValueAsStringList: [ // ValueAsStringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ExpiresAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetRecordErrors // required
 * //     { // BatchGetRecordError
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifierValueAsString: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UnprocessedIdentifiers: [ // UnprocessedIdentifiers // required
 * //     { // BatchGetRecordIdentifier
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifiersValueAsString: [ // RecordIdentifiers // required
 * //         "STRING_VALUE",
 * //       ],
 * //       FeatureNames: [ // FeatureNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRecordCommandInput - {@link BatchGetRecordCommandInput}
 * @returns {@link BatchGetRecordCommandOutput}
 * @see {@link BatchGetRecordCommandInput} for command's `input` shape.
 * @see {@link BatchGetRecordCommandOutput} for command's `response` shape.
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
export class BatchGetRecordCommand extends command<BatchGetRecordCommandInput, BatchGetRecordCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetRecord",
  BatchGetRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRecordRequest;
      output: BatchGetRecordResponse;
    };
    sdk: {
      input: BatchGetRecordCommandInput;
      output: BatchGetRecordCommandOutput;
    };
  };
}
