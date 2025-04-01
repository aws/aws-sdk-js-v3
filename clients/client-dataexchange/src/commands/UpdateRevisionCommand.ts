// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRevisionRequest, UpdateRevisionResponse } from "../models/models_0";
import { de_UpdateRevisionCommand, se_UpdateRevisionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRevisionCommand}.
 */
export interface UpdateRevisionCommandInput extends UpdateRevisionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRevisionCommand}.
 */
export interface UpdateRevisionCommandOutput extends UpdateRevisionResponse, __MetadataBearer {}

/**
 * <p>This operation updates a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // UpdateRevisionRequest
 *   Comment: "STRING_VALUE",
 *   DataSetId: "STRING_VALUE", // required
 *   Finalized: true || false,
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRevisionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRevisionResponse
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
 * @param UpdateRevisionCommandInput - {@link UpdateRevisionCommandInput}
 * @returns {@link UpdateRevisionCommandOutput}
 * @see {@link UpdateRevisionCommandInput} for command's `input` shape.
 * @see {@link UpdateRevisionCommandOutput} for command's `response` shape.
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
export class UpdateRevisionCommand extends $Command
  .classBuilder<
    UpdateRevisionCommandInput,
    UpdateRevisionCommandOutput,
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
  .s("DataExchange", "UpdateRevision", {})
  .n("DataExchangeClient", "UpdateRevisionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRevisionCommand)
  .de(de_UpdateRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRevisionRequest;
      output: UpdateRevisionResponse;
    };
    sdk: {
      input: UpdateRevisionCommandInput;
      output: UpdateRevisionCommandOutput;
    };
  };
}
