// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { CreateKxUserRequest, CreateKxUserResponse } from "../models/models_0";
import { CreateKxUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxUserCommand}.
 */
export interface CreateKxUserCommandInput extends CreateKxUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxUserCommand}.
 */
export interface CreateKxUserCommandOutput extends CreateKxUserResponse, __MetadataBearer {}

/**
 * <p>Creates a user in FinSpace kdb environment with an associated IAM role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxUserCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxUserCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxUserRequest
 *   environmentId: "STRING_VALUE", // required
 *   userName: "STRING_VALUE", // required
 *   iamRole: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateKxUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxUserResponse
 * //   userName: "STRING_VALUE",
 * //   userArn: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   iamRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateKxUserCommandInput - {@link CreateKxUserCommandInput}
 * @returns {@link CreateKxUserCommandOutput}
 * @see {@link CreateKxUserCommandInput} for command's `input` shape.
 * @see {@link CreateKxUserCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource group already exists.</p>
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
export class CreateKxUserCommand extends $Command
  .classBuilder<
    CreateKxUserCommandInput,
    CreateKxUserCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "CreateKxUser", {})
  .n("FinspaceClient", "CreateKxUserCommand")
  .sc(CreateKxUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxUserRequest;
      output: CreateKxUserResponse;
    };
    sdk: {
      input: CreateKxUserCommandInput;
      output: CreateKxUserCommandOutput;
    };
  };
}
