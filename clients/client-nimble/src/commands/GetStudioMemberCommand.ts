// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetStudioMemberRequest, GetStudioMemberResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetStudioMemberCommand, se_GetStudioMemberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStudioMemberCommand}.
 */
export interface GetStudioMemberCommandInput extends GetStudioMemberRequest {}
/**
 * @public
 *
 * The output of {@link GetStudioMemberCommand}.
 */
export interface GetStudioMemberCommandOutput extends GetStudioMemberResponse, __MetadataBearer {}

/**
 * <p>Get a user's membership in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetStudioMemberRequest
 *   principalId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetStudioMemberCommand(input);
 * const response = await client.send(command);
 * // { // GetStudioMemberResponse
 * //   member: { // StudioMembership
 * //     identityStoreId: "STRING_VALUE",
 * //     persona: "ADMINISTRATOR",
 * //     principalId: "STRING_VALUE",
 * //     sid: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStudioMemberCommandInput - {@link GetStudioMemberCommandInput}
 * @returns {@link GetStudioMemberCommandOutput}
 * @see {@link GetStudioMemberCommandInput} for command's `input` shape.
 * @see {@link GetStudioMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class GetStudioMemberCommand extends $Command
  .classBuilder<
    GetStudioMemberCommandInput,
    GetStudioMemberCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "GetStudioMember", {})
  .n("NimbleClient", "GetStudioMemberCommand")
  .f(void 0, void 0)
  .ser(se_GetStudioMemberCommand)
  .de(de_GetStudioMemberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStudioMemberRequest;
      output: GetStudioMemberResponse;
    };
    sdk: {
      input: GetStudioMemberCommandInput;
      output: GetStudioMemberCommandOutput;
    };
  };
}
