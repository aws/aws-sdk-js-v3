// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptDataGrantRequest, AcceptDataGrantResponse } from "../models/models_0";
import { de_AcceptDataGrantCommand, se_AcceptDataGrantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptDataGrantCommand}.
 */
export interface AcceptDataGrantCommandInput extends AcceptDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDataGrantCommand}.
 */
export interface AcceptDataGrantCommandOutput extends AcceptDataGrantResponse, __MetadataBearer {}

/**
 * <p>This operation accepts a data grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, AcceptDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, AcceptDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // AcceptDataGrantRequest
 *   DataGrantArn: "STRING_VALUE", // required
 * };
 * const command = new AcceptDataGrantCommand(input);
 * const response = await client.send(command);
 * // { // AcceptDataGrantResponse
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
 * @param AcceptDataGrantCommandInput - {@link AcceptDataGrantCommandInput}
 * @returns {@link AcceptDataGrantCommandOutput}
 * @see {@link AcceptDataGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptDataGrantCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *          resource.</p>
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
export class AcceptDataGrantCommand extends $Command
  .classBuilder<
    AcceptDataGrantCommandInput,
    AcceptDataGrantCommandOutput,
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
  .s("DataExchange", "AcceptDataGrant", {})
  .n("DataExchangeClient", "AcceptDataGrantCommand")
  .f(void 0, void 0)
  .ser(se_AcceptDataGrantCommand)
  .de(de_AcceptDataGrantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptDataGrantRequest;
      output: AcceptDataGrantResponse;
    };
    sdk: {
      input: AcceptDataGrantCommandInput;
      output: AcceptDataGrantCommandOutput;
    };
  };
}
