// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateShareRequest, CreateShareResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateShareCommand, se_CreateShareCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateShareCommand}.
 */
export interface CreateShareCommandInput extends CreateShareRequest {}
/**
 * @public
 *
 * The output of {@link CreateShareCommand}.
 */
export interface CreateShareCommandOutput extends CreateShareResponse, __MetadataBearer {}

/**
 * <p>Creates a cross-account shared resource. The resource owner makes an offer to share the resource
 *       with the principal subscriber (an AWS user with a different account than the resource owner).</p>
 *          <p>The following resources support cross-account sharing:</p>
 *          <ul>
 *             <li>
 *                <p>Healthomics variant stores</p>
 *             </li>
 *             <li>
 *                <p>Healthomics annotation stores</p>
 *             </li>
 *             <li>
 *                <p>Private workflows</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateShareRequest
 *   resourceArn: "STRING_VALUE", // required
 *   principalSubscriber: "STRING_VALUE", // required
 *   shareName: "STRING_VALUE",
 * };
 * const command = new CreateShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateShareResponse
 * //   shareId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   shareName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateShareCommandInput - {@link CreateShareCommandInput}
 * @returns {@link CreateShareCommandOutput}
 * @see {@link CreateShareCommandInput} for command's `input` shape.
 * @see {@link CreateShareCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class CreateShareCommand extends $Command
  .classBuilder<
    CreateShareCommandInput,
    CreateShareCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateShare", {})
  .n("OmicsClient", "CreateShareCommand")
  .f(void 0, void 0)
  .ser(se_CreateShareCommand)
  .de(de_CreateShareCommand)
  .build() {}
