// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFormTypeInput, GetFormTypeOutput, GetFormTypeOutputFilterSensitiveLog } from "../models/models_1";
import { de_GetFormTypeCommand, se_GetFormTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFormTypeCommand}.
 */
export interface GetFormTypeCommandInput extends GetFormTypeInput {}
/**
 * @public
 *
 * The output of {@link GetFormTypeCommand}.
 */
export interface GetFormTypeCommandOutput extends GetFormTypeOutput, __MetadataBearer {}

/**
 * <p>Gets a metadata form type in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetFormTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetFormTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetFormTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   formTypeIdentifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetFormTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetFormTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   model: { // Model Union: only one key present
 * //     smithy: "STRING_VALUE",
 * //   },
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * //   status: "ENABLED" || "DISABLED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   imports: [ // ImportList
 * //     { // Import
 * //       name: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFormTypeCommandInput - {@link GetFormTypeCommandInput}
 * @returns {@link GetFormTypeCommandOutput}
 * @see {@link GetFormTypeCommandInput} for command's `input` shape.
 * @see {@link GetFormTypeCommandOutput} for command's `response` shape.
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
export class GetFormTypeCommand extends $Command
  .classBuilder<
    GetFormTypeCommandInput,
    GetFormTypeCommandOutput,
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
  .s("DataZone", "GetFormType", {})
  .n("DataZoneClient", "GetFormTypeCommand")
  .f(void 0, GetFormTypeOutputFilterSensitiveLog)
  .ser(se_GetFormTypeCommand)
  .de(de_GetFormTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFormTypeInput;
      output: GetFormTypeOutput;
    };
    sdk: {
      input: GetFormTypeCommandInput;
      output: GetFormTypeCommandOutput;
    };
  };
}
