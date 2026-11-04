// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterEventTopicRequest, DeregisterEventTopicResult } from "../models/models_0";
import { DeregisterEventTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class DeregisterEventTopicCommand extends command<DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterEventTopic",
  DeregisterEventTopic$
) {
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
