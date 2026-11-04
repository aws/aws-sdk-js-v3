// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterNamespaceInputMessage, RegisterNamespaceOutputMessage } from "../models/models_1";
import { RegisterNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RegisterNamespaceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RegisterNamespaceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *
 * The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class RegisterNamespaceCommand extends command<RegisterNamespaceCommandInput, RegisterNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "RegisterNamespace",
  RegisterNamespace$
) {
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
