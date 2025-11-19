// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEmailAddressMetadataRequest, UpdateEmailAddressMetadataResponse } from "../models/models_2";
import { UpdateEmailAddressMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEmailAddressMetadataCommand}.
 */
export interface UpdateEmailAddressMetadataCommandInput extends UpdateEmailAddressMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailAddressMetadataCommand}.
 */
export interface UpdateEmailAddressMetadataCommandOutput extends UpdateEmailAddressMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates an email address metadata. For more information about email addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-email-address1.html">Create email
 *     addresses</a> in the Amazon Connect Administrator Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateEmailAddressMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateEmailAddressMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateEmailAddressMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EmailAddressId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateEmailAddressMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEmailAddressMetadataResponse
 * //   EmailAddressId: "STRING_VALUE",
 * //   EmailAddressArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEmailAddressMetadataCommandInput - {@link UpdateEmailAddressMetadataCommandInput}
 * @returns {@link UpdateEmailAddressMetadataCommandOutput}
 * @see {@link UpdateEmailAddressMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailAddressMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class UpdateEmailAddressMetadataCommand extends $Command
  .classBuilder<
    UpdateEmailAddressMetadataCommandInput,
    UpdateEmailAddressMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateEmailAddressMetadata", {})
  .n("ConnectClient", "UpdateEmailAddressMetadataCommand")
  .sc(UpdateEmailAddressMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEmailAddressMetadataRequest;
      output: UpdateEmailAddressMetadataResponse;
    };
    sdk: {
      input: UpdateEmailAddressMetadataCommandInput;
      output: UpdateEmailAddressMetadataCommandOutput;
    };
  };
}
