// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePackageRequest, UpdatePackageResponse } from "../models/models_0";
import { de_UpdatePackageCommand, se_UpdatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandInput extends UpdatePackageRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandOutput extends UpdatePackageResponse, __MetadataBearer {}

/**
 * <p>Updates a package for use with Amazon ES domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // UpdatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   PackageSource: { // PackageSource
 *     S3BucketName: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   PackageDescription: "STRING_VALUE",
 *   CommitMessage: "STRING_VALUE",
 * };
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackageResponse
 * //   PackageDetails: { // PackageDetails
 * //     PackageID: "STRING_VALUE",
 * //     PackageName: "STRING_VALUE",
 * //     PackageType: "TXT-DICTIONARY",
 * //     PackageDescription: "STRING_VALUE",
 * //     PackageStatus: "COPYING" || "COPY_FAILED" || "VALIDATING" || "VALIDATION_FAILED" || "AVAILABLE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     AvailablePackageVersion: "STRING_VALUE",
 * //     ErrorDetails: { // ErrorDetails
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePackageCommandInput - {@link UpdatePackageCommandInput}
 * @returns {@link UpdatePackageCommandOutput}
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
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
 * @public
 */
export class UpdatePackageCommand extends $Command
  .classBuilder<
    UpdatePackageCommandInput,
    UpdatePackageCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "UpdatePackage", {})
  .n("ElasticsearchServiceClient", "UpdatePackageCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageCommand)
  .de(de_UpdatePackageCommand)
  .build() {}
