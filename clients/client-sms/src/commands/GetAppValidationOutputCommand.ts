// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppValidationOutputRequest, GetAppValidationOutputResponse } from "../models/models_0";
import { de_GetAppValidationOutputCommand, se_GetAppValidationOutputCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppValidationOutputCommand}.
 */
export interface GetAppValidationOutputCommandInput extends GetAppValidationOutputRequest {}
/**
 * @public
 *
 * The output of {@link GetAppValidationOutputCommand}.
 */
export interface GetAppValidationOutputCommandOutput extends GetAppValidationOutputResponse, __MetadataBearer {}

/**
 * <p>Retrieves output from validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // GetAppValidationOutputRequest
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new GetAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * // { // GetAppValidationOutputResponse
 * //   validationOutputList: [ // ValidationOutputList
 * //     { // ValidationOutput
 * //       validationId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "READY_FOR_VALIDATION" || "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       latestValidationTime: new Date("TIMESTAMP"),
 * //       appValidationOutput: { // AppValidationOutput
 * //         ssmOutput: { // SSMOutput
 * //           s3Location: { // S3Location
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       serverValidationOutput: { // ServerValidationOutput
 * //         server: { // Server
 * //           serverId: "STRING_VALUE",
 * //           serverType: "VIRTUAL_MACHINE",
 * //           vmServer: { // VmServer
 * //             vmServerAddress: { // VmServerAddress
 * //               vmManagerId: "STRING_VALUE",
 * //               vmId: "STRING_VALUE",
 * //             },
 * //             vmName: "STRING_VALUE",
 * //             vmManagerName: "STRING_VALUE",
 * //             vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //             vmPath: "STRING_VALUE",
 * //           },
 * //           replicationJobId: "STRING_VALUE",
 * //           replicationJobTerminated: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppValidationOutputCommandInput - {@link GetAppValidationOutputCommandInput}
 * @returns {@link GetAppValidationOutputCommandOutput}
 * @see {@link GetAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class GetAppValidationOutputCommand extends $Command
  .classBuilder<
    GetAppValidationOutputCommandInput,
    GetAppValidationOutputCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetAppValidationOutput", {})
  .n("SMSClient", "GetAppValidationOutputCommand")
  .f(void 0, void 0)
  .ser(se_GetAppValidationOutputCommand)
  .de(de_GetAppValidationOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppValidationOutputRequest;
      output: GetAppValidationOutputResponse;
    };
    sdk: {
      input: GetAppValidationOutputCommandInput;
      output: GetAppValidationOutputCommandOutput;
    };
  };
}
