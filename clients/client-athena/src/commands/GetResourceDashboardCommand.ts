// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourceDashboardRequest, GetResourceDashboardResponse } from "../models/models_0";
import { GetResourceDashboard } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceDashboardCommand}.
 */
export interface GetResourceDashboardCommandInput extends GetResourceDashboardRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceDashboardCommand}.
 */
export interface GetResourceDashboardCommandOutput extends GetResourceDashboardResponse, __MetadataBearer {}

/**
 * <p>Gets the Live UI/Persistence UI for a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetResourceDashboardCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetResourceDashboardCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetResourceDashboardRequest
 *   ResourceARN: "STRING_VALUE", // required
 * };
 * const command = new GetResourceDashboardCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceDashboardResponse
 * //   Url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetResourceDashboardCommandInput - {@link GetResourceDashboardCommandInput}
 * @returns {@link GetResourceDashboardCommandOutput}
 * @see {@link GetResourceDashboardCommandInput} for command's `input` shape.
 * @see {@link GetResourceDashboardCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetResourceDashboardCommand extends $Command
  .classBuilder<
    GetResourceDashboardCommandInput,
    GetResourceDashboardCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetResourceDashboard", {})
  .n("AthenaClient", "GetResourceDashboardCommand")
  .sc(GetResourceDashboard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceDashboardRequest;
      output: GetResourceDashboardResponse;
    };
    sdk: {
      input: GetResourceDashboardCommandInput;
      output: GetResourceDashboardCommandOutput;
    };
  };
}
