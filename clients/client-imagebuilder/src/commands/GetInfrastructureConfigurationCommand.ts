// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInfrastructureConfigurationRequest, GetInfrastructureConfigurationResponse } from "../models/models_0";
import { GetInfrastructureConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetInfrastructureConfigurationCommandOutput extends GetInfrastructureConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves an infrastructure configuration.</p>
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Get the details of an infrastructure configuration
 * ```javascript
 * // The following example retrieves an infrastructure configuration that specifies the instance types, instance profile, and instance metadata options that Image Builder uses for build and test instances.
 * const input = {
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure-configuration"
 * };
 * const command = new GetInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   infrastructureConfiguration: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure-configuration",
 *     dateCreated: "2026-09-09T19:36:48.933Z",
 *     description: "Infrastructure configuration for my application image builds",
 *     instanceMetadataOptions: {
 *       httpPutResponseHopLimit: 2,
 *       httpTokens: "required"
 *     },
 *     instanceProfileName: "EC2InstanceProfileForImageBuilder",
 *     instanceTypes: [
 *       "m5.large",
 *       "m5.xlarge"
 *     ],
 *     name: "my-example-infrastructure-configuration",
 *     resourceTags: {
 *       CostCenter: "12345"
 *     },
 *     tags: {
 *       Environment: "test"
 *     },
 *     terminateInstanceOnFailure: true
 *   },
 *   requestId: "7ba25cd0-0735-4f44-bc67-2f231e96503f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInfrastructureConfigurationCommand extends command<GetInfrastructureConfigurationCommandInput, GetInfrastructureConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetInfrastructureConfiguration",
  GetInfrastructureConfiguration$
) {
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
