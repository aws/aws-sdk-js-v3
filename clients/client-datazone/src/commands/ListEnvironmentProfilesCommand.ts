// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEnvironmentProfilesInput, ListEnvironmentProfilesOutput } from "../models/models_1";
import { ListEnvironmentProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists Amazon DataZone environment profiles.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentProfilesCommand extends $Command
  .classBuilder<
    ListEnvironmentProfilesCommandInput,
    ListEnvironmentProfilesCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListEnvironmentProfiles", {})
  .n("DataZoneClient", "ListEnvironmentProfilesCommand")
  .sc(ListEnvironmentProfiles)
  .build() {
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
