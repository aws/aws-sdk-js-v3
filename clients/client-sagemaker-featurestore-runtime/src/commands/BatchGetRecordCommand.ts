// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetRecordRequest, BatchGetRecordResponse } from "../models/models_0";
import { de_BatchGetRecordCommand, se_BatchGetRecordCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
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
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
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
 * @public
 */
export class BatchGetRecordCommand extends $Command
  .classBuilder<
    BatchGetRecordCommandInput,
    BatchGetRecordCommandOutput,
    SageMakerFeatureStoreRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerFeatureStoreRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerFeatureStoreRuntime", "BatchGetRecord", {})
  .n("SageMakerFeatureStoreRuntimeClient", "BatchGetRecordCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetRecordCommand)
  .de(de_BatchGetRecordCommand)
  .build() {}
