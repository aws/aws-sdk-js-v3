// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetDashboardUrlRequest, GetDashboardUrlResponse } from "../models/models_1";
import { GetDashboardUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDashboardUrlCommand}.
 */
export interface GetDashboardUrlCommandInput extends GetDashboardUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardUrlCommand}.
 */
export interface GetDashboardUrlCommandOutput extends GetDashboardUrlResponse, __MetadataBearer {}

/**
 * <p>Retrieves the URL for the Spark monitoring dashboard for a Glue resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDashboardUrlCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDashboardUrlCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDashboardUrlRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "JOB" || "SESSION", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new GetDashboardUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardUrlResponse
 * //   Url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetDashboardUrlCommandInput - {@link GetDashboardUrlCommandInput}
 * @returns {@link GetDashboardUrlCommandOutput}
 * @see {@link GetDashboardUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardUrlCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetDashboardUrlCommand extends $Command
  .classBuilder<
    GetDashboardUrlCommandInput,
    GetDashboardUrlCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetDashboardUrl", {})
  .n("GlueClient", "GetDashboardUrlCommand")
  .sc(GetDashboardUrl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardUrlRequest;
      output: GetDashboardUrlResponse;
    };
    sdk: {
      input: GetDashboardUrlCommandInput;
      output: GetDashboardUrlCommandOutput;
    };
  };
}
