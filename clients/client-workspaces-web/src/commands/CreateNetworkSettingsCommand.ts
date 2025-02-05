// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateNetworkSettingsRequest,
  CreateNetworkSettingsRequestFilterSensitiveLog,
  CreateNetworkSettingsResponse,
} from "../models/models_0";
import { de_CreateNetworkSettingsCommand, se_CreateNetworkSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkSettingsCommand}.
 */
export interface CreateNetworkSettingsCommandInput extends CreateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkSettingsCommand}.
 */
export interface CreateNetworkSettingsCommandOutput extends CreateNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates a network settings resource that can be associated with a web portal. Once
 *          associated with a web portal, network settings define how streaming instances will connect
 *          with your specified VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateNetworkSettingsRequest
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkSettingsResponse
 * //   networkSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNetworkSettingsCommandInput - {@link CreateNetworkSettingsCommandInput}
 * @returns {@link CreateNetworkSettingsCommandOutput}
 * @see {@link CreateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 * @public
 */
export class CreateNetworkSettingsCommand extends $Command
  .classBuilder<
    CreateNetworkSettingsCommandInput,
    CreateNetworkSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "CreateNetworkSettings", {})
  .n("WorkSpacesWebClient", "CreateNetworkSettingsCommand")
  .f(CreateNetworkSettingsRequestFilterSensitiveLog, void 0)
  .ser(se_CreateNetworkSettingsCommand)
  .de(de_CreateNetworkSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkSettingsRequest;
      output: CreateNetworkSettingsResponse;
    };
    sdk: {
      input: CreateNetworkSettingsCommandInput;
      output: CreateNetworkSettingsCommandOutput;
    };
  };
}
