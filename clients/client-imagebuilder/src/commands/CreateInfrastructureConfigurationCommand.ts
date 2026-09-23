// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationResponse,
} from "../models/models_0";
import { CreateInfrastructureConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInfrastructureConfigurationCommand}.
 */
export interface CreateInfrastructureConfigurationCommandInput extends CreateInfrastructureConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInfrastructureConfigurationCommand}.
 */
export interface CreateInfrastructureConfigurationCommandOutput extends CreateInfrastructureConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new infrastructure configuration. An infrastructure configuration defines
 * 			the environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateInfrastructureConfigurationRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   placement: { // Placement
 *     availabilityZone: "STRING_VALUE",
 *     tenancy: "default" || "dedicated" || "host",
 *     hostId: "STRING_VALUE",
 *     hostResourceGroupArn: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateInfrastructureConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   infrastructureConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInfrastructureConfigurationCommandInput - {@link CreateInfrastructureConfigurationCommandInput}
 * @returns {@link CreateInfrastructureConfigurationCommandOutput}
 * @see {@link CreateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInfrastructureConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Create an infrastructure configuration
 * ```javascript
 * // The following example creates an infrastructure configuration that gives Image Builder a choice of two instance types for its build and test instances.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
 *   description: "An infrastructure configuration for Amazon Linux builds",
 *   instanceProfileName: "EC2InstanceProfileForImageBuilder",
 *   instanceTypes: [
 *     "t3.medium",
 *     "t3.large"
 *   ],
 *   name: "my-example-infrastructure",
 *   terminateInstanceOnFailure: true
 * };
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   requestId: "67082698-415b-4d9f-8be0-84a58380b93f"
 * }
 * *\/
 * ```
 *
 * @example Create an infrastructure configuration with instance placement and metadata options
 * ```javascript
 * // The following example creates an infrastructure configuration. It places your build and test instances in a single Availability Zone and requires IMDSv2 for instance metadata requests. It also applies resource tags to the resources that Image Builder creates during the build.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE98765",
 *   description: "An infrastructure configuration that pins build instances to one Availability Zone and requires IMDSv2",
 *   instanceMetadataOptions: {
 *     httpPutResponseHopLimit: 2,
 *     httpTokens: "required"
 *   },
 *   instanceProfileName: "my-example-instance-role",
 *   name: "my-example-infrastructure",
 *   placement: {
 *     availabilityZone: "us-west-2a"
 *   },
 *   resourceTags: {
 *     CostCenter: "12345",
 *     Environment: "test"
 *   },
 *   terminateInstanceOnFailure: true
 * };
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE98765",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   requestId: "b96b54d8-daa6-4fdf-b25a-7b570bc2ab25"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateInfrastructureConfigurationCommand extends command<CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateInfrastructureConfiguration",
  CreateInfrastructureConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInfrastructureConfigurationRequest;
      output: CreateInfrastructureConfigurationResponse;
    };
    sdk: {
      input: CreateInfrastructureConfigurationCommandInput;
      output: CreateInfrastructureConfigurationCommandOutput;
    };
  };
}
