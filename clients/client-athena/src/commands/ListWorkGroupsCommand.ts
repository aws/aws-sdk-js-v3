// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListWorkGroupsInput, ListWorkGroupsOutput } from "../models/models_0";
import { ListWorkGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkGroupsCommand}.
 */
export interface ListWorkGroupsCommandInput extends ListWorkGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkGroupsCommand}.
 */
export interface ListWorkGroupsCommandOutput extends ListWorkGroupsOutput, __MetadataBearer {}

/**
 * <p>Lists available workgroups for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListWorkGroupsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListWorkGroupsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListWorkGroupsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkGroupsOutput
 * //   WorkGroups: [ // WorkGroupsList
 * //     { // WorkGroupSummary
 * //       Name: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED",
 * //       Description: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       IdentityCenterApplicationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkGroupsCommandInput - {@link ListWorkGroupsCommandInput}
 * @returns {@link ListWorkGroupsCommandOutput}
 * @see {@link ListWorkGroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkGroupsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListWorkGroupsCommand extends $Command
  .classBuilder<
    ListWorkGroupsCommandInput,
    ListWorkGroupsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListWorkGroups", {})
  .n("AthenaClient", "ListWorkGroupsCommand")
  .sc(ListWorkGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkGroupsInput;
      output: ListWorkGroupsOutput;
    };
    sdk: {
      input: ListWorkGroupsCommandInput;
      output: ListWorkGroupsCommandOutput;
    };
  };
}
