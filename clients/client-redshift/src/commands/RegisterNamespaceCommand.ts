// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterNamespaceInputMessage, RegisterNamespaceOutputMessage } from "../models/models_1";
import { de_RegisterNamespaceCommand, se_RegisterNamespaceCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterNamespaceCommand}.
 */
export interface RegisterNamespaceCommandInput extends RegisterNamespaceInputMessage {}
/**
 * @public
 *
 * The output of {@link RegisterNamespaceCommand}.
 */
export interface RegisterNamespaceCommandOutput extends RegisterNamespaceOutputMessage, __MetadataBearer {}

/**
 * <p>Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RegisterNamespaceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RegisterNamespaceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // RegisterNamespaceInputMessage
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
 * const command = new RegisterNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterNamespaceOutputMessage
 * //   Status: "Registering" || "Deregistering",
 * // };
 *
 * ```
 *
 * @param RegisterNamespaceCommandInput - {@link RegisterNamespaceCommandInput}
 * @returns {@link RegisterNamespaceCommandOutput}
 * @see {@link RegisterNamespaceCommandInput} for command's `input` shape.
 * @see {@link RegisterNamespaceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RegisterNamespaceCommand extends $Command
  .classBuilder<
    RegisterNamespaceCommandInput,
    RegisterNamespaceCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "RegisterNamespace", {})
  .n("RedshiftClient", "RegisterNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterNamespaceCommand)
  .de(de_RegisterNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterNamespaceInputMessage;
      output: RegisterNamespaceOutputMessage;
    };
    sdk: {
      input: RegisterNamespaceCommandInput;
      output: RegisterNamespaceCommandOutput;
    };
  };
}
