// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetApplicationInput, GetApplicationOutput } from "../models/models_0";
import { GetApplication } from "../schemas/schemas_2_List";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationInput {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationOutput, __MetadataBearer {}

/**
 * <p>Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // GetApplicationInput
 *   ApplicationId: "STRING_VALUE",
 *   ApplicationArn: "STRING_VALUE",
 *   AppRegistryArn: "STRING_VALUE",
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationOutput
 * //   Application: { // Application
 * //     Id: "STRING_VALUE",
 * //     Type: "HANA" || "SAP_ABAP",
 * //     Arn: "STRING_VALUE",
 * //     AppRegistryArn: "STRING_VALUE",
 * //     Status: "ACTIVATED" || "STARTING" || "STOPPED" || "STOPPING" || "FAILED" || "REGISTERING" || "DELETING" || "UNKNOWN",
 * //     DiscoveryStatus: "SUCCESS" || "REGISTRATION_FAILED" || "REFRESH_FAILED" || "REGISTERING" || "DELETING",
 * //     Components: [ // ComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StatusMessage: "STRING_VALUE",
 * //     AssociatedApplicationArns: [ // ApplicationArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class GetApplicationCommand extends $Command
  .classBuilder<
    GetApplicationCommandInput,
    GetApplicationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "GetApplication", {})
  .n("SsmSapClient", "GetApplicationCommand")
  .sc(GetApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationInput;
      output: GetApplicationOutput;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
