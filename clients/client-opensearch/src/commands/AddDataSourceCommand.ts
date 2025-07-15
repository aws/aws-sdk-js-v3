// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddDataSourceRequest, AddDataSourceResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AddDataSourceCommand, se_AddDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddDataSourceCommand}.
 */
export interface AddDataSourceCommandInput extends AddDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link AddDataSourceCommand}.
 */
export interface AddDataSourceCommandOutput extends AddDataSourceResponse, __MetadataBearer {}

/**
 * <p>Creates a new direct-query data source to the specified domain. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-creating.html">Creating Amazon
 *     OpenSearch Service data source integrations with Amazon S3</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AddDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AddDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AddDataSourceRequest
 *   DomainName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   DataSourceType: { // DataSourceType Union: only one key present
 *     S3GlueDataCatalog: { // S3GlueDataCatalog
 *       RoleArn: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new AddDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // AddDataSourceResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddDataSourceCommandInput - {@link AddDataSourceCommandInput}
 * @returns {@link AddDataSourceCommandOutput}
 * @see {@link AddDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DependencyFailureException} (client fault)
 *  <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class AddDataSourceCommand extends $Command
  .classBuilder<
    AddDataSourceCommandInput,
    AddDataSourceCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "AddDataSource", {})
  .n("OpenSearchClient", "AddDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_AddDataSourceCommand)
  .de(de_AddDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddDataSourceRequest;
      output: AddDataSourceResponse;
    };
    sdk: {
      input: AddDataSourceCommandInput;
      output: AddDataSourceCommandOutput;
    };
  };
}
