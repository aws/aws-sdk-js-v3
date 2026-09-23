// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateInfrastructureConfigurationRequest,
  UpdateInfrastructureConfigurationResponse,
} from "../models/models_0";
import { UpdateInfrastructureConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInfrastructureConfigurationCommand}.
 */
export interface UpdateInfrastructureConfigurationCommandInput extends UpdateInfrastructureConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInfrastructureConfigurationCommand}.
 */
export interface UpdateInfrastructureConfigurationCommandOutput extends UpdateInfrastructureConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates an infrastructure configuration. An infrastructure configuration defines
 * 			the environment in which Image Builder builds and tests your image.</p>
 *          <note>
 *             <p>This operation doesn't support selective updates.
 * 				The request replaces the configuration, so include every setting that
 * 				you want to keep. Omitted optional properties are cleared.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // UpdateInfrastructureConfigurationRequest
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   instanceTypes: [ // InstanceTypeList
 *     "STRING_VALUE",
 *   ],
 *   instanceProfileName: "STRING_VALUE", // required
 *   securityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 *   subnetId: "STRING_VALUE",
 *   logging: { // Logging
 *     s3Logs: { // S3Logs
 *       s3BucketName: "STRING_VALUE",
 *       s3KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   keyPair: "STRING_VALUE",
 *   terminateInstanceOnFailure: true || false,
 *   snsTopicArn: "STRING_VALUE",
 *   resourceTags: { // ResourceTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   instanceMetadataOptions: { // InstanceMetadataOptions
 *     httpTokens: "STRING_VALUE",
 *     httpPutResponseHopLimit: Number("int"),
 *   },
 *   placement: { // Placement
 *     availabilityZone: "STRING_VALUE",
 *     tenancy: "default" || "dedicated" || "host",
 *     hostId: "STRING_VALUE",
 *     hostResourceGroupArn: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInfrastructureConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   infrastructureConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateInfrastructureConfigurationCommandInput - {@link UpdateInfrastructureConfigurationCommandInput}
 * @returns {@link UpdateInfrastructureConfigurationCommandOutput}
 * @see {@link UpdateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInfrastructureConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 * @example Update an infrastructure configuration
 * ```javascript
 * // The following example updates an infrastructure configuration to use larger instance types and to keep the build instance running when the image build fails.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEbbbbb",
 *   description: "An infrastructure configuration for Amazon Linux builds",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   instanceProfileName: "EC2InstanceProfileForImageBuilder",
 *   instanceTypes: [
 *     "t3.large",
 *     "t3.xlarge"
 *   ],
 *   terminateInstanceOnFailure: false
 * };
 * const command = new UpdateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   requestId: "ffe990d5-7720-4061-a8d6-da6a7c4a6a3e"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateInfrastructureConfigurationCommand extends command<UpdateInfrastructureConfigurationCommandInput, UpdateInfrastructureConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInfrastructureConfiguration",
  UpdateInfrastructureConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInfrastructureConfigurationRequest;
      output: UpdateInfrastructureConfigurationResponse;
    };
    sdk: {
      input: UpdateInfrastructureConfigurationCommandInput;
      output: UpdateInfrastructureConfigurationCommandOutput;
    };
  };
}
