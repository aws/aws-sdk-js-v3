// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainUnitsForParentInput, ListDomainUnitsForParentOutput } from "../models/models_1";
import { de_ListDomainUnitsForParentCommand, se_ListDomainUnitsForParentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainUnitsForParentCommand}.
 */
export interface ListDomainUnitsForParentCommandInput extends ListDomainUnitsForParentInput {}
/**
 * @public
 *
 * The output of {@link ListDomainUnitsForParentCommand}.
 */
export interface ListDomainUnitsForParentCommandOutput extends ListDomainUnitsForParentOutput, __MetadataBearer {}

/**
 * <p>Lists child domain units for the specified parent domain unit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDomainUnitsForParentCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDomainUnitsForParentCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDomainUnitsForParentInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   parentDomainUnitIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainUnitsForParentCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainUnitsForParentOutput
 * //   items: [ // DomainUnitSummaries // required
 * //     { // DomainUnitSummary
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainUnitsForParentCommandInput - {@link ListDomainUnitsForParentCommandInput}
 * @returns {@link ListDomainUnitsForParentCommandOutput}
 * @see {@link ListDomainUnitsForParentCommandInput} for command's `input` shape.
 * @see {@link ListDomainUnitsForParentCommandOutput} for command's `response` shape.
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
export class ListDomainUnitsForParentCommand extends $Command
  .classBuilder<
    ListDomainUnitsForParentCommandInput,
    ListDomainUnitsForParentCommandOutput,
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
  .s("DataZone", "ListDomainUnitsForParent", {})
  .n("DataZoneClient", "ListDomainUnitsForParentCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainUnitsForParentCommand)
  .de(de_ListDomainUnitsForParentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainUnitsForParentInput;
      output: ListDomainUnitsForParentOutput;
    };
    sdk: {
      input: ListDomainUnitsForParentCommandInput;
      output: ListDomainUnitsForParentCommandOutput;
    };
  };
}
