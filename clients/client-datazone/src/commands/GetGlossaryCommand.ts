// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGlossaryInput, GetGlossaryOutput, GetGlossaryOutputFilterSensitiveLog } from "../models/models_1";
import { de_GetGlossaryCommand, se_GetGlossaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandInput extends GetGlossaryInput {}
/**
 * @public
 *
 * The output of {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandOutput extends GetGlossaryOutput, __MetadataBearer {}

/**
 * <p>Gets a business glossary in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>The specified glossary ID must exist and be associated with the given domain. </p> </li> <li> <p>The caller must have the <code>datazone:GetGlossary</code> permission on the domain.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "DISABLED" || "ENABLED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGlossaryCommandInput - {@link GetGlossaryCommandInput}
 * @returns {@link GetGlossaryCommandOutput}
 * @see {@link GetGlossaryCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryCommandOutput} for command's `response` shape.
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
export class GetGlossaryCommand extends $Command
  .classBuilder<
    GetGlossaryCommandInput,
    GetGlossaryCommandOutput,
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
  .s("DataZone", "GetGlossary", {})
  .n("DataZoneClient", "GetGlossaryCommand")
  .f(void 0, GetGlossaryOutputFilterSensitiveLog)
  .ser(se_GetGlossaryCommand)
  .de(de_GetGlossaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlossaryInput;
      output: GetGlossaryOutput;
    };
    sdk: {
      input: GetGlossaryCommandInput;
      output: GetGlossaryCommandOutput;
    };
  };
}
