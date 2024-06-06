// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIamPortalLoginUrlInput, GetIamPortalLoginUrlOutput } from "../models/models_0";
import { de_GetIamPortalLoginUrlCommand, se_GetIamPortalLoginUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIamPortalLoginUrlCommand}.
 */
export interface GetIamPortalLoginUrlCommandInput extends GetIamPortalLoginUrlInput {}
/**
 * @public
 *
 * The output of {@link GetIamPortalLoginUrlCommand}.
 */
export interface GetIamPortalLoginUrlCommandOutput extends GetIamPortalLoginUrlOutput, __MetadataBearer {}

/**
 * <p>Gets the data portal URL for the specified Amazon DataZone domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetIamPortalLoginUrlCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetIamPortalLoginUrlCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetIamPortalLoginUrlInput
 *   domainIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIamPortalLoginUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetIamPortalLoginUrlOutput
 * //   authCodeUrl: "STRING_VALUE",
 * //   userProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetIamPortalLoginUrlCommandInput - {@link GetIamPortalLoginUrlCommandInput}
 * @returns {@link GetIamPortalLoginUrlCommandOutput}
 * @see {@link GetIamPortalLoginUrlCommandInput} for command's `input` shape.
 * @see {@link GetIamPortalLoginUrlCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetIamPortalLoginUrlCommand extends $Command
  .classBuilder<
    GetIamPortalLoginUrlCommandInput,
    GetIamPortalLoginUrlCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetIamPortalLoginUrl", {})
  .n("DataZoneClient", "GetIamPortalLoginUrlCommand")
  .f(void 0, void 0)
  .ser(se_GetIamPortalLoginUrlCommand)
  .de(de_GetIamPortalLoginUrlCommand)
  .build() {}
