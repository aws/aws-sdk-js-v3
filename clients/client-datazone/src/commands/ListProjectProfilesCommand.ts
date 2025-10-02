// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProjectProfilesInput,
  ListProjectProfilesInputFilterSensitiveLog,
  ListProjectProfilesOutput,
  ListProjectProfilesOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListProjectProfilesCommand, se_ListProjectProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProjectProfilesCommand}.
 */
export interface ListProjectProfilesCommandInput extends ListProjectProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListProjectProfilesCommand}.
 */
export interface ListProjectProfilesCommandOutput extends ListProjectProfilesOutput, __MetadataBearer {}

/**
 * <p>Lists project profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListProjectProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListProjectProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListProjectProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sortBy: "NAME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProjectProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectProfilesOutput
 * //   items: [ // ProjectProfileSummaries
 * //     { // ProjectProfileSummary
 * //       domainId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "ENABLED" || "DISABLED",
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       domainUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectProfilesCommandInput - {@link ListProjectProfilesCommandInput}
 * @returns {@link ListProjectProfilesCommandOutput}
 * @see {@link ListProjectProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProjectProfilesCommandOutput} for command's `response` shape.
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
export class ListProjectProfilesCommand extends $Command
  .classBuilder<
    ListProjectProfilesCommandInput,
    ListProjectProfilesCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListProjectProfiles", {})
  .n("DataZoneClient", "ListProjectProfilesCommand")
  .f(ListProjectProfilesInputFilterSensitiveLog, ListProjectProfilesOutputFilterSensitiveLog)
  .ser(se_ListProjectProfilesCommand)
  .de(de_ListProjectProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectProfilesInput;
      output: ListProjectProfilesOutput;
    };
    sdk: {
      input: ListProjectProfilesCommandInput;
      output: ListProjectProfilesCommandOutput;
    };
  };
}
