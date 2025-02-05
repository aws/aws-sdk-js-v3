// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetClusterInput, GetClusterOutput } from "../models/models_0";
import { de_GetClusterCommand, se_GetClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCommand}.
 */
export interface GetClusterCommandInput extends GetClusterInput {}
/**
 * @public
 *
 * The output of {@link GetClusterCommand}.
 */
export interface GetClusterCommandOutput extends GetClusterOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DSQLClient(config);
 * const input = { // GetClusterInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterOutput
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
 * @param GetClusterCommandInput - {@link GetClusterCommandInput}
 * @returns {@link GetClusterCommandOutput}
 * @see {@link GetClusterCommandInput} for command's `input` shape.
 * @see {@link GetClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
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
 * @example Get Cluster
 * ```javascript
 * //
 * const input = {
 *   "identifier": "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new GetClusterCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class GetClusterCommand extends $Command
  .classBuilder<
    GetClusterCommandInput,
    GetClusterCommandOutput,
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
  .s("DSQL", "GetCluster", {})
  .n("DSQLClient", "GetClusterCommand")
  .f(void 0, void 0)
  .ser(se_GetClusterCommand)
  .de(de_GetClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterInput;
      output: GetClusterOutput;
    };
    sdk: {
      input: GetClusterCommandInput;
      output: GetClusterCommandOutput;
    };
  };
}
