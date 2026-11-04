// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendApiAssetRequest, SendApiAssetResponse } from "../models/models_0";
import { SendApiAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.
 *
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
 *
 * Access to the resource is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class SendApiAssetCommand extends command<SendApiAssetCommandInput, SendApiAssetCommandOutput>(
  _ep0,
  _mw0,
  "SendApiAsset",
  SendApiAsset$
) {
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
