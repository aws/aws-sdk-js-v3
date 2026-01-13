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
import type { RegisterEventTopicRequest, RegisterEventTopicResult } from "../models/models_0";
import { RegisterEventTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterEventTopicCommand}.
 */
export interface RegisterEventTopicCommandInput extends RegisterEventTopicRequest {}
/**
 * @public
 *
 * The output of {@link RegisterEventTopicCommand}.
 */
export interface RegisterEventTopicCommandOutput extends RegisterEventTopicResult, __MetadataBearer {}

/**
 * <p>Associates a directory with an Amazon SNS topic. This establishes the directory as a
 *       publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when
 *       the status of your directory changes. You get notified if your directory goes from an Active
 *       status to an Impaired or Inoperable status. You also receive a notification when the directory
 *       returns to an Active status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RegisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RegisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // RegisterEventTopicRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 * };
 * const command = new RegisterEventTopicCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterEventTopicCommandInput - {@link RegisterEventTopicCommandInput}
 * @returns {@link RegisterEventTopicCommandOutput}
 * @see {@link RegisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link RegisterEventTopicCommandOutput} for command's `response` shape.
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
 * @example To register an event topic
 * ```javascript
 * // The following example associates a directory with an SNS topic.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   TopicName: "snstopicexample"
 * };
 * const command = new RegisterEventTopicCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterEventTopicCommand extends $Command
  .classBuilder<
    RegisterEventTopicCommandInput,
    RegisterEventTopicCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "RegisterEventTopic", {})
  .n("DirectoryServiceClient", "RegisterEventTopicCommand")
  .sc(RegisterEventTopic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterEventTopicRequest;
      output: {};
    };
    sdk: {
      input: RegisterEventTopicCommandInput;
      output: RegisterEventTopicCommandOutput;
    };
  };
}
