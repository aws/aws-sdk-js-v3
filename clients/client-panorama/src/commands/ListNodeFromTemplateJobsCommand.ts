// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListNodeFromTemplateJobsRequest, ListNodeFromTemplateJobsResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListNodeFromTemplateJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodeFromTemplateJobsCommand}.
 */
export interface ListNodeFromTemplateJobsCommandInput extends ListNodeFromTemplateJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListNodeFromTemplateJobsCommand}.
 */
export interface ListNodeFromTemplateJobsCommandOutput extends ListNodeFromTemplateJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of camera stream node jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListNodeFromTemplateJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListNodeFromTemplateJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListNodeFromTemplateJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNodeFromTemplateJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListNodeFromTemplateJobsResponse
 * //   NodeFromTemplateJobs: [ // NodeFromTemplateJobList // required
 * //     { // NodeFromTemplateJob
 * //       JobId: "STRING_VALUE",
 * //       TemplateType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       NodeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodeFromTemplateJobsCommandInput - {@link ListNodeFromTemplateJobsCommandInput}
 * @returns {@link ListNodeFromTemplateJobsCommandOutput}
 * @see {@link ListNodeFromTemplateJobsCommandInput} for command's `input` shape.
 * @see {@link ListNodeFromTemplateJobsCommandOutput} for command's `response` shape.
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
export class ListNodeFromTemplateJobsCommand extends $Command
  .classBuilder<
    ListNodeFromTemplateJobsCommandInput,
    ListNodeFromTemplateJobsCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListNodeFromTemplateJobs", {})
  .n("PanoramaClient", "ListNodeFromTemplateJobsCommand")
  .sc(ListNodeFromTemplateJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodeFromTemplateJobsRequest;
      output: ListNodeFromTemplateJobsResponse;
    };
    sdk: {
      input: ListNodeFromTemplateJobsCommandInput;
      output: ListNodeFromTemplateJobsCommandOutput;
    };
  };
}
