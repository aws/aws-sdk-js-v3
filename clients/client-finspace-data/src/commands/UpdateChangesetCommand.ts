// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { UpdateChangesetRequest, UpdateChangesetResponse } from "../models/models_0";
import { de_UpdateChangesetCommand, se_UpdateChangesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChangesetCommand}.
 */
export interface UpdateChangesetCommandInput extends UpdateChangesetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChangesetCommand}.
 */
export interface UpdateChangesetCommandOutput extends UpdateChangesetResponse, __MetadataBearer {}

/**
 * <p>Updates a FinSpace Changeset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdateChangesetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdateChangesetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // UpdateChangesetRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   changesetId: "STRING_VALUE", // required
 *   sourceParams: { // SourceParams // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   formatParams: { // FormatParams // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateChangesetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChangesetResponse
 * //   changesetId: "STRING_VALUE",
 * //   datasetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateChangesetCommandInput - {@link UpdateChangesetCommandInput}
 * @returns {@link UpdateChangesetCommandOutput}
 * @see {@link UpdateChangesetCommandInput} for command's `input` shape.
 * @see {@link UpdateChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class UpdateChangesetCommand extends $Command
  .classBuilder<
    UpdateChangesetCommandInput,
    UpdateChangesetCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "UpdateChangeset", {})
  .n("FinspaceDataClient", "UpdateChangesetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChangesetCommand)
  .de(de_UpdateChangesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChangesetRequest;
      output: UpdateChangesetResponse;
    };
    sdk: {
      input: UpdateChangesetCommandInput;
      output: UpdateChangesetCommandOutput;
    };
  };
}
