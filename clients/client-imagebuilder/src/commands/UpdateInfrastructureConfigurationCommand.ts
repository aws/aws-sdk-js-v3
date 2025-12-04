// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type {
  UpdateInfrastructureConfigurationRequest,
  UpdateInfrastructureConfigurationResponse,
} from "../models/models_0";
import { UpdateInfrastructureConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateInfrastructureConfigurationCommandOutput
  extends UpdateInfrastructureConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a new infrastructure configuration. An infrastructure configuration defines
 * 			the environment in which your image will be built and tested.</p>
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
export class UpdateInfrastructureConfigurationCommand extends $Command
  .classBuilder<
    UpdateInfrastructureConfigurationCommandInput,
    UpdateInfrastructureConfigurationCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "UpdateInfrastructureConfiguration", {})
  .n("ImagebuilderClient", "UpdateInfrastructureConfigurationCommand")
  .sc(UpdateInfrastructureConfiguration)
  .build() {
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
