// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdNamespacesInput, ListIdNamespacesOutput } from "../models/models_0";
import { ListIdNamespaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdNamespacesCommand}.
 */
export interface ListIdNamespacesCommandInput extends ListIdNamespacesInput {}
/**
 * @public
 *
 * The output of {@link ListIdNamespacesCommand}.
 */
export interface ListIdNamespacesCommandOutput extends ListIdNamespacesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all ID namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListIdNamespacesCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListIdNamespacesCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListIdNamespacesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdNamespacesOutput
 * //   idNamespaceSummaries: [ // IdNamespaceList
 * //     { // IdNamespaceSummary
 * //       idNamespaceName: "STRING_VALUE", // required
 * //       idNamespaceArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       idMappingWorkflowProperties: [ // IdNamespaceIdMappingWorkflowMetadataList
 * //         { // IdNamespaceIdMappingWorkflowMetadata
 * //           idMappingType: "PROVIDER" || "RULE_BASED", // required
 * //         },
 * //       ],
 * //       type: "SOURCE" || "TARGET", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdNamespacesCommandInput - {@link ListIdNamespacesCommandInput}
 * @returns {@link ListIdNamespacesCommandOutput}
 * @see {@link ListIdNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListIdNamespacesCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class ListIdNamespacesCommand extends command<ListIdNamespacesCommandInput, ListIdNamespacesCommandOutput>(
  _ep0,
  _mw0,
  "ListIdNamespaces",
  ListIdNamespaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdNamespacesInput;
      output: ListIdNamespacesOutput;
    };
    sdk: {
      input: ListIdNamespacesCommandInput;
      output: ListIdNamespacesCommandOutput;
    };
  };
}
