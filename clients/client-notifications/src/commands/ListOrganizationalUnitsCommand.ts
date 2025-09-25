// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOrganizationalUnitsRequest, ListOrganizationalUnitsResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListOrganizationalUnits } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationalUnitsCommand}.
 */
export interface ListOrganizationalUnitsCommandInput extends ListOrganizationalUnitsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationalUnitsCommand}.
 */
export interface ListOrganizationalUnitsCommandOutput extends ListOrganizationalUnitsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of organizational units associated with a notification configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListOrganizationalUnitsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListOrganizationalUnitsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListOrganizationalUnitsRequest
 *   notificationConfigurationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationalUnitsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationalUnitsResponse
 * //   organizationalUnits: [ // OrganizationalUnits // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationalUnitsCommandInput - {@link ListOrganizationalUnitsCommandInput}
 * @returns {@link ListOrganizationalUnitsCommandOutput}
 * @see {@link ListOrganizationalUnitsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationalUnitsCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception is thrown when the notification event fails validation.</p>
 *
 * @throws {@link NotificationsServiceException}
 * <p>Base exception class for all service exceptions from Notifications service.</p>
 *
 *
 * @public
 */
export class ListOrganizationalUnitsCommand extends $Command
  .classBuilder<
    ListOrganizationalUnitsCommandInput,
    ListOrganizationalUnitsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListOrganizationalUnits", {})
  .n("NotificationsClient", "ListOrganizationalUnitsCommand")
  .sc(ListOrganizationalUnits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationalUnitsRequest;
      output: ListOrganizationalUnitsResponse;
    };
    sdk: {
      input: ListOrganizationalUnitsCommandInput;
      output: ListOrganizationalUnitsCommandOutput;
    };
  };
}
