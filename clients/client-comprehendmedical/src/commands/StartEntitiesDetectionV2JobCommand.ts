// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartEntitiesDetectionV2JobRequest, StartEntitiesDetectionV2JobResponse } from "../models/models_0";
import { StartEntitiesDetectionV2Job } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartEntitiesDetectionV2JobCommand}.
 */
export interface StartEntitiesDetectionV2JobCommandInput extends StartEntitiesDetectionV2JobRequest {}
/**
 * @public
 *
 * The output of {@link StartEntitiesDetectionV2JobCommand}.
 */
export interface StartEntitiesDetectionV2JobCommandOutput
  extends StartEntitiesDetectionV2JobResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
 *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StartEntitiesDetectionV2JobRequest
 *   InputDataConfig: { // InputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   KMSKey: "STRING_VALUE",
 *   LanguageCode: "en", // required
 * };
 * const command = new StartEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * // { // StartEntitiesDetectionV2JobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartEntitiesDetectionV2JobCommandInput - {@link StartEntitiesDetectionV2JobCommandInput}
 * @returns {@link StartEntitiesDetectionV2JobCommandOutput}
 * @see {@link StartEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StartEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 *
 * @public
 */
export class StartEntitiesDetectionV2JobCommand extends $Command
  .classBuilder<
    StartEntitiesDetectionV2JobCommandInput,
    StartEntitiesDetectionV2JobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "StartEntitiesDetectionV2Job", {})
  .n("ComprehendMedicalClient", "StartEntitiesDetectionV2JobCommand")
  .sc(StartEntitiesDetectionV2Job)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEntitiesDetectionV2JobRequest;
      output: StartEntitiesDetectionV2JobResponse;
    };
    sdk: {
      input: StartEntitiesDetectionV2JobCommandInput;
      output: StartEntitiesDetectionV2JobCommandOutput;
    };
  };
}
