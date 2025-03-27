// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterNamespaceInputMessage } from "../models/models_0";
import { DeregisterNamespaceOutputMessage } from "../models/models_1";
import { de_DeregisterNamespaceCommand, se_DeregisterNamespaceCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterNamespaceCommand}.
 */
export interface DeregisterNamespaceCommandInput extends DeregisterNamespaceInputMessage {}
/**
 * @public
 *
 * The output of {@link DeregisterNamespaceCommand}.
 */
export interface DeregisterNamespaceCommandOutput extends DeregisterNamespaceOutputMessage, __MetadataBearer {}

/**
 * <p>Deregisters a cluster or serverless namespace from the Amazon Web Services Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeregisterNamespaceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeregisterNamespaceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeregisterNamespaceInputMessage
 *   NamespaceIdentifier: { // NamespaceIdentifierUnion Union: only one key present
 *     ServerlessIdentifier: { // ServerlessIdentifier
 *       NamespaceIdentifier: "STRING_VALUE", // required
 *       WorkgroupIdentifier: "STRING_VALUE", // required
 *     },
 *     ProvisionedIdentifier: { // ProvisionedIdentifier
 *       ClusterIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   ConsumerIdentifiers: [ // ConsumerIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeregisterNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterNamespaceOutputMessage
 * //   Status: "Registering" || "Deregistering",
 * // };
 *
 * ```
 *
 * @param DeregisterNamespaceCommandInput - {@link DeregisterNamespaceCommandInput}
 * @returns {@link DeregisterNamespaceCommandOutput}
 * @see {@link DeregisterNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeregisterNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeregisterNamespaceCommand extends $Command
  .classBuilder<
    DeregisterNamespaceCommandInput,
    DeregisterNamespaceCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DeregisterNamespace", {})
  .n("RedshiftClient", "DeregisterNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterNamespaceCommand)
  .de(de_DeregisterNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterNamespaceInputMessage;
      output: DeregisterNamespaceOutputMessage;
    };
    sdk: {
      input: DeregisterNamespaceCommandInput;
      output: DeregisterNamespaceCommandOutput;
    };
  };
}
