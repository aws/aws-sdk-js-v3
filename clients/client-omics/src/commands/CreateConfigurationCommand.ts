// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { CreateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandInput extends CreateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandOutput extends CreateConfigurationResponse, __MetadataBearer {}

/**
 * Create a new configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateConfigurationCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateConfigurationCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateConfigurationRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   runConfigurations: { // RunConfigurations
 *     vpcConfig: { // VpcConfig
 *       securityGroupIds: [ // SecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       subnetIds: [ // SubnetIds
 *         "STRING_VALUE",
 *       ],
 *       vpcOwnerAccountId: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 * };
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationResponse
 * //   arn: "STRING_VALUE",
 * //   uuid: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   runConfigurations: { // RunConfigurationsResponse
 * //     vpcConfig: { // VpcConfigResponse
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE",
 * //       vpcOwnerAccountId: "STRING_VALUE",
 * //     },
 * //   },
 * //   status: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfigurationCommandInput - {@link CreateConfigurationCommandInput}
 * @returns {@link CreateConfigurationCommandOutput}
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CreateConfigurationCommand extends command<CreateConfigurationCommandInput, CreateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateConfiguration",
  CreateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationRequest;
      output: CreateConfigurationResponse;
    };
    sdk: {
      input: CreateConfigurationCommandInput;
      output: CreateConfigurationCommandOutput;
    };
  };
}
