// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfilesInput, ListProfilesOutput } from "../models/models_0";
import { ListProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List profiles.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListProfilesCommand extends command<ListProfilesCommandInput, ListProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListProfiles",
  ListProfiles$
) {
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
