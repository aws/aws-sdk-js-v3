// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { EnableUserRequest, EnableUserResponse } from "../models/models_0";
import { EnableUser } from "../schemas/schemas_3_User";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableUserCommand}.
 */
export interface EnableUserCommandInput extends EnableUserRequest {}
/**
 * @public
 *
 * The output of {@link EnableUserCommand}.
 */
export interface EnableUserCommandOutput extends EnableUserResponse, __MetadataBearer {}

/**
 * <p> Allows the specified user to access the FinSpace web application and API.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, EnableUserCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, EnableUserCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // EnableUserRequest
 *   userId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new EnableUserCommand(input);
 * const response = await client.send(command);
 * // { // EnableUserResponse
 * //   userId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableUserCommandInput - {@link EnableUserCommandInput}
 * @returns {@link EnableUserCommandOutput}
 * @see {@link EnableUserCommandInput} for command's `input` shape.
 * @see {@link EnableUserCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
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
export class EnableUserCommand extends $Command
  .classBuilder<
    EnableUserCommandInput,
    EnableUserCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "EnableUser", {})
  .n("FinspaceDataClient", "EnableUserCommand")
  .sc(EnableUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableUserRequest;
      output: EnableUserResponse;
    };
    sdk: {
      input: EnableUserCommandInput;
      output: EnableUserCommandOutput;
    };
  };
}
