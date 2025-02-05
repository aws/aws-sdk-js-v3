// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataGrantRequest } from "../models/models_0";
import { de_DeleteDataGrantCommand, se_DeleteDataGrantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataGrantCommand}.
 */
export interface DeleteDataGrantCommandInput extends DeleteDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataGrantCommand}.
 */
export interface DeleteDataGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes a data grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteDataGrantRequest
 *   DataGrantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataGrantCommandInput - {@link DeleteDataGrantCommandInput}
 * @returns {@link DeleteDataGrantCommandOutput}
 * @see {@link DeleteDataGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteDataGrantCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteDataGrantCommand extends $Command
  .classBuilder<
    DeleteDataGrantCommandInput,
    DeleteDataGrantCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "DeleteDataGrant", {})
  .n("DataExchangeClient", "DeleteDataGrantCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataGrantCommand)
  .de(de_DeleteDataGrantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataGrantRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataGrantCommandInput;
      output: DeleteDataGrantCommandOutput;
    };
  };
}
