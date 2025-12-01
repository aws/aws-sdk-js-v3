// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutUsersRequest } from "../models/models_0";
import type {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { PutUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutUsersCommand}.
 */
export interface PutUsersCommandInput extends PutUsersRequest {}
/**
 * @public
 *
 * The output of {@link PutUsersCommand}.
 */
export interface PutUsersCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more users to a Users dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing users individually</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutUsersCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutUsersCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * // import type { PersonalizeEventsClientConfig } from "@aws-sdk/client-personalize-events";
 * const config = {}; // type is PersonalizeEventsClientConfig
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutUsersRequest
 *   datasetArn: "STRING_VALUE", // required
 *   users: [ // UserList // required
 *     { // User
 *       userId: "STRING_VALUE", // required
 *       properties: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutUsersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUsersCommandInput - {@link PutUsersCommandInput}
 * @returns {@link PutUsersCommandOutput}
 * @see {@link PutUsersCommandInput} for command's `input` shape.
 * @see {@link PutUsersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 *
 * @public
 */
export class PutUsersCommand extends $Command
  .classBuilder<
    PutUsersCommandInput,
    PutUsersCommandOutput,
    PersonalizeEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalizeEvents", "PutUsers", {})
  .n("PersonalizeEventsClient", "PutUsersCommand")
  .sc(PutUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutUsersRequest;
      output: {};
    };
    sdk: {
      input: PutUsersCommandInput;
      output: PutUsersCommandOutput;
    };
  };
}
