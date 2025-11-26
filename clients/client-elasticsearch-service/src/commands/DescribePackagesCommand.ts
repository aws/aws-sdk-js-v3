// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePackagesRequest, DescribePackagesResponse } from "../models/models_0";
import { DescribePackages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackagesCommand}.
 */
export interface DescribePackagesCommandInput extends DescribePackagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackagesCommand}.
 */
export interface DescribePackagesCommandOutput extends DescribePackagesResponse, __MetadataBearer {}

/**
 * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribePackagesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribePackagesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribePackagesRequest
 *   Filters: [ // DescribePackagesFilterList
 *     { // DescribePackagesFilter
 *       Name: "PackageID" || "PackageName" || "PackageStatus",
 *       Value: [ // DescribePackagesFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePackagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackagesResponse
 * //   PackageDetailsList: [ // PackageDetailsList
 * //     { // PackageDetails
 * //       PackageID: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       PackageType: "TXT-DICTIONARY",
 * //       PackageDescription: "STRING_VALUE",
 * //       PackageStatus: "COPYING" || "COPY_FAILED" || "VALIDATING" || "VALIDATION_FAILED" || "AVAILABLE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       AvailablePackageVersion: "STRING_VALUE",
 * //       ErrorDetails: { // ErrorDetails
 * //         ErrorType: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePackagesCommandInput - {@link DescribePackagesCommandInput}
 * @returns {@link DescribePackagesCommandOutput}
 * @see {@link DescribePackagesCommandInput} for command's `input` shape.
 * @see {@link DescribePackagesCommandOutput} for command's `response` shape.
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
export class DescribePackagesCommand extends $Command
  .classBuilder<
    DescribePackagesCommandInput,
    DescribePackagesCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "DescribePackages", {})
  .n("ElasticsearchServiceClient", "DescribePackagesCommand")
  .sc(DescribePackages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePackagesRequest;
      output: DescribePackagesResponse;
    };
    sdk: {
      input: DescribePackagesCommandInput;
      output: DescribePackagesCommandOutput;
    };
  };
}
