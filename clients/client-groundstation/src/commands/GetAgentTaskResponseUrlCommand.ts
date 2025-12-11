// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { GetAgentTaskResponseUrlRequest, GetAgentTaskResponseUrlResponse } from "../models/models_0";
import { GetAgentTaskResponseUrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentTaskResponseUrlCommand}.
 */
export interface GetAgentTaskResponseUrlCommandInput extends GetAgentTaskResponseUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentTaskResponseUrlCommand}.
 */
export interface GetAgentTaskResponseUrlCommandOutput extends GetAgentTaskResponseUrlResponse, __MetadataBearer {}

/**
 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets a presigned URL for uploading agent task response logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetAgentTaskResponseUrlCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetAgentTaskResponseUrlCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetAgentTaskResponseUrlRequest
 *   agentId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentTaskResponseUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentTaskResponseUrlResponse
 * //   agentId: "STRING_VALUE", // required
 * //   taskId: "STRING_VALUE", // required
 * //   presignedLogUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetAgentTaskResponseUrlCommandInput - {@link GetAgentTaskResponseUrlCommandInput}
 * @returns {@link GetAgentTaskResponseUrlCommandOutput}
 * @see {@link GetAgentTaskResponseUrlCommandInput} for command's `input` shape.
 * @see {@link GetAgentTaskResponseUrlCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class GetAgentTaskResponseUrlCommand extends $Command
  .classBuilder<
    GetAgentTaskResponseUrlCommandInput,
    GetAgentTaskResponseUrlCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "GetAgentTaskResponseUrl", {})
  .n("GroundStationClient", "GetAgentTaskResponseUrlCommand")
  .sc(GetAgentTaskResponseUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentTaskResponseUrlRequest;
      output: GetAgentTaskResponseUrlResponse;
    };
    sdk: {
      input: GetAgentTaskResponseUrlCommandInput;
      output: GetAgentTaskResponseUrlCommandOutput;
    };
  };
}
