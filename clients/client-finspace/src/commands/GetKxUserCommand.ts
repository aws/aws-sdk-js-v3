// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxUserRequest, GetKxUserResponse } from "../models/models_0";
import { de_GetKxUserCommand, se_GetKxUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxUserCommand}.
 */
export interface GetKxUserCommandInput extends GetKxUserRequest {}
/**
 * @public
 *
 * The output of {@link GetKxUserCommand}.
 */
export interface GetKxUserCommandOutput extends GetKxUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified kdb user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxUserCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxUserCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // GetKxUserRequest
 *   userName: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetKxUserCommand(input);
 * const response = await client.send(command);
 * // { // GetKxUserResponse
 * //   userName: "STRING_VALUE",
 * //   userArn: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   iamRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxUserCommandInput - {@link GetKxUserCommandInput}
 * @returns {@link GetKxUserCommandOutput}
 * @see {@link GetKxUserCommandInput} for command's `input` shape.
 * @see {@link GetKxUserCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
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
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class GetKxUserCommand extends $Command
  .classBuilder<
    GetKxUserCommandInput,
    GetKxUserCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "GetKxUser", {})
  .n("FinspaceClient", "GetKxUserCommand")
  .f(void 0, void 0)
  .ser(se_GetKxUserCommand)
  .de(de_GetKxUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxUserRequest;
      output: GetKxUserResponse;
    };
    sdk: {
      input: GetKxUserCommandInput;
      output: GetKxUserCommandOutput;
    };
  };
}
