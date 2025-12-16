// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { GetInfrastructureConfigurationRequest, GetInfrastructureConfigurationResponse } from "../models/models_0";
import { GetInfrastructureConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInfrastructureConfigurationCommand}.
 */
export interface GetInfrastructureConfigurationCommandInput extends GetInfrastructureConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetInfrastructureConfigurationCommand}.
 */
export interface GetInfrastructureConfigurationCommandOutput
  extends GetInfrastructureConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets an infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetInfrastructureConfigurationRequest
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetInfrastructureConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   infrastructureConfiguration: { // InfrastructureConfiguration
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     instanceTypes: [ // InstanceTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     instanceProfileName: "STRING_VALUE",
 * //     securityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetId: "STRING_VALUE",
 * //     logging: { // Logging
 * //       s3Logs: { // S3Logs
 * //         s3BucketName: "STRING_VALUE",
 * //         s3KeyPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     keyPair: "STRING_VALUE",
 * //     terminateInstanceOnFailure: true || false,
 * //     snsTopicArn: "STRING_VALUE",
 * //     dateCreated: "STRING_VALUE",
 * //     dateUpdated: "STRING_VALUE",
 * //     resourceTags: { // ResourceTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     instanceMetadataOptions: { // InstanceMetadataOptions
 * //       httpTokens: "STRING_VALUE",
 * //       httpPutResponseHopLimit: Number("int"),
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     placement: { // Placement
 * //       availabilityZone: "STRING_VALUE",
 * //       tenancy: "default" || "dedicated" || "host",
 * //       hostId: "STRING_VALUE",
 * //       hostResourceGroupArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInfrastructureConfigurationCommandInput - {@link GetInfrastructureConfigurationCommandInput}
 * @returns {@link GetInfrastructureConfigurationCommandOutput}
 * @see {@link GetInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class GetInfrastructureConfigurationCommand extends $Command
  .classBuilder<
    GetInfrastructureConfigurationCommandInput,
    GetInfrastructureConfigurationCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetInfrastructureConfiguration", {})
  .n("ImagebuilderClient", "GetInfrastructureConfigurationCommand")
  .sc(GetInfrastructureConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInfrastructureConfigurationRequest;
      output: GetInfrastructureConfigurationResponse;
    };
    sdk: {
      input: GetInfrastructureConfigurationCommandInput;
      output: GetInfrastructureConfigurationCommandOutput;
    };
  };
}
