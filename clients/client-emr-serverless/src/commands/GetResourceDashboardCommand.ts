// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourceDashboardRequest, GetResourceDashboardResponse } from "../models/models_0";
import { GetResourceDashboard$ } from "../schemas/schemas_0";

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
 * <p>Returns a URL that you can use to access the application UIs for a specified resource, such as a session.</p> <p>For resources in a running state, the application UI is a live user interface such as the Spark web UI. For terminated resources, the application UI is a persistent application user interface such as the Spark History Server.</p> <note> <p>The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetResourceDashboardCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetResourceDashboardCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // GetResourceDashboardRequest
 *   applicationId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new GetResourceDashboardCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceDashboardResponse
 * //   url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceDashboardCommandInput - {@link GetResourceDashboardCommandInput}
 * @returns {@link GetResourceDashboardCommandOutput}
 * @see {@link GetResourceDashboardCommandInput} for command's `input` shape.
 * @see {@link GetResourceDashboardCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class GetResourceDashboardCommand extends $Command
  .classBuilder<
    GetResourceDashboardCommandInput,
    GetResourceDashboardCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "GetResourceDashboard", {})
  .n("EMRServerlessClient", "GetResourceDashboardCommand")
  .sc(GetResourceDashboard$)
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
