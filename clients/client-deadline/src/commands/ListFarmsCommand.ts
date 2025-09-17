// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFarmsRequest, ListFarmsResponse } from "../models/models_0";
import { de_ListFarmsCommand, se_ListFarmsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFarmsCommand}.
 */
export interface ListFarmsCommandInput extends ListFarmsRequest {}
/**
 * @public
 *
 * The output of {@link ListFarmsCommand}.
 */
export interface ListFarmsCommandOutput extends ListFarmsResponse, __MetadataBearer {}

/**
 * <p>Lists farms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListFarmsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListFarmsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListFarmsRequest
 *   nextToken: "STRING_VALUE",
 *   principalId: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFarmsCommand(input);
 * const response = await client.send(command);
 * // { // ListFarmsResponse
 * //   nextToken: "STRING_VALUE",
 * //   farms: [ // FarmSummaries // required
 * //     { // FarmSummary
 * //       farmId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       kmsKeyArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFarmsCommandInput - {@link ListFarmsCommandInput}
 * @returns {@link ListFarmsCommandOutput}
 * @see {@link ListFarmsCommandInput} for command's `input` shape.
 * @see {@link ListFarmsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListFarmsCommand extends $Command
  .classBuilder<
    ListFarmsCommandInput,
    ListFarmsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListFarms", {})
  .n("DeadlineClient", "ListFarmsCommand")
  .f(void 0, void 0)
  .ser(se_ListFarmsCommand)
  .de(de_ListFarmsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFarmsRequest;
      output: ListFarmsResponse;
    };
    sdk: {
      input: ListFarmsCommandInput;
      output: ListFarmsCommandOutput;
    };
  };
}
