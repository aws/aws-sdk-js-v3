// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccountSettingsInput, UpdateAccountSettingsOutput } from "../models/models_0";
import { UpdateAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandOutput extends UpdateAccountSettingsOutput, __MetadataBearer {}

/**
 * Turns on or turns off optional features in Resource Groups.
 *
 * The preceding example shows that the request to turn on group lifecycle events is `IN_PROGRESS`. You can call the GetAccountSettings operation to check for completion by looking for `GroupLifecycleEventsStatus` to change to `ACTIVE`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // UpdateAccountSettingsInput
 *   GroupLifecycleEventsDesiredStatus: "ACTIVE" || "INACTIVE",
 * };
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountSettingsOutput
 * //   AccountSettings: { // AccountSettings
 * //     GroupLifecycleEventsDesiredStatus: "ACTIVE" || "INACTIVE",
 * //     GroupLifecycleEventsStatus: "ACTIVE" || "INACTIVE" || "IN_PROGRESS" || "ERROR",
 * //     GroupLifecycleEventsStatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountSettingsCommandInput - {@link UpdateAccountSettingsCommandInput}
 * @returns {@link UpdateAccountSettingsCommandOutput}
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request includes one or more parameters that violate validation rules.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request. Check permissions.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred while processing the request. Try again later.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The request uses an HTTP method that isn't allowed for the specified resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You've exceeded throttling limits by making too many requests in a period of time.
 *
 * @throws {@link ResourceGroupsServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroups service.
 *
 * @public
 */
export class UpdateAccountSettingsCommand extends command<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountSettings",
  UpdateAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountSettingsInput;
      output: UpdateAccountSettingsOutput;
    };
    sdk: {
      input: UpdateAccountSettingsCommandInput;
      output: UpdateAccountSettingsCommandOutput;
    };
  };
}
