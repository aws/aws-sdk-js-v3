// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDiscoverersRequest, ListDiscoverersResponse } from "../models/models_0";
import { de_ListDiscoverersCommand, se_ListDiscoverersCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoverersCommand}.
 */
export interface ListDiscoverersCommandInput extends ListDiscoverersRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoverersCommand}.
 */
export interface ListDiscoverersCommandOutput extends ListDiscoverersResponse, __MetadataBearer {}

/**
 * <p>List the discoverers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListDiscoverersCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListDiscoverersCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // ListDiscoverersRequest
 *   DiscovererIdPrefix: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceArnPrefix: "STRING_VALUE",
 * };
 * const command = new ListDiscoverersCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoverersResponse
 * //   Discoverers: [ // __listOfDiscovererSummary
 * //     { // DiscovererSummary
 * //       DiscovererArn: "STRING_VALUE",
 * //       DiscovererId: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       State: "STARTED" || "STOPPED",
 * //       CrossAccount: true || false,
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoverersCommandInput - {@link ListDiscoverersCommandInput}
 * @returns {@link ListDiscoverersCommandOutput}
 * @see {@link ListDiscoverersCommandInput} for command's `input` shape.
 * @see {@link ListDiscoverersCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class ListDiscoverersCommand extends $Command
  .classBuilder<
    ListDiscoverersCommandInput,
    ListDiscoverersCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("schemas", "ListDiscoverers", {})
  .n("SchemasClient", "ListDiscoverersCommand")
  .f(void 0, void 0)
  .ser(se_ListDiscoverersCommand)
  .de(de_ListDiscoverersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoverersRequest;
      output: ListDiscoverersResponse;
    };
    sdk: {
      input: ListDiscoverersCommandInput;
      output: ListDiscoverersCommandOutput;
    };
  };
}
