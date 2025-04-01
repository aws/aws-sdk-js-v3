// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBClusterEndpointMessage, DeleteDBClusterEndpointOutput } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DeleteDBClusterEndpointCommand, se_DeleteDBClusterEndpointCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterEndpointCommand}.
 */
export interface DeleteDBClusterEndpointCommandInput extends DeleteDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterEndpointCommand}.
 */
export interface DeleteDBClusterEndpointCommandOutput extends DeleteDBClusterEndpointOutput, __MetadataBearer {}

/**
 * <p>Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBClusterEndpointMessage
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterEndpointOutput
 * //   DBClusterEndpointIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //   Endpoint: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   CustomEndpointType: "STRING_VALUE",
 * //   StaticMembers: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ExcludedMembers: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DBClusterEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterEndpointCommandInput - {@link DeleteDBClusterEndpointCommandInput}
 * @returns {@link DeleteDBClusterEndpointCommandOutput}
 * @see {@link DeleteDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointNotFoundFault} (client fault)
 *  <p>The specified custom endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *  <p>The requested operation cannot be performed on the endpoint while the endpoint is in this state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DeleteDBClusterEndpointCommand extends $Command
  .classBuilder<
    DeleteDBClusterEndpointCommandInput,
    DeleteDBClusterEndpointCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBClusterEndpoint", {})
  .n("NeptuneClient", "DeleteDBClusterEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBClusterEndpointCommand)
  .de(de_DeleteDBClusterEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterEndpointMessage;
      output: DeleteDBClusterEndpointOutput;
    };
    sdk: {
      input: DeleteDBClusterEndpointCommandInput;
      output: DeleteDBClusterEndpointCommandOutput;
    };
  };
}
