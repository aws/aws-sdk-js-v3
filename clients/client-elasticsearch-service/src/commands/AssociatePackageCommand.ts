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
import type { AssociatePackageRequest, AssociatePackageResponse } from "../models/models_0";
import { AssociatePackage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePackageCommand}.
 */
export interface AssociatePackageCommandInput extends AssociatePackageRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePackageCommand}.
 */
export interface AssociatePackageCommandOutput extends AssociatePackageResponse, __MetadataBearer {}

/**
 * <p>Associates a package with an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AssociatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AssociatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // AssociatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new AssociatePackageCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePackageResponse
 * //   DomainPackageDetails: { // DomainPackageDetails
 * //     PackageID: "STRING_VALUE",
 * //     PackageName: "STRING_VALUE",
 * //     PackageType: "TXT-DICTIONARY",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     DomainName: "STRING_VALUE",
 * //     DomainPackageStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ACTIVE" || "DISSOCIATING" || "DISSOCIATION_FAILED",
 * //     PackageVersion: "STRING_VALUE",
 * //     ReferencePath: "STRING_VALUE",
 * //     ErrorDetails: { // ErrorDetails
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociatePackageCommandInput - {@link AssociatePackageCommandInput}
 * @returns {@link AssociatePackageCommandOutput}
 * @see {@link AssociatePackageCommandInput} for command's `input` shape.
 * @see {@link AssociatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
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
export class AssociatePackageCommand extends $Command
  .classBuilder<
    AssociatePackageCommandInput,
    AssociatePackageCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "AssociatePackage", {})
  .n("ElasticsearchServiceClient", "AssociatePackageCommand")
  .sc(AssociatePackage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePackageRequest;
      output: AssociatePackageResponse;
    };
    sdk: {
      input: AssociatePackageCommandInput;
      output: AssociatePackageCommandOutput;
    };
  };
}
