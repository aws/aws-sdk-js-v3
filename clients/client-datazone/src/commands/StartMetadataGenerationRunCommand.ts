// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartMetadataGenerationRunInput, StartMetadataGenerationRunOutput } from "../models/models_2";
import { de_StartMetadataGenerationRunCommand, se_StartMetadataGenerationRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMetadataGenerationRunCommand}.
 */
export interface StartMetadataGenerationRunCommandInput extends StartMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link StartMetadataGenerationRunCommand}.
 */
export interface StartMetadataGenerationRunCommandOutput extends StartMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * <p>Starts the metadata generation run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // StartMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   type: "BUSINESS_DESCRIPTIONS", // required
 *   target: { // MetadataGenerationRunTarget
 *     type: "ASSET", // required
 *     identifier: "STRING_VALUE", // required
 *     revision: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   owningProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataGenerationRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED",
 * //   type: "BUSINESS_DESCRIPTIONS",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataGenerationRunCommandInput - {@link StartMetadataGenerationRunCommandInput}
 * @returns {@link StartMetadataGenerationRunCommandOutput}
 * @see {@link StartMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link StartMetadataGenerationRunCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class StartMetadataGenerationRunCommand extends $Command
  .classBuilder<
    StartMetadataGenerationRunCommandInput,
    StartMetadataGenerationRunCommandOutput,
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
  .s("DataZone", "StartMetadataGenerationRun", {})
  .n("DataZoneClient", "StartMetadataGenerationRunCommand")
  .f(void 0, void 0)
  .ser(se_StartMetadataGenerationRunCommand)
  .de(de_StartMetadataGenerationRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataGenerationRunInput;
      output: StartMetadataGenerationRunOutput;
    };
    sdk: {
      input: StartMetadataGenerationRunCommandInput;
      output: StartMetadataGenerationRunCommandOutput;
    };
  };
}
