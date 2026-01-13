// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterEventTopicRequest, DeregisterEventTopicResult } from "../models/models_0";
import { DeregisterEventTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterEventTopicCommand}.
 */
export interface DeregisterEventTopicCommandInput extends DeregisterEventTopicRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterEventTopicCommand}.
 */
export interface DeregisterEventTopicCommandOutput extends DeregisterEventTopicResult, __MetadataBearer {}

/**
 * <p>Removes the specified directory as a publisher to the specified Amazon SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeregisterEventTopicRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterEventTopicCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterEventTopicCommandInput - {@link DeregisterEventTopicCommandInput}
 * @returns {@link DeregisterEventTopicCommandOutput}
 * @see {@link DeregisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link DeregisterEventTopicCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To remove an event topic
 * ```javascript
 * // The following example removes the specified directory as a publisher to the specified SNS topic.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   TopicName: "snstopicexample"
 * };
 * const command = new DeregisterEventTopicCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterEventTopicCommand extends $Command
  .classBuilder<
    DeregisterEventTopicCommandInput,
    DeregisterEventTopicCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeregisterEventTopic", {})
  .n("DirectoryServiceClient", "DeregisterEventTopicCommand")
  .sc(DeregisterEventTopic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterEventTopicRequest;
      output: {};
    };
    sdk: {
      input: DeregisterEventTopicCommandInput;
      output: DeregisterEventTopicCommandOutput;
    };
  };
}
