// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { ListIdMappingWorkflowsInput, ListIdMappingWorkflowsOutput } from "../models/models_0";
import { ListIdMappingWorkflows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdMappingWorkflowsCommand}.
 */
export interface ListIdMappingWorkflowsCommandInput extends ListIdMappingWorkflowsInput {}
/**
 * @public
 *
 * The output of {@link ListIdMappingWorkflowsCommand}.
 */
export interface ListIdMappingWorkflowsCommandOutput extends ListIdMappingWorkflowsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all the <code>IdMappingWorkflows</code> that have been created for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListIdMappingWorkflowsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListIdMappingWorkflowsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListIdMappingWorkflowsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdMappingWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdMappingWorkflowsOutput
 * //   workflowSummaries: [ // IdMappingWorkflowList
 * //     { // IdMappingWorkflowSummary
 * //       workflowName: "STRING_VALUE", // required
 * //       workflowArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdMappingWorkflowsCommandInput - {@link ListIdMappingWorkflowsCommandInput}
 * @returns {@link ListIdMappingWorkflowsCommandOutput}
 * @see {@link ListIdMappingWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListIdMappingWorkflowsCommandOutput} for command's `response` shape.
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
export class ListIdMappingWorkflowsCommand extends $Command
  .classBuilder<
    ListIdMappingWorkflowsCommandInput,
    ListIdMappingWorkflowsCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "ListIdMappingWorkflows", {})
  .n("EntityResolutionClient", "ListIdMappingWorkflowsCommand")
  .sc(ListIdMappingWorkflows$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdMappingWorkflowsInput;
      output: ListIdMappingWorkflowsOutput;
    };
    sdk: {
      input: ListIdMappingWorkflowsCommandInput;
      output: ListIdMappingWorkflowsCommandOutput;
    };
  };
}
