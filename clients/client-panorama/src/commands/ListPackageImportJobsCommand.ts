// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPackageImportJobsRequest, ListPackageImportJobsResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListPackageImportJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackageImportJobsCommand}.
 */
export interface ListPackageImportJobsCommandInput extends ListPackageImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageImportJobsCommand}.
 */
export interface ListPackageImportJobsCommandOutput extends ListPackageImportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of package import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListPackageImportJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListPackageImportJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListPackageImportJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPackageImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackageImportJobsResponse
 * //   PackageImportJobs: [ // PackageImportJobList // required
 * //     { // PackageImportJob
 * //       JobId: "STRING_VALUE",
 * //       JobType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackageImportJobsCommandInput - {@link ListPackageImportJobsCommandInput}
 * @returns {@link ListPackageImportJobsCommandOutput}
 * @see {@link ListPackageImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPackageImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListPackageImportJobsCommand extends $Command
  .classBuilder<
    ListPackageImportJobsCommandInput,
    ListPackageImportJobsCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListPackageImportJobs", {})
  .n("PanoramaClient", "ListPackageImportJobsCommand")
  .sc(ListPackageImportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackageImportJobsRequest;
      output: ListPackageImportJobsResponse;
    };
    sdk: {
      input: ListPackageImportJobsCommandInput;
      output: ListPackageImportJobsCommandOutput;
    };
  };
}
