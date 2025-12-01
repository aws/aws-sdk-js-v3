// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetContactAttributesRequest, GetContactAttributesResponse } from "../models/models_1";
import { GetContactAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactAttributesCommand}.
 */
export interface GetContactAttributesCommandInput extends GetContactAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetContactAttributesCommand}.
 */
export interface GetContactAttributesCommandOutput extends GetContactAttributesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the contact attributes for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetContactAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 * };
 * const command = new GetContactAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetContactAttributesResponse
 * //   Attributes: { // Attributes
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContactAttributesCommandInput - {@link GetContactAttributesCommandInput}
 * @returns {@link GetContactAttributesCommandOutput}
 * @see {@link GetContactAttributesCommandInput} for command's `input` shape.
 * @see {@link GetContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetContactAttributesCommand extends $Command
  .classBuilder<
    GetContactAttributesCommandInput,
    GetContactAttributesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetContactAttributes", {})
  .n("ConnectClient", "GetContactAttributesCommand")
  .sc(GetContactAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactAttributesRequest;
      output: GetContactAttributesResponse;
    };
    sdk: {
      input: GetContactAttributesCommandInput;
      output: GetContactAttributesCommandOutput;
    };
  };
}
