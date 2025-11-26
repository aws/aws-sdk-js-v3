// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UntagContactRequest, UntagContactResponse } from "../models/models_3";
=======
import type { UntagContactRequest, UntagContactResponse } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UntagContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagContactCommand}.
 */
export interface UntagContactCommandInput extends UntagContactRequest {}
/**
 * @public
 *
 * The output of {@link UntagContactCommand}.
 */
export interface UntagContactCommandOutput extends UntagContactResponse, __MetadataBearer {}

/**
 * <p>Removes the specified tags from the contact resource. For more information about this API is used, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/granular-billing.html">Set up granular billing for a detailed
 *     view of your Amazon Connect usage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UntagContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UntagContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UntagContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   TagKeys: [ // ContactTagKeys // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagContactCommandInput - {@link UntagContactCommandInput}
 * @returns {@link UntagContactCommandOutput}
 * @see {@link UntagContactCommandInput} for command's `input` shape.
 * @see {@link UntagContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class UntagContactCommand extends $Command
  .classBuilder<
    UntagContactCommandInput,
    UntagContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UntagContact", {})
  .n("ConnectClient", "UntagContactCommand")
  .sc(UntagContact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagContactRequest;
      output: {};
    };
    sdk: {
      input: UntagContactCommandInput;
      output: UntagContactCommandOutput;
    };
  };
}
