// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterInput, UpdateClusterOutput } from "../models/models_0";
import { de_UpdateClusterCommand, se_UpdateClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterOutput, __MetadataBearer {}

/**
 * <p>Updates a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, UpdateClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, UpdateClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * const client = new DSQLClient(config);
 * const input = { // UpdateClusterInput
 *   identifier: "STRING_VALUE", // required
 *   deletionProtectionEnabled: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterOutput
 * //   identifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   deletionProtectionEnabled: true || false, // required
 * //   witnessRegion: "STRING_VALUE",
 * //   linkedClusterArns: [ // ClusterArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error,
 *       exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 * @public
 * @example Update Cluster
 * ```javascript
 * //
 * const input = {
 *   "deletionProtectionEnabled": false,
 *   "identifier": "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new UpdateClusterCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DSQL", "UpdateCluster", {})
  .n("DSQLClient", "UpdateClusterCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterCommand)
  .de(de_UpdateClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterInput;
      output: UpdateClusterOutput;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
