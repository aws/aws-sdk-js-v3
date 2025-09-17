// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApiKeyIds, ImportApiKeysRequest } from "../models/models_0";
import { de_ImportApiKeysCommand, se_ImportApiKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type ImportApiKeysCommandInputType = Omit<ImportApiKeysRequest, "body"> & {
  body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link ImportApiKeysCommand}.
 */
export interface ImportApiKeysCommandInput extends ImportApiKeysCommandInputType {}
/**
 * @public
 *
 * The output of {@link ImportApiKeysCommand}.
 */
export interface ImportApiKeysCommandOutput extends ApiKeyIds, __MetadataBearer {}

/**
 * <p>Import API keys from an external source, such as a CSV-formatted file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportApiKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportApiKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // ImportApiKeysRequest
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   format: "csv", // required
 *   failOnWarnings: true || false,
 * };
 * const command = new ImportApiKeysCommand(input);
 * const response = await client.send(command);
 * // { // ApiKeyIds
 * //   ids: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   warnings: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ImportApiKeysCommandInput - {@link ImportApiKeysCommandInput}
 * @returns {@link ImportApiKeysCommandOutput}
 * @see {@link ImportApiKeysCommandInput} for command's `input` shape.
 * @see {@link ImportApiKeysCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 * @public
 */
export class ImportApiKeysCommand extends $Command
  .classBuilder<
    ImportApiKeysCommandInput,
    ImportApiKeysCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "ImportApiKeys", {})
  .n("APIGatewayClient", "ImportApiKeysCommand")
  .f(void 0, void 0)
  .ser(se_ImportApiKeysCommand)
  .de(de_ImportApiKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportApiKeysRequest;
      output: ApiKeyIds;
    };
    sdk: {
      input: ImportApiKeysCommandInput;
      output: ImportApiKeysCommandOutput;
    };
  };
}
