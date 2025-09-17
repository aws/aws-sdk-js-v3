// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAccountsInAccountPoolInput,
  ListAccountsInAccountPoolOutput,
  ListAccountsInAccountPoolOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAccountsInAccountPoolCommand, se_ListAccountsInAccountPoolCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountsInAccountPoolCommand}.
 */
export interface ListAccountsInAccountPoolCommandInput extends ListAccountsInAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link ListAccountsInAccountPoolCommand}.
 */
export interface ListAccountsInAccountPoolCommandOutput extends ListAccountsInAccountPoolOutput, __MetadataBearer {}

/**
 * <p>Lists the accounts in the specified account pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListAccountsInAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListAccountsInAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListAccountsInAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccountsInAccountPoolCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsInAccountPoolOutput
 * //   items: [ // AccountInfoList
 * //     { // AccountInfo
 * //       awsAccountId: "STRING_VALUE", // required
 * //       supportedRegions: [ // AwsRegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       awsAccountName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsInAccountPoolCommandInput - {@link ListAccountsInAccountPoolCommandInput}
 * @returns {@link ListAccountsInAccountPoolCommandOutput}
 * @see {@link ListAccountsInAccountPoolCommandInput} for command's `input` shape.
 * @see {@link ListAccountsInAccountPoolCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class ListAccountsInAccountPoolCommand extends $Command
  .classBuilder<
    ListAccountsInAccountPoolCommandInput,
    ListAccountsInAccountPoolCommandOutput,
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
  .s("DataZone", "ListAccountsInAccountPool", {})
  .n("DataZoneClient", "ListAccountsInAccountPoolCommand")
  .f(void 0, ListAccountsInAccountPoolOutputFilterSensitiveLog)
  .ser(se_ListAccountsInAccountPoolCommand)
  .de(de_ListAccountsInAccountPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsInAccountPoolInput;
      output: ListAccountsInAccountPoolOutput;
    };
    sdk: {
      input: ListAccountsInAccountPoolCommandInput;
      output: ListAccountsInAccountPoolCommandOutput;
    };
  };
}
