// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableHttpEndpointRequest, DisableHttpEndpointResponse } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DisableHttpEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableHttpEndpointCommand}.
 */
export interface DisableHttpEndpointCommandInput extends DisableHttpEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DisableHttpEndpointCommand}.
 */
export interface DisableHttpEndpointCommandOutput extends DisableHttpEndpointResponse, __MetadataBearer {}

/**
 * <p>Disables the HTTP endpoint for the specified DB cluster. Disabling this endpoint disables RDS Data API.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To disable the HTTP endpoint for Aurora Serverless v1 DB clusters,
 *         use the <code>EnableHttpEndpoint</code> parameter of the <code>ModifyDBCluster</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DisableHttpEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DisableHttpEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DisableHttpEndpointRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisableHttpEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DisableHttpEndpointResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   HttpEndpointEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param DisableHttpEndpointCommandInput - {@link DisableHttpEndpointCommandInput}
 * @returns {@link DisableHttpEndpointCommandOutput}
 * @see {@link DisableHttpEndpointCommandInput} for command's `input` shape.
 * @see {@link DisableHttpEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The operation can't be performed because another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DisableHttpEndpointCommand extends $Command
  .classBuilder<
    DisableHttpEndpointCommandInput,
    DisableHttpEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DisableHttpEndpoint", {})
  .n("RDSClient", "DisableHttpEndpointCommand")
  .sc(DisableHttpEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableHttpEndpointRequest;
      output: DisableHttpEndpointResponse;
    };
    sdk: {
      input: DisableHttpEndpointCommandInput;
      output: DisableHttpEndpointCommandOutput;
    };
  };
}
