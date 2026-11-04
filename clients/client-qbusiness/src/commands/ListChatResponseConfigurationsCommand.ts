// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChatResponseConfigurationsRequest, ListChatResponseConfigurationsResponse } from "../models/models_0";
import { ListChatResponseConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChatResponseConfigurationsCommand}.
 */
export interface ListChatResponseConfigurationsCommandInput extends ListChatResponseConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListChatResponseConfigurationsCommand}.
 */
export interface ListChatResponseConfigurationsCommandOutput extends ListChatResponseConfigurationsResponse, __MetadataBearer {}

/**
 * Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListChatResponseConfigurationsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListChatResponseConfigurationsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListChatResponseConfigurationsRequest
 *   applicationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChatResponseConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListChatResponseConfigurationsResponse
 * //   chatResponseConfigurations: [ // ChatResponseConfigurations
 * //     { // ChatResponseConfiguration
 * //       chatResponseConfigurationId: "STRING_VALUE", // required
 * //       chatResponseConfigurationArn: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       responseConfigurationSummary: "STRING_VALUE",
 * //       status: "CREATING" || "UPDATING" || "FAILED" || "ACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChatResponseConfigurationsCommandInput - {@link ListChatResponseConfigurationsCommandInput}
 * @returns {@link ListChatResponseConfigurationsCommandOutput}
 * @see {@link ListChatResponseConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListChatResponseConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class ListChatResponseConfigurationsCommand extends command<ListChatResponseConfigurationsCommandInput, ListChatResponseConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListChatResponseConfigurations",
  ListChatResponseConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChatResponseConfigurationsRequest;
      output: ListChatResponseConfigurationsResponse;
    };
    sdk: {
      input: ListChatResponseConfigurationsCommandInput;
      output: ListChatResponseConfigurationsCommandOutput;
    };
  };
}
