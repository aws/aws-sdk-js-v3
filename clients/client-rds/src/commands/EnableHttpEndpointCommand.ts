// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableHttpEndpointRequest, EnableHttpEndpointResponse } from "../models/models_1";
import { de_EnableHttpEndpointCommand, se_EnableHttpEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableHttpEndpointCommand}.
 */
export interface EnableHttpEndpointCommandInput extends EnableHttpEndpointRequest {}
/**
 * @public
 *
 * The output of {@link EnableHttpEndpointCommand}.
 */
export interface EnableHttpEndpointCommandOutput extends EnableHttpEndpointResponse, __MetadataBearer {}

/**
 * <p>Enables the HTTP endpoint for the DB cluster. By default, the HTTP endpoint
 *           isn't enabled.</p>
 *          <p>When enabled, this endpoint provides a connectionless web service API (RDS Data API)
 *           for running SQL queries on the Aurora DB cluster. You can also query your database from inside the RDS console
 *           with the RDS query editor.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To enable the HTTP endpoint for Aurora Serverless v1 DB clusters,
 *         use the <code>EnableHttpEndpoint</code> parameter of the <code>ModifyDBCluster</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, EnableHttpEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, EnableHttpEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // EnableHttpEndpointRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new EnableHttpEndpointCommand(input);
 * const response = await client.send(command);
 * // { // EnableHttpEndpointResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   HttpEndpointEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param EnableHttpEndpointCommandInput - {@link EnableHttpEndpointCommandInput}
 * @returns {@link EnableHttpEndpointCommandOutput}
 * @see {@link EnableHttpEndpointCommandInput} for command's `input` shape.
 * @see {@link EnableHttpEndpointCommandOutput} for command's `response` shape.
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
export class EnableHttpEndpointCommand extends $Command
  .classBuilder<
    EnableHttpEndpointCommandInput,
    EnableHttpEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "EnableHttpEndpoint", {})
  .n("RDSClient", "EnableHttpEndpointCommand")
  .f(void 0, void 0)
  .ser(se_EnableHttpEndpointCommand)
  .de(de_EnableHttpEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableHttpEndpointRequest;
      output: EnableHttpEndpointResponse;
    };
    sdk: {
      input: EnableHttpEndpointCommandInput;
      output: EnableHttpEndpointCommandOutput;
    };
  };
}
