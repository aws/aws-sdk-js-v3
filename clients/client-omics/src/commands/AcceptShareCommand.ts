// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptShareRequest, AcceptShareResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_AcceptShareCommand, se_AcceptShareCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptShareCommand}.
 */
export interface AcceptShareCommandInput extends AcceptShareRequest {}
/**
 * @public
 *
 * The output of {@link AcceptShareCommand}.
 */
export interface AcceptShareCommandOutput extends AcceptShareResponse, __MetadataBearer {}

/**
 * <p>Accept a resource share request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, AcceptShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, AcceptShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // AcceptShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new AcceptShareCommand(input);
 * const response = await client.send(command);
 * // { // AcceptShareResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptShareCommandInput - {@link AcceptShareCommandInput}
 * @returns {@link AcceptShareCommandOutput}
 * @see {@link AcceptShareCommandInput} for command's `input` shape.
 * @see {@link AcceptShareCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class AcceptShareCommand extends $Command
  .classBuilder<
    AcceptShareCommandInput,
    AcceptShareCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "AcceptShare", {})
  .n("OmicsClient", "AcceptShareCommand")
  .f(void 0, void 0)
  .ser(se_AcceptShareCommand)
  .de(de_AcceptShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptShareRequest;
      output: AcceptShareResponse;
    };
    sdk: {
      input: AcceptShareCommandInput;
      output: AcceptShareCommandOutput;
    };
  };
}
