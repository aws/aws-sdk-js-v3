// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGraphRequest, CreateGraphResponse } from "../models/models_0";
import { de_CreateGraphCommand, se_CreateGraphCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGraphCommand}.
 */
export interface CreateGraphCommandInput extends CreateGraphRequest {}
/**
 * @public
 *
 * The output of {@link CreateGraphCommand}.
 */
export interface CreateGraphCommandOutput extends CreateGraphResponse, __MetadataBearer {}

/**
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          administrator account. This operation is called by the account that is enabling Detective.</p>
 *          <p>The operation also enables Detective for the calling account in the currently
 *          selected Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the administrator account for one behavior graph within a Region.
 *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
 *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // CreateGraphRequest
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGraphCommand(input);
 * const response = await client.send(command);
 * // { // CreateGraphResponse
 * //   GraphArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGraphCommandInput - {@link CreateGraphCommandInput}
 * @returns {@link CreateGraphCommandOutput}
 * @see {@link CreateGraphCommandInput} for command's `input` shape.
 * @see {@link CreateGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class CreateGraphCommand extends $Command
  .classBuilder<
    CreateGraphCommandInput,
    CreateGraphCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDetective", "CreateGraph", {})
  .n("DetectiveClient", "CreateGraphCommand")
  .f(void 0, void 0)
  .ser(se_CreateGraphCommand)
  .de(de_CreateGraphCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGraphRequest;
      output: CreateGraphResponse;
    };
    sdk: {
      input: CreateGraphCommandInput;
      output: CreateGraphCommandOutput;
    };
  };
}
