// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRevisionRequest, GetRevisionResponse } from "../models/models_0";
import { de_GetRevisionCommand, se_GetRevisionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandInput extends GetRevisionRequest {}
/**
 * @public
 *
 * The output of {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandOutput extends GetRevisionResponse, __MetadataBearer {}

/**
 * <p>This operation returns information about a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // GetRevisionRequest
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetRevisionResponse
 * //   Arn: "STRING_VALUE",
 * //   Comment: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DataSetId: "STRING_VALUE",
 * //   Finalized: true || false,
 * //   Id: "STRING_VALUE",
 * //   SourceId: "STRING_VALUE",
 * //   Tags: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   RevocationComment: "STRING_VALUE",
 * //   Revoked: true || false,
 * //   RevokedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRevisionCommandInput - {@link GetRevisionCommandInput}
 * @returns {@link GetRevisionCommandOutput}
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
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
export class GetRevisionCommand extends $Command
  .classBuilder<
    GetRevisionCommandInput,
    GetRevisionCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "GetRevision", {})
  .n("DataExchangeClient", "GetRevisionCommand")
  .f(void 0, void 0)
  .ser(se_GetRevisionCommand)
  .de(de_GetRevisionCommand)
  .build() {}
