// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { de_GetApplicationCommand, se_GetApplicationCommand } from "../protocols/Aws_restJson1";

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
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * <p>Describes the details of a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetApplicationCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetApplicationCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE", // required
 * //   applicationArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   latestVersion: { // ApplicationVersionSummary
 * //     applicationVersion: Number("int"), // required
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   deployedVersion: { // DeployedVersionSummary
 * //     applicationVersion: Number("int"), // required
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   engineType: "STRING_VALUE", // required
 * //   logGroups: [ // LogGroupSummaries
 * //     { // LogGroupSummary
 * //       logType: "STRING_VALUE", // required
 * //       logGroupName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastStartTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   environmentId: "STRING_VALUE",
 * //   targetGroupArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   listenerArns: [
 * //     "STRING_VALUE",
 * //   ],
 * //   listenerPorts: [ // PortList
 * //     Number("int"),
 * //   ],
 * //   loadBalancerDnsName: "STRING_VALUE",
 * //   statusReason: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class GetApplicationCommand extends $Command
  .classBuilder<
    GetApplicationCommandInput,
    GetApplicationCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "GetApplication", {})
  .n("M2Client", "GetApplicationCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationCommand)
  .de(de_GetApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
