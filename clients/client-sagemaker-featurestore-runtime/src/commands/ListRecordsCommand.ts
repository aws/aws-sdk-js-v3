// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecordsRequest, ListRecordsResponse } from "../models/models_0";
import { ListRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the `RecordIdentifier` values of all records stored in a `FeatureGroup`'s `OnlineStore`. This enables you to discover which records exist without retrieving the full record data.
 *
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
export class ListRecordsCommand extends command<ListRecordsCommandInput, ListRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecords",
  ListRecords$
) {
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
