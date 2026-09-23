// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceAssociationsInput, ListResourceAssociationsOutput } from "../models/models_0";
import { ListResourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceAssociationsCommand}.
 */
export interface ListResourceAssociationsCommandInput extends ListResourceAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListResourceAssociationsCommand}.
 */
export interface ListResourceAssociationsCommandOutput extends ListResourceAssociationsOutput, __MetadataBearer {}

/**
 * <p>Lists the resources associated with the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListResourceAssociationsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListResourceAssociationsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListResourceAssociationsInput
 *   resourceIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceAssociationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   resourceAssociations: [ // ResourceAssociationList // required
 * //     { // ResourceAssociation
 * //       arn: "STRING_VALUE", // required
 * //       resourceType: "Rule" || "Template" || "Policy" || "Deployment" || "Scope", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourceAssociationsCommandInput - {@link ListResourceAssociationsCommandInput}
 * @returns {@link ListResourceAssociationsCommandOutput}
 * @see {@link ListResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example List what references a rule
 * ```javascript
 * // Lists the resources that reference the given rule, such as the templates and policies it is associated with.
 * const input = {
 *   maxResults: 10,
 *   resourceIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 * };
 * const command = new ListResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   resourceAssociations: [
 *     {
 *       arn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789",
 *       resourceType: "Template"
 *     },
 *     {
 *       arn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789",
 *       resourceType: "Policy"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResourceAssociationsCommand extends command<ListResourceAssociationsCommandInput, ListResourceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceAssociations",
  ListResourceAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceAssociationsInput;
      output: ListResourceAssociationsOutput;
    };
    sdk: {
      input: ListResourceAssociationsCommandInput;
      output: ListResourceAssociationsCommandOutput;
    };
  };
}
