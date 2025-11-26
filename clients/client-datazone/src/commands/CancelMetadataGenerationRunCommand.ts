// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelMetadataGenerationRunInput, CancelMetadataGenerationRunOutput } from "../models/models_0";
import { CancelMetadataGenerationRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelMetadataGenerationRunCommand}.
 */
export interface CancelMetadataGenerationRunCommandInput extends CancelMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link CancelMetadataGenerationRunCommand}.
 */
export interface CancelMetadataGenerationRunCommandOutput extends CancelMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * <p>Cancels the metadata generation run.</p> <p>Prerequisites:</p> <ul> <li> <p>The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS). </p> </li> <li> <p>Runs in SUCCEEDED status cannot be cancelled.</p> </li> <li> <p>User must have access to the run and cancel permissions.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CancelMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CancelMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CancelMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new CancelMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelMetadataGenerationRunCommandInput - {@link CancelMetadataGenerationRunCommandInput}
 * @returns {@link CancelMetadataGenerationRunCommandOutput}
 * @see {@link CancelMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link CancelMetadataGenerationRunCommandOutput} for command's `response` shape.
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
export class CancelMetadataGenerationRunCommand extends $Command
  .classBuilder<
    CancelMetadataGenerationRunCommandInput,
    CancelMetadataGenerationRunCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CancelMetadataGenerationRun", {})
  .n("DataZoneClient", "CancelMetadataGenerationRunCommand")
  .sc(CancelMetadataGenerationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMetadataGenerationRunInput;
      output: {};
    };
    sdk: {
      input: CancelMetadataGenerationRunCommandInput;
      output: CancelMetadataGenerationRunCommandOutput;
    };
  };
}
