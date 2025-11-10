// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListUsageProfilesRequest, ListUsageProfilesResponse } from "../models/models_3";
import { ListUsageProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List all the Glue usage profiles.</p>
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
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListUsageProfilesCommand extends $Command
  .classBuilder<
    ListUsageProfilesCommandInput,
    ListUsageProfilesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListUsageProfiles", {})
  .n("GlueClient", "ListUsageProfilesCommand")
  .sc(ListUsageProfiles)
  .build() {
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
