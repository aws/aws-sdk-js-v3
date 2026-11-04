// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStudioSessionMappingInput } from "../models/models_0";
import { CreateStudioSessionMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandInput extends CreateStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * Maps a user or group to the Amazon EMR Studio specified by `StudioId`, and applies a session policy to refine Studio permissions for that user or group. Use `CreateStudioSessionMapping` to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see [Assign a user or group to your EMR Studio](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // CreateStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 *   SessionPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateStudioSessionMappingCommandInput - {@link CreateStudioSessionMappingCommandInput}
 * @returns {@link CreateStudioSessionMappingCommandOutput}
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Indicates that an error occurred while processing the request and that the request was not completed.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception occurs when there is something wrong with user input.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class CreateStudioSessionMappingCommand extends command<CreateStudioSessionMappingCommandInput, CreateStudioSessionMappingCommandOutput>(
  _ep0,
  _mw0,
  "CreateStudioSessionMapping",
  CreateStudioSessionMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStudioSessionMappingInput;
      output: {};
    };
    sdk: {
      input: CreateStudioSessionMappingCommandInput;
      output: CreateStudioSessionMappingCommandOutput;
    };
  };
}
