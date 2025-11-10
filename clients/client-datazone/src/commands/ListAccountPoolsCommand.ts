// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountPoolsInput, ListAccountPoolsOutput } from "../models/models_1";
import { ListAccountPools } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountPoolsCommand}.
 */
export interface ListAccountPoolsCommandInput extends ListAccountPoolsInput {}
/**
 * @public
 *
 * The output of {@link ListAccountPoolsCommand}.
 */
export interface ListAccountPoolsCommandOutput extends ListAccountPoolsOutput, __MetadataBearer {}

/**
 * <p>Lists existing account pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListAccountPoolsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListAccountPoolsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListAccountPoolsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sortBy: "NAME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccountPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountPoolsOutput
 * //   items: [ // AccountPoolSummaries
 * //     { // AccountPoolSummary
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       resolutionStrategy: "MANUAL",
 * //       domainUnitId: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountPoolsCommandInput - {@link ListAccountPoolsCommandInput}
 * @returns {@link ListAccountPoolsCommandOutput}
 * @see {@link ListAccountPoolsCommandInput} for command's `input` shape.
 * @see {@link ListAccountPoolsCommandOutput} for command's `response` shape.
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
export class ListAccountPoolsCommand extends $Command
  .classBuilder<
    ListAccountPoolsCommandInput,
    ListAccountPoolsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListAccountPools", {})
  .n("DataZoneClient", "ListAccountPoolsCommand")
  .sc(ListAccountPools)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountPoolsInput;
      output: ListAccountPoolsOutput;
    };
    sdk: {
      input: ListAccountPoolsCommandInput;
      output: ListAccountPoolsCommandOutput;
    };
  };
}
