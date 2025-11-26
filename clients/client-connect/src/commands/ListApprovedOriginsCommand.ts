// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListApprovedOriginsRequest, ListApprovedOriginsResponse } from "../models/models_1";
import { ListApprovedOrigins } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApprovedOriginsCommand}.
 */
export interface ListApprovedOriginsCommandInput extends ListApprovedOriginsRequest {}
/**
 * @public
 *
 * The output of {@link ListApprovedOriginsCommand}.
 */
export interface ListApprovedOriginsCommandOutput extends ListApprovedOriginsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListApprovedOriginsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListApprovedOriginsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListApprovedOriginsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListApprovedOriginsCommand(input);
 * const response = await client.send(command);
 * // { // ListApprovedOriginsResponse
 * //   Origins: [ // OriginsList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApprovedOriginsCommandInput - {@link ListApprovedOriginsCommandInput}
 * @returns {@link ListApprovedOriginsCommandOutput}
 * @see {@link ListApprovedOriginsCommandInput} for command's `input` shape.
 * @see {@link ListApprovedOriginsCommandOutput} for command's `response` shape.
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
export class ListApprovedOriginsCommand extends $Command
  .classBuilder<
    ListApprovedOriginsCommandInput,
    ListApprovedOriginsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListApprovedOrigins", {})
  .n("ConnectClient", "ListApprovedOriginsCommand")
  .sc(ListApprovedOrigins)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApprovedOriginsRequest;
      output: ListApprovedOriginsResponse;
    };
    sdk: {
      input: ListApprovedOriginsCommandInput;
      output: ListApprovedOriginsCommandOutput;
    };
  };
}
