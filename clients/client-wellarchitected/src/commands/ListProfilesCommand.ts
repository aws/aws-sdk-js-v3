// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfilesInput, ListProfilesOutput } from "../models/models_0";
import { ListProfiles } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandInput extends ListProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandOutput extends ListProfilesOutput, __MetadataBearer {}

/**
 * <p>List profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListProfilesInput
 *   ProfileNamePrefix: "STRING_VALUE",
 *   ProfileOwnerType: "SELF" || "SHARED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilesOutput
 * //   ProfileSummaries: [ // ProfileSummaries
 * //     { // ProfileSummary
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileVersion: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       ProfileDescription: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilesCommandInput - {@link ListProfilesCommandInput}
 * @returns {@link ListProfilesCommandOutput}
 * @see {@link ListProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProfilesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListProfilesCommand extends $Command
  .classBuilder<
    ListProfilesCommandInput,
    ListProfilesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListProfiles", {})
  .n("WellArchitectedClient", "ListProfilesCommand")
  .sc(ListProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfilesInput;
      output: ListProfilesOutput;
    };
    sdk: {
      input: ListProfilesCommandInput;
      output: ListProfilesCommandOutput;
    };
  };
}
