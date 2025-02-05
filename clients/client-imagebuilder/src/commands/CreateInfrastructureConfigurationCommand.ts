// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationResponse,
} from "../models/models_0";
import {
  de_CreateInfrastructureConfigurationCommand,
  se_CreateInfrastructureConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateInfrastructureConfigurationCommandOutput
  extends CreateInfrastructureConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new infrastructure configuration. An infrastructure configuration defines
 * 			the environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
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
 * @public
 */
export class CreateInfrastructureConfigurationCommand extends $Command
  .classBuilder<
    CreateInfrastructureConfigurationCommandInput,
    CreateInfrastructureConfigurationCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "CreateInfrastructureConfiguration", {})
  .n("ImagebuilderClient", "CreateInfrastructureConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateInfrastructureConfigurationCommand)
  .de(de_CreateInfrastructureConfigurationCommand)
  .build() {
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
