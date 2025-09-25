// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPackageVersionHistoryRequest, GetPackageVersionHistoryResponse } from "../models/models_0";
import { GetPackageVersionHistory } from "../schemas/schemas_5_Package";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageVersionHistoryCommand}.
 */
export interface GetPackageVersionHistoryCommandInput extends GetPackageVersionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionHistoryCommand}.
 */
export interface GetPackageVersionHistoryCommandOutput extends GetPackageVersionHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetPackageVersionHistoryCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetPackageVersionHistoryCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // GetPackageVersionHistoryRequest
 *   PackageID: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetPackageVersionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionHistoryResponse
 * //   PackageID: "STRING_VALUE",
 * //   PackageVersionHistoryList: [ // PackageVersionHistoryList
 * //     { // PackageVersionHistory
 * //       PackageVersion: "STRING_VALUE",
 * //       CommitMessage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionHistoryCommandInput - {@link GetPackageVersionHistoryCommandInput}
 * @returns {@link GetPackageVersionHistoryCommandOutput}
 * @see {@link GetPackageVersionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class GetPackageVersionHistoryCommand extends $Command
  .classBuilder<
    GetPackageVersionHistoryCommandInput,
    GetPackageVersionHistoryCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "GetPackageVersionHistory", {})
  .n("ElasticsearchServiceClient", "GetPackageVersionHistoryCommand")
  .sc(GetPackageVersionHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionHistoryRequest;
      output: GetPackageVersionHistoryResponse;
    };
    sdk: {
      input: GetPackageVersionHistoryCommandInput;
      output: GetPackageVersionHistoryCommandOutput;
    };
  };
}
