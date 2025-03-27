// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetGroupProfileInput,
  GetGroupProfileOutput,
  GetGroupProfileOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_GetGroupProfileCommand, se_GetGroupProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupProfileCommand}.
 */
export interface GetGroupProfileCommandInput extends GetGroupProfileInput {}
/**
 * @public
 *
 * The output of {@link GetGroupProfileCommand}.
 */
export interface GetGroupProfileCommandOutput extends GetGroupProfileOutput, __MetadataBearer {}

/**
 * <p>Gets a group profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetGroupProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetGroupProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetGroupProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetGroupProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED",
 * //   groupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupProfileCommandInput - {@link GetGroupProfileCommandInput}
 * @returns {@link GetGroupProfileCommandOutput}
 * @see {@link GetGroupProfileCommandInput} for command's `input` shape.
 * @see {@link GetGroupProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class GetGroupProfileCommand extends $Command
  .classBuilder<
    GetGroupProfileCommandInput,
    GetGroupProfileCommandOutput,
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
  .s("DataZone", "GetGroupProfile", {})
  .n("DataZoneClient", "GetGroupProfileCommand")
  .f(void 0, GetGroupProfileOutputFilterSensitiveLog)
  .ser(se_GetGroupProfileCommand)
  .de(de_GetGroupProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupProfileInput;
      output: GetGroupProfileOutput;
    };
    sdk: {
      input: GetGroupProfileCommandInput;
      output: GetGroupProfileCommandOutput;
    };
  };
}
