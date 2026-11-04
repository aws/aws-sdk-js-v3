// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUsageProfilesRequest, ListUsageProfilesResponse } from "../models/models_2";
import { ListUsageProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUsageProfilesCommand}.
 */
export interface ListUsageProfilesCommandInput extends ListUsageProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageProfilesCommand}.
 */
export interface ListUsageProfilesCommandOutput extends ListUsageProfilesResponse, __MetadataBearer {}

/**
 * List all the Glue usage profiles.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListUsageProfilesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListUsageProfilesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListUsageProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListUsageProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageProfilesResponse
 * //   Profiles: [ // UsageProfileDefinitionList
 * //     { // UsageProfileDefinition
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsageProfilesCommandInput - {@link ListUsageProfilesCommandInput}
 * @returns {@link ListUsageProfilesCommandOutput}
 * @see {@link ListUsageProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUsageProfilesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListUsageProfilesCommand extends command<ListUsageProfilesCommandInput, ListUsageProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListUsageProfiles",
  ListUsageProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsageProfilesRequest;
      output: ListUsageProfilesResponse;
    };
    sdk: {
      input: ListUsageProfilesCommandInput;
      output: ListUsageProfilesCommandOutput;
    };
  };
}
