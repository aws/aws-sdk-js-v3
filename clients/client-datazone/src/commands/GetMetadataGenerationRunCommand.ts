// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetadataGenerationRunInput, GetMetadataGenerationRunOutput } from "../models/models_1";
import { de_GetMetadataGenerationRunCommand, se_GetMetadataGenerationRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetadataGenerationRunCommand}.
 */
export interface GetMetadataGenerationRunCommandInput extends GetMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link GetMetadataGenerationRunCommand}.
 */
export interface GetMetadataGenerationRunCommandOutput extends GetMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * <p>Gets a metadata generation run in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataGenerationRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   target: { // MetadataGenerationRunTarget
 * //     type: "ASSET", // required
 * //     identifier: "STRING_VALUE", // required
 * //     revision: "STRING_VALUE",
 * //   },
 * //   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED",
 * //   type: "BUSINESS_DESCRIPTIONS",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetMetadataGenerationRunCommandInput - {@link GetMetadataGenerationRunCommandInput}
 * @returns {@link GetMetadataGenerationRunCommandOutput}
 * @see {@link GetMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link GetMetadataGenerationRunCommandOutput} for command's `response` shape.
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
export class GetMetadataGenerationRunCommand extends $Command
  .classBuilder<
    GetMetadataGenerationRunCommandInput,
    GetMetadataGenerationRunCommandOutput,
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
  .s("DataZone", "GetMetadataGenerationRun", {})
  .n("DataZoneClient", "GetMetadataGenerationRunCommand")
  .f(void 0, void 0)
  .ser(se_GetMetadataGenerationRunCommand)
  .de(de_GetMetadataGenerationRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetadataGenerationRunInput;
      output: GetMetadataGenerationRunOutput;
    };
    sdk: {
      input: GetMetadataGenerationRunCommandInput;
      output: GetMetadataGenerationRunCommandOutput;
    };
  };
}
