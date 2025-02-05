// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeRevisionRequest, RevokeRevisionResponse } from "../models/models_0";
import { de_RevokeRevisionCommand, se_RevokeRevisionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeRevisionCommand}.
 */
export interface RevokeRevisionCommandInput extends RevokeRevisionRequest {}
/**
 * @public
 *
 * The output of {@link RevokeRevisionCommand}.
 */
export interface RevokeRevisionCommandOutput extends RevokeRevisionResponse, __MetadataBearer {}

/**
 * <p>This operation revokes subscribers' access to a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, RevokeRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, RevokeRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataExchangeClient(config);
 * const input = { // RevokeRevisionRequest
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 *   RevocationComment: "STRING_VALUE", // required
 * };
 * const command = new RevokeRevisionCommand(input);
 * const response = await client.send(command);
 * // { // RevokeRevisionResponse
 * //   Arn: "STRING_VALUE",
 * //   Comment: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DataSetId: "STRING_VALUE",
 * //   Finalized: true || false,
 * //   Id: "STRING_VALUE",
 * //   SourceId: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   RevocationComment: "STRING_VALUE",
 * //   Revoked: true || false,
 * //   RevokedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RevokeRevisionCommandInput - {@link RevokeRevisionCommandInput}
 * @returns {@link RevokeRevisionCommandOutput}
 * @see {@link RevokeRevisionCommandInput} for command's `input` shape.
 * @see {@link RevokeRevisionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RevokeRevisionCommand extends $Command
  .classBuilder<
    RevokeRevisionCommandInput,
    RevokeRevisionCommandOutput,
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
  .s("DataExchange", "RevokeRevision", {})
  .n("DataExchangeClient", "RevokeRevisionCommand")
  .f(void 0, void 0)
  .ser(se_RevokeRevisionCommand)
  .de(de_RevokeRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeRevisionRequest;
      output: RevokeRevisionResponse;
    };
    sdk: {
      input: RevokeRevisionCommandInput;
      output: RevokeRevisionCommandOutput;
    };
  };
}
