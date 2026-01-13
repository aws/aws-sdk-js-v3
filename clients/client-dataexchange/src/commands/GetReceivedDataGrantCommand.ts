// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReceivedDataGrantRequest, GetReceivedDataGrantResponse } from "../models/models_0";
import { GetReceivedDataGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReceivedDataGrantCommand}.
 */
export interface GetReceivedDataGrantCommandInput extends GetReceivedDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link GetReceivedDataGrantCommand}.
 */
export interface GetReceivedDataGrantCommandOutput extends GetReceivedDataGrantResponse, __MetadataBearer {}

/**
 * <p>This operation returns information about a received data grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetReceivedDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetReceivedDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // GetReceivedDataGrantRequest
 *   DataGrantArn: "STRING_VALUE", // required
 * };
 * const command = new GetReceivedDataGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetReceivedDataGrantResponse
 * //   Name: "STRING_VALUE", // required
 * //   SenderPrincipal: "STRING_VALUE",
 * //   ReceiverPrincipal: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   AcceptanceState: "STRING_VALUE", // required
 * //   AcceptedAt: new Date("TIMESTAMP"),
 * //   EndsAt: new Date("TIMESTAMP"),
 * //   GrantDistributionScope: "STRING_VALUE", // required
 * //   DataSetId: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetReceivedDataGrantCommandInput - {@link GetReceivedDataGrantCommandInput}
 * @returns {@link GetReceivedDataGrantCommandOutput}
 * @see {@link GetReceivedDataGrantCommandInput} for command's `input` shape.
 * @see {@link GetReceivedDataGrantCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 *
 * @public
 */
export class GetReceivedDataGrantCommand extends $Command
  .classBuilder<
    GetReceivedDataGrantCommandInput,
    GetReceivedDataGrantCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "GetReceivedDataGrant", {})
  .n("DataExchangeClient", "GetReceivedDataGrantCommand")
  .sc(GetReceivedDataGrant$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReceivedDataGrantRequest;
      output: GetReceivedDataGrantResponse;
    };
    sdk: {
      input: GetReceivedDataGrantCommandInput;
      output: GetReceivedDataGrantCommandOutput;
    };
  };
}
