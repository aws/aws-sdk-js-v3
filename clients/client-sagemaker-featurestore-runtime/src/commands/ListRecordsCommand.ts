// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecordsRequest, ListRecordsResponse } from "../models/models_0";
import type {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";
import { ListRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandInput extends ListRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandOutput extends ListRecordsResponse, __MetadataBearer {}

/**
 * <p>Lists the <code>RecordIdentifier</code> values of all records stored in a
 *             <code>FeatureGroup</code>'s <code>OnlineStore</code>. This enables you to discover which
 *          records exist without retrieving the full record data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, ListRecordsCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, ListRecordsCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * // import type { SageMakerFeatureStoreRuntimeClientConfig } from "@aws-sdk/client-sagemaker-featurestore-runtime";
 * const config = {}; // type is SageMakerFeatureStoreRuntimeClientConfig
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // ListRecordsRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeSoftDeletedRecords: true || false,
 * };
 * const command = new ListRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordsResponse
 * //   RecordIdentifiers: [ // RecordIdentifierList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecordsCommandInput - {@link ListRecordsCommandInput}
 * @returns {@link ListRecordsCommandOutput}
 * @see {@link ListRecordsCommandInput} for command's `input` shape.
 * @see {@link ListRecordsCommandOutput} for command's `response` shape.
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
 * @example List record identifiers from a feature group
 * ```javascript
 * //
 * const input = {
 *   FeatureGroupName: "my-feature-group",
 *   MaxResults: 10
 * };
 * const command = new ListRecordsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "eyJsYXN0RXZhbHVhdGVkS2V5IjoiYWJjMTIzIn0=",
 *   RecordIdentifiers: [
 *     "record-id-1",
 *     "record-id-2"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRecordsCommand extends $Command
  .classBuilder<
    ListRecordsCommandInput,
    ListRecordsCommandOutput,
    SageMakerFeatureStoreRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerFeatureStoreRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSageMakerFeatureStoreRuntime", "ListRecords", {})
  .n("SageMakerFeatureStoreRuntimeClient", "ListRecordsCommand")
  .sc(ListRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecordsRequest;
      output: ListRecordsResponse;
    };
    sdk: {
      input: ListRecordsCommandInput;
      output: ListRecordsCommandOutput;
    };
  };
}
