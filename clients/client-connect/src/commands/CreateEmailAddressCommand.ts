// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEmailAddressRequest, CreateEmailAddressResponse } from "../models/models_0";
import { CreateEmailAddress } from "../schemas/schemas_15_Contact";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEmailAddressCommand}.
 */
export interface CreateEmailAddressCommandInput extends CreateEmailAddressRequest {}
/**
 * @public
 *
 * The output of {@link CreateEmailAddressCommand}.
 */
export interface CreateEmailAddressCommandOutput extends CreateEmailAddressResponse, __MetadataBearer {}

/**
 * <p>Create new email address in the specified Amazon Connect instance. For more information
 *    about email addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-email-address1.html">Create email addresses</a> in the
 *     Amazon Connect Administrator Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateEmailAddressCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateEmailAddressCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateEmailAddressRequest
 *   Description: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEmailAddressCommand(input);
 * const response = await client.send(command);
 * // { // CreateEmailAddressResponse
 * //   EmailAddressId: "STRING_VALUE",
 * //   EmailAddressArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEmailAddressCommandInput - {@link CreateEmailAddressCommandInput}
 * @returns {@link CreateEmailAddressCommandOutput}
 * @see {@link CreateEmailAddressCommandInput} for command's `input` shape.
 * @see {@link CreateEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateEmailAddressCommand extends $Command
  .classBuilder<
    CreateEmailAddressCommandInput,
    CreateEmailAddressCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateEmailAddress", {})
  .n("ConnectClient", "CreateEmailAddressCommand")
  .sc(CreateEmailAddress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEmailAddressRequest;
      output: CreateEmailAddressResponse;
    };
    sdk: {
      input: CreateEmailAddressCommandInput;
      output: CreateEmailAddressCommandOutput;
    };
  };
}
