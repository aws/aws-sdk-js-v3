// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { DisableUserRequest, DisableUserResponse } from "../models/models_0";
import { de_DisableUserCommand, se_DisableUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableUserCommand}.
 */
export interface DisableUserCommandInput extends DisableUserRequest {}
/**
 * @public
 *
 * The output of {@link DisableUserCommand}.
 */
export interface DisableUserCommandOutput extends DisableUserResponse, __MetadataBearer {}

/**
 * <p>Denies access to the FinSpace web application and API for the specified user.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, DisableUserCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, DisableUserCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // DisableUserRequest
 *   userId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisableUserCommand(input);
 * const response = await client.send(command);
 * // { // DisableUserResponse
 * //   userId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisableUserCommandInput - {@link DisableUserCommandInput}
 * @returns {@link DisableUserCommandOutput}
 * @see {@link DisableUserCommandInput} for command's `input` shape.
 * @see {@link DisableUserCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class DisableUserCommand extends $Command
  .classBuilder<
    DisableUserCommandInput,
    DisableUserCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "DisableUser", {})
  .n("FinspaceDataClient", "DisableUserCommand")
  .f(void 0, void 0)
  .ser(se_DisableUserCommand)
  .de(de_DisableUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableUserRequest;
      output: DisableUserResponse;
    };
    sdk: {
      input: DisableUserCommandInput;
      output: DisableUserCommandOutput;
    };
  };
}
