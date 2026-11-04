// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDirectQueryDataSourceRequest, GetDirectQueryDataSourceResponse } from "../models/models_0";
import { GetDirectQueryDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDirectQueryDataSourceCommand}.
 */
export interface GetDirectQueryDataSourceCommandInput extends GetDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectQueryDataSourceCommand}.
 */
export interface GetDirectQueryDataSourceCommandOutput extends GetDirectQueryDataSourceResponse, __MetadataBearer {}

/**
 * Returns detailed configuration information for a specific direct query data source in Amazon OpenSearch Service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetDirectQueryDataSourceRequest
 *   DataSourceName: "STRING_VALUE", // required
 * };
 * const command = new GetDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectQueryDataSourceResponse
 * //   DataSourceName: "STRING_VALUE",
 * //   DataSourceType: { // DirectQueryDataSourceType Union: only one key present
 * //     CloudWatchLog: { // CloudWatchDirectQueryDataSource
 * //       RoleArn: "STRING_VALUE", // required
 * //     },
 * //     SecurityLake: { // SecurityLakeDirectQueryDataSource
 * //       RoleArn: "STRING_VALUE", // required
 * //     },
 * //     Prometheus: { // PrometheusDirectQueryDataSource
 * //       RoleArn: "STRING_VALUE", // required
 * //       WorkspaceArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Description: "STRING_VALUE",
 * //   OpenSearchArns: [ // DirectQueryOpenSearchARNList
 * //     "STRING_VALUE",
 * //   ],
 * //   DataSourceAccessPolicy: "STRING_VALUE",
 * //   DataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDirectQueryDataSourceCommandInput - {@link GetDirectQueryDataSourceCommandInput}
 * @returns {@link GetDirectQueryDataSourceCommandOutput}
 * @see {@link GetDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDirectQueryDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class GetDirectQueryDataSourceCommand extends command<GetDirectQueryDataSourceCommandInput, GetDirectQueryDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "GetDirectQueryDataSource",
  GetDirectQueryDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDirectQueryDataSourceRequest;
      output: GetDirectQueryDataSourceResponse;
    };
    sdk: {
      input: GetDirectQueryDataSourceCommandInput;
      output: GetDirectQueryDataSourceCommandOutput;
    };
  };
}
