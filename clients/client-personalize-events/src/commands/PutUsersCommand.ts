// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutUsersRequest } from "../models/models_0";
import { PutUsers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds one or more users to a Users dataset. For more information see [Importing users individually](https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html).
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeEventsServiceException}
 *
 * Base exception class for all service exceptions from PersonalizeEvents service.
 *
 * @public
 */
export class PutUsersCommand extends command<PutUsersCommandInput, PutUsersCommandOutput>(
  _ep0,
  _mw0,
  "PutUsers",
  PutUsers$
) {
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
