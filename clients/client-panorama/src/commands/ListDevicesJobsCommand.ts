// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDevicesJobsRequest, ListDevicesJobsResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListDevicesJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesJobsCommand}.
 */
export interface ListDevicesJobsCommandInput extends ListDevicesJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesJobsCommand}.
 */
export interface ListDevicesJobsCommandOutput extends ListDevicesJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListDevicesJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListDevicesJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListDevicesJobsRequest
 *   DeviceId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDevicesJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesJobsResponse
 * //   DeviceJobs: [ // DeviceJobList
 * //     { // DeviceJob
 * //       DeviceName: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       JobType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicesJobsCommandInput - {@link ListDevicesJobsCommandInput}
 * @returns {@link ListDevicesJobsCommandOutput}
 * @see {@link ListDevicesJobsCommandInput} for command's `input` shape.
 * @see {@link ListDevicesJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
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
export class ListDevicesJobsCommand extends $Command
  .classBuilder<
    ListDevicesJobsCommandInput,
    ListDevicesJobsCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListDevicesJobs", {})
  .n("PanoramaClient", "ListDevicesJobsCommand")
  .sc(ListDevicesJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicesJobsRequest;
      output: ListDevicesJobsResponse;
    };
    sdk: {
      input: ListDevicesJobsCommandInput;
      output: ListDevicesJobsCommandOutput;
    };
  };
}
