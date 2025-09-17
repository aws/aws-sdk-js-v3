// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGlossaryInput, DeleteGlossaryOutput } from "../models/models_1";
import { de_DeleteGlossaryCommand, se_DeleteGlossaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandInput extends DeleteGlossaryInput {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandOutput extends DeleteGlossaryOutput, __MetadataBearer {}

/**
 * <p>Deletes a business glossary in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>The glossary must be in DISABLED state. </p> </li> <li> <p>The glossary must not have any glossary terms associated with it.</p> </li> <li> <p>The glossary must exist in the specified domain.</p> </li> <li> <p>The caller must have the <code>datazone:DeleteGlossary</code> permission in the domain and glossary.</p> </li> <li> <p>There should be no active assets or metadata linked to the glossary.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryCommandInput - {@link DeleteGlossaryCommandInput}
 * @returns {@link DeleteGlossaryCommandOutput}
 * @see {@link DeleteGlossaryCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryCommandOutput} for command's `response` shape.
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
export class DeleteGlossaryCommand extends $Command
  .classBuilder<
    DeleteGlossaryCommandInput,
    DeleteGlossaryCommandOutput,
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
  .s("DataZone", "DeleteGlossary", {})
  .n("DataZoneClient", "DeleteGlossaryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGlossaryCommand)
  .de(de_DeleteGlossaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryInput;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryCommandInput;
      output: DeleteGlossaryCommandOutput;
    };
  };
}
