// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDataLakeOrganizationConfigurationRequest,
  CreateDataLakeOrganizationConfigurationResponse,
} from "../models/models_0";
import { CreateDataLakeOrganizationConfiguration } from "../schemas/schemas_2_Data";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataLakeOrganizationConfigurationCommand}.
 */
export interface CreateDataLakeOrganizationConfigurationCommandInput
  extends CreateDataLakeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataLakeOrganizationConfigurationCommand}.
 */
export interface CreateDataLakeOrganizationConfigurationCommandOutput
  extends CreateDataLakeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Automatically enables Amazon Security Lake for new member accounts in your organization.
 *          Security Lake is not automatically enabled for any existing member accounts in your
 *          organization.</p>
 *          <p>This operation merges the new data lake organization configuration with the existing configuration for Security Lake in your organization. If you want to create a new data lake organization configuration, you must delete the existing one using <a href="https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLakeOrganizationConfiguration.html">DeleteDataLakeOrganizationConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDataLakeOrganizationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDataLakeOrganizationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateDataLakeOrganizationConfigurationRequest
 *   autoEnableNewAccount: [ // DataLakeAutoEnableNewAccountConfigurationList
 *     { // DataLakeAutoEnableNewAccountConfiguration
 *       region: "STRING_VALUE", // required
 *       sources: [ // AwsLogSourceResourceList // required
 *         { // AwsLogSourceResource
 *           sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA" || "EKS_AUDIT" || "WAF",
 *           sourceVersion: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateDataLakeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDataLakeOrganizationConfigurationCommandInput - {@link CreateDataLakeOrganizationConfigurationCommandInput}
 * @returns {@link CreateDataLakeOrganizationConfigurationCommandOutput}
 * @see {@link CreateDataLakeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDataLakeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 *
 * @public
 */
export class CreateDataLakeOrganizationConfigurationCommand extends $Command
  .classBuilder<
    CreateDataLakeOrganizationConfigurationCommandInput,
    CreateDataLakeOrganizationConfigurationCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "CreateDataLakeOrganizationConfiguration", {})
  .n("SecurityLakeClient", "CreateDataLakeOrganizationConfigurationCommand")
  .sc(CreateDataLakeOrganizationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataLakeOrganizationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateDataLakeOrganizationConfigurationCommandInput;
      output: CreateDataLakeOrganizationConfigurationCommandOutput;
    };
  };
}
