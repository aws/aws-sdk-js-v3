// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataSourceRequest, GetDataSourceResponse } from "../models/models_0";
import { GetDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceResponse, __MetadataBearer {}

/**
 * Retrieves information about a direct query data source.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetDataSourceRequest
 *   DomainName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceResponse
 * //   DataSourceType: { // DataSourceType Union: only one key present
 * //     S3GlueDataCatalog: { // S3GlueDataCatalog
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "ACTIVE" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DependencyFailureException} (client fault)
 *
 * An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.
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
export class GetDataSourceCommand extends command<GetDataSourceCommandInput, GetDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "GetDataSource",
  GetDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceRequest;
      output: GetDataSourceResponse;
    };
    sdk: {
      input: GetDataSourceCommandInput;
      output: GetDataSourceCommandOutput;
    };
  };
}
