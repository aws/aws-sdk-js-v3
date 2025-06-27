// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListOrganizationServiceAccessStatusRequest,
  ListOrganizationServiceAccessStatusResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_ListOrganizationServiceAccessStatusCommand,
  se_ListOrganizationServiceAccessStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationServiceAccessStatusCommand}.
 */
export interface ListOrganizationServiceAccessStatusCommandInput extends ListOrganizationServiceAccessStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationServiceAccessStatusCommand}.
 */
export interface ListOrganizationServiceAccessStatusCommandOutput
  extends ListOrganizationServiceAccessStatusResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // ListOrganizationServiceAccessStatusRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationServiceAccessStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationServiceAccessStatusResponse
 * //   OrganizationStatus: { // OrganizationStatus
 * //     OrganizationId: "STRING_VALUE",
 * //     OrganizationAwsServiceAccessStatus: "STRING_VALUE",
 * //     SLRDeploymentStatus: "STRING_VALUE",
 * //     AccountStatusList: [ // AccountStatusList
 * //       { // AccountStatus
 * //         AccountId: "STRING_VALUE",
 * //         SLRDeploymentStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationServiceAccessStatusCommandInput - {@link ListOrganizationServiceAccessStatusCommandInput}
 * @returns {@link ListOrganizationServiceAccessStatusCommandOutput}
 * @see {@link ListOrganizationServiceAccessStatusCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationServiceAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class ListOrganizationServiceAccessStatusCommand extends $Command
  .classBuilder<
    ListOrganizationServiceAccessStatusCommandInput,
    ListOrganizationServiceAccessStatusCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "ListOrganizationServiceAccessStatus", {})
  .n("NetworkManagerClient", "ListOrganizationServiceAccessStatusCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationServiceAccessStatusCommand)
  .de(de_ListOrganizationServiceAccessStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationServiceAccessStatusRequest;
      output: ListOrganizationServiceAccessStatusResponse;
    };
    sdk: {
      input: ListOrganizationServiceAccessStatusCommandInput;
      output: ListOrganizationServiceAccessStatusCommandOutput;
    };
  };
}
