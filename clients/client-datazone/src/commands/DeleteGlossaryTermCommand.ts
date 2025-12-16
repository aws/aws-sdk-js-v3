// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGlossaryTermInput, DeleteGlossaryTermOutput } from "../models/models_1";
import { DeleteGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandInput extends DeleteGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandOutput extends DeleteGlossaryTermOutput, __MetadataBearer {}

/**
 * <p>Deletes a business glossary term in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>Glossary term must exist and be active. </p> </li> <li> <p>The term must not be linked to other assets or child terms.</p> </li> <li> <p>Caller must have delete permissions in the domain/glossary.</p> </li> <li> <p>Ensure all associations (such as to assets or parent terms) are removed before deletion.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryTermCommandInput - {@link DeleteGlossaryTermCommandInput}
 * @returns {@link DeleteGlossaryTermCommandOutput}
 * @see {@link DeleteGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryTermCommandOutput} for command's `response` shape.
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
export class DeleteGlossaryTermCommand extends $Command
  .classBuilder<
    DeleteGlossaryTermCommandInput,
    DeleteGlossaryTermCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteGlossaryTerm", {})
  .n("DataZoneClient", "DeleteGlossaryTermCommand")
  .sc(DeleteGlossaryTerm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryTermInput;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryTermCommandInput;
      output: DeleteGlossaryTermCommandOutput;
    };
  };
}
