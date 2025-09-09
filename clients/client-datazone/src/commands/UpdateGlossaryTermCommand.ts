// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateGlossaryTermInput,
  UpdateGlossaryTermInputFilterSensitiveLog,
  UpdateGlossaryTermOutput,
  UpdateGlossaryTermOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateGlossaryTermCommand, se_UpdateGlossaryTermCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandInput extends UpdateGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandOutput extends UpdateGlossaryTermOutput, __MetadataBearer {}

/**
 * <p>Updates a business glossary term in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>Glossary term must exist in the specified domain. </p> </li> <li> <p>New name must not conflict with existing terms in the same glossary.</p> </li> <li> <p>User must have permissions on the term.</p> </li> <li> <p>The term must not be in DELETED status.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   glossaryIdentifier: "STRING_VALUE",
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   shortDescription: "STRING_VALUE",
 *   longDescription: "STRING_VALUE",
 *   termRelations: { // TermRelations
 *     isA: [ // GlossaryTerms
 *       "STRING_VALUE",
 *     ],
 *     classifies: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   status: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlossaryTermOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   glossaryId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   shortDescription: "STRING_VALUE",
 * //   longDescription: "STRING_VALUE",
 * //   termRelations: { // TermRelations
 * //     isA: [ // GlossaryTerms
 * //       "STRING_VALUE",
 * //     ],
 * //     classifies: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateGlossaryTermCommandInput - {@link UpdateGlossaryTermCommandInput}
 * @returns {@link UpdateGlossaryTermCommandOutput}
 * @see {@link UpdateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link UpdateGlossaryTermCommandOutput} for command's `response` shape.
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
export class UpdateGlossaryTermCommand extends $Command
  .classBuilder<
    UpdateGlossaryTermCommandInput,
    UpdateGlossaryTermCommandOutput,
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
  .s("DataZone", "UpdateGlossaryTerm", {})
  .n("DataZoneClient", "UpdateGlossaryTermCommand")
  .f(UpdateGlossaryTermInputFilterSensitiveLog, UpdateGlossaryTermOutputFilterSensitiveLog)
  .ser(se_UpdateGlossaryTermCommand)
  .de(de_UpdateGlossaryTermCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlossaryTermInput;
      output: UpdateGlossaryTermOutput;
    };
    sdk: {
      input: UpdateGlossaryTermCommandInput;
      output: UpdateGlossaryTermCommandOutput;
    };
  };
}
