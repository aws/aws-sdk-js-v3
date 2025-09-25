// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendApiAssetRequest, SendApiAssetResponse } from "../models/models_0";
import { SendApiAsset } from "../schemas/schemas_6_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendApiAssetCommand}.
 */
export interface SendApiAssetCommandInput extends SendApiAssetRequest {}
/**
 * @public
 *
 * The output of {@link SendApiAssetCommand}.
 */
export interface SendApiAssetCommandOutput extends SendApiAssetResponse, __MetadataBearer {}

/**
 * <p>This operation invokes an API Gateway API asset. The request is proxied to the
 *          provider’s API Gateway API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, SendApiAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, SendApiAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // SendApiAssetRequest
 *   Body: "STRING_VALUE",
 *   QueryStringParameters: { // MapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AssetId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   RequestHeaders: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Method: "STRING_VALUE",
 *   Path: "STRING_VALUE",
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new SendApiAssetCommand(input);
 * const response = await client.send(command);
 * // { // SendApiAssetResponse
 * //   Body: "STRING_VALUE",
 * //   ResponseHeaders: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SendApiAssetCommandInput - {@link SendApiAssetCommandInput}
 * @returns {@link SendApiAssetCommandOutput}
 * @see {@link SendApiAssetCommandInput} for command's `input` shape.
 * @see {@link SendApiAssetCommandOutput} for command's `response` shape.
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
export class SendApiAssetCommand extends $Command
  .classBuilder<
    SendApiAssetCommandInput,
    SendApiAssetCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "SendApiAsset", {})
  .n("DataExchangeClient", "SendApiAssetCommand")
  .sc(SendApiAsset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendApiAssetRequest;
      output: SendApiAssetResponse;
    };
    sdk: {
      input: SendApiAssetCommandInput;
      output: SendApiAssetCommandOutput;
    };
  };
}
