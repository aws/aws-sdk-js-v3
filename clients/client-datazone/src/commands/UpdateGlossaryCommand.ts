// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateGlossaryInput, UpdateGlossaryOutput } from "../models/models_1";
import { UpdateGlossary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlossaryCommand}.
 */
export interface UpdateGlossaryCommandInput extends UpdateGlossaryInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlossaryCommand}.
 */
export interface UpdateGlossaryCommandOutput extends UpdateGlossaryOutput, __MetadataBearer {}

/**
 * <p>Updates the business glossary in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>The glossary must exist in the given domain. </p> </li> <li> <p>The caller must have the <code>datazone:UpdateGlossary</code> permission to update it.</p> </li> <li> <p>When updating the name, the new name must be unique within the domain.</p> </li> <li> <p>The glossary must not be deleted or in a terminal state.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   status: "DISABLED" || "ENABLED",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlossaryOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "DISABLED" || "ENABLED",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateGlossaryCommandInput - {@link UpdateGlossaryCommandInput}
 * @returns {@link UpdateGlossaryCommandOutput}
 * @see {@link UpdateGlossaryCommandInput} for command's `input` shape.
 * @see {@link UpdateGlossaryCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
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
export class UpdateGlossaryCommand extends $Command
  .classBuilder<
    UpdateGlossaryCommandInput,
    UpdateGlossaryCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateGlossary", {})
  .n("DataZoneClient", "UpdateGlossaryCommand")
  .sc(UpdateGlossary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlossaryInput;
      output: UpdateGlossaryOutput;
    };
    sdk: {
      input: UpdateGlossaryCommandInput;
      output: UpdateGlossaryCommandOutput;
    };
  };
}
