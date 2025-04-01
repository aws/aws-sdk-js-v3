// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationInstancesRequest, ListApplicationInstancesResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_ListApplicationInstancesCommand, se_ListApplicationInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationInstancesCommand}.
 */
export interface ListApplicationInstancesCommandInput extends ListApplicationInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationInstancesCommand}.
 */
export interface ListApplicationInstancesCommandOutput extends ListApplicationInstancesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of application instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListApplicationInstancesRequest
 *   DeviceId: "STRING_VALUE",
 *   StatusFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationInstancesResponse
 * //   ApplicationInstances: [ // ApplicationInstances
 * //     { // ApplicationInstance
 * //       Name: "STRING_VALUE",
 * //       ApplicationInstanceId: "STRING_VALUE",
 * //       DefaultRuntimeContextDevice: "STRING_VALUE",
 * //       DefaultRuntimeContextDeviceName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       HealthStatus: "STRING_VALUE",
 * //       StatusDescription: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RuntimeContextStates: [ // ReportedRuntimeContextStates
 * //         { // ReportedRuntimeContextState
 * //           DesiredState: "STRING_VALUE", // required
 * //           RuntimeContextName: "STRING_VALUE", // required
 * //           DeviceReportedStatus: "STRING_VALUE", // required
 * //           DeviceReportedTime: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationInstancesCommandInput - {@link ListApplicationInstancesCommandInput}
 * @returns {@link ListApplicationInstancesCommandOutput}
 * @see {@link ListApplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListApplicationInstancesCommand extends $Command
  .classBuilder<
    ListApplicationInstancesCommandInput,
    ListApplicationInstancesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "ListApplicationInstances", {})
  .n("PanoramaClient", "ListApplicationInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationInstancesCommand)
  .de(de_ListApplicationInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationInstancesRequest;
      output: ListApplicationInstancesResponse;
    };
    sdk: {
      input: ListApplicationInstancesCommandInput;
      output: ListApplicationInstancesCommandOutput;
    };
  };
}
