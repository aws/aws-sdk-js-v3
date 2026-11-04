// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentProfilesInput, ListEnvironmentProfilesOutput } from "../models/models_1";
import { ListEnvironmentProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentProfilesCommand}.
 */
export interface ListEnvironmentProfilesCommandInput extends ListEnvironmentProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentProfilesCommand}.
 */
export interface ListEnvironmentProfilesCommandOutput extends ListEnvironmentProfilesOutput, __MetadataBearer {}

/**
 * Lists Amazon DataZone environment profiles.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   awsAccountId: "STRING_VALUE",
 *   awsAccountRegion: "STRING_VALUE",
 *   environmentBlueprintIdentifier: "STRING_VALUE",
 *   projectIdentifier: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentProfilesOutput
 * //   items: [ // EnvironmentProfileSummaries // required
 * //     { // EnvironmentProfileSummary
 * //       id: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       awsAccountId: "STRING_VALUE",
 * //       awsAccountRegion: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       environmentBlueprintId: "STRING_VALUE", // required
 * //       projectId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentProfilesCommandInput - {@link ListEnvironmentProfilesCommandInput}
 * @returns {@link ListEnvironmentProfilesCommandOutput}
 * @see {@link ListEnvironmentProfilesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentProfilesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class ListEnvironmentProfilesCommand extends command<ListEnvironmentProfilesCommandInput, ListEnvironmentProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentProfiles",
  ListEnvironmentProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentProfilesInput;
      output: ListEnvironmentProfilesOutput;
    };
    sdk: {
      input: ListEnvironmentProfilesCommandInput;
      output: ListEnvironmentProfilesCommandOutput;
    };
  };
}
