// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { CreateChangesetRequest, CreateChangesetResponse } from "../models/models_0";
import { de_CreateChangesetCommand, se_CreateChangesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChangesetCommand}.
 */
export interface CreateChangesetCommandInput extends CreateChangesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateChangesetCommand}.
 */
export interface CreateChangesetCommandOutput extends CreateChangesetResponse, __MetadataBearer {}

/**
 * <p>Creates a new Changeset in a FinSpace Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateChangesetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateChangesetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // CreateChangesetRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   changeType: "REPLACE" || "APPEND" || "MODIFY", // required
 *   sourceParams: { // SourceParams // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   formatParams: { // FormatParams // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChangesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateChangesetResponse
 * //   datasetId: "STRING_VALUE",
 * //   changesetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChangesetCommandInput - {@link CreateChangesetCommandInput}
 * @returns {@link CreateChangesetCommandOutput}
 * @see {@link CreateChangesetCommandInput} for command's `input` shape.
 * @see {@link CreateChangesetCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
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
export class CreateChangesetCommand extends $Command
  .classBuilder<
    CreateChangesetCommandInput,
    CreateChangesetCommandOutput,
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
  .s("AWSHabaneroPublicAPI", "CreateChangeset", {})
  .n("FinspaceDataClient", "CreateChangesetCommand")
  .f(void 0, void 0)
  .ser(se_CreateChangesetCommand)
  .de(de_CreateChangesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChangesetRequest;
      output: CreateChangesetResponse;
    };
    sdk: {
      input: CreateChangesetCommandInput;
      output: CreateChangesetCommandOutput;
    };
  };
}
