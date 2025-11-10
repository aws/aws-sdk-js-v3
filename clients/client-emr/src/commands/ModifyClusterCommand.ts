// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyClusterInput, ModifyClusterOutput } from "../models/models_0";
import { ModifyCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandInput extends ModifyClusterInput {}
/**
 * @public
 *
 * The output of {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandOutput extends ModifyClusterOutput, __MetadataBearer {}

/**
 * <p>Modifies the number of steps that can be executed concurrently for the cluster specified
 *          using ClusterID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyClusterCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyClusterCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ModifyClusterInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepConcurrencyLevel: Number("int"),
 *   ExtendedSupport: true || false,
 * };
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterOutput
 * //   StepConcurrencyLevel: Number("int"),
 * //   ExtendedSupport: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyClusterCommandInput - {@link ModifyClusterCommandInput}
 * @returns {@link ModifyClusterCommandOutput}
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ModifyClusterCommand extends $Command
  .classBuilder<
    ModifyClusterCommandInput,
    ModifyClusterCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ModifyCluster", {})
  .n("EMRClient", "ModifyClusterCommand")
  .sc(ModifyCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterInput;
      output: ModifyClusterOutput;
    };
    sdk: {
      input: ModifyClusterCommandInput;
      output: ModifyClusterCommandOutput;
    };
  };
}
