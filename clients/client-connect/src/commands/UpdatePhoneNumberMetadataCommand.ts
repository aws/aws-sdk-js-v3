// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePhoneNumberMetadataRequest } from "../models/models_3";
import { UpdatePhoneNumberMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberMetadataCommand}.
 */
export interface UpdatePhoneNumberMetadataCommandInput extends UpdatePhoneNumberMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberMetadataCommand}.
 */
export interface UpdatePhoneNumberMetadataCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a phone number’s metadata.</p>
 *          <important>
 *             <p>To verify the status of a previous UpdatePhoneNumberMetadata operation, call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePhoneNumberMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePhoneNumberMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePhoneNumberMetadataRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   PhoneNumberDescription: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePhoneNumberMetadataCommandInput - {@link UpdatePhoneNumberMetadataCommandInput}
 * @returns {@link UpdatePhoneNumberMetadataCommandOutput}
 * @see {@link UpdatePhoneNumberMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
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
export class UpdatePhoneNumberMetadataCommand extends $Command
  .classBuilder<
    UpdatePhoneNumberMetadataCommandInput,
    UpdatePhoneNumberMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdatePhoneNumberMetadata", {})
  .n("ConnectClient", "UpdatePhoneNumberMetadataCommand")
  .sc(UpdatePhoneNumberMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdatePhoneNumberMetadataCommandInput;
      output: UpdatePhoneNumberMetadataCommandOutput;
    };
  };
}
