// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListConfigurationRevisions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationRevisionsCommand}.
 */
export interface ListConfigurationRevisionsCommandInput extends ListConfigurationRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationRevisionsCommand}.
 */
export interface ListConfigurationRevisionsCommandOutput extends ListConfigurationRevisionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all revisions for the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListConfigurationRevisionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListConfigurationRevisionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // ListConfigurationRevisionsRequest
 *   ConfigurationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationRevisionsResponse
 * //   ConfigurationId: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   Revisions: [ // __listOfConfigurationRevision
 * //     { // ConfigurationRevision
 * //       Created: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Revision: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfigurationRevisionsCommandInput - {@link ListConfigurationRevisionsCommandInput}
 * @returns {@link ListConfigurationRevisionsCommandOutput}
 * @see {@link ListConfigurationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class ListConfigurationRevisionsCommand extends $Command
  .classBuilder<
    ListConfigurationRevisionsCommandInput,
    ListConfigurationRevisionsCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "ListConfigurationRevisions", {})
  .n("MqClient", "ListConfigurationRevisionsCommand")
  .sc(ListConfigurationRevisions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationRevisionsRequest;
      output: ListConfigurationRevisionsResponse;
    };
    sdk: {
      input: ListConfigurationRevisionsCommandInput;
      output: ListConfigurationRevisionsCommandOutput;
    };
  };
}
