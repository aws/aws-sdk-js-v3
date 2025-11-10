// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteDataLakeOrganizationConfigurationRequest,
  DeleteDataLakeOrganizationConfigurationResponse,
} from "../models/models_0";
import { DeleteDataLakeOrganizationConfiguration } from "../schemas/schemas_0";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataLakeOrganizationConfigurationCommand}.
 */
export interface DeleteDataLakeOrganizationConfigurationCommandInput
  extends DeleteDataLakeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataLakeOrganizationConfigurationCommand}.
 */
export interface DeleteDataLakeOrganizationConfigurationCommandOutput
  extends DeleteDataLakeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Turns off automatic enablement of Amazon Security Lake for member accounts that are added to an organization in Organizations. Only the delegated
 *          Security Lake administrator for an organization can perform this operation. If the delegated Security Lake administrator performs this operation, new member
 *          accounts won't automatically contribute data to the data lake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteDataLakeOrganizationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteDataLakeOrganizationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // DeleteDataLakeOrganizationConfigurationRequest
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
 * const command = new DeleteDataLakeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataLakeOrganizationConfigurationCommandInput - {@link DeleteDataLakeOrganizationConfigurationCommandInput}
 * @returns {@link DeleteDataLakeOrganizationConfigurationCommandOutput}
 * @see {@link DeleteDataLakeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataLakeOrganizationConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteDataLakeOrganizationConfigurationCommand extends $Command
  .classBuilder<
    DeleteDataLakeOrganizationConfigurationCommandInput,
    DeleteDataLakeOrganizationConfigurationCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "DeleteDataLakeOrganizationConfiguration", {})
  .n("SecurityLakeClient", "DeleteDataLakeOrganizationConfigurationCommand")
  .sc(DeleteDataLakeOrganizationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataLakeOrganizationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataLakeOrganizationConfigurationCommandInput;
      output: DeleteDataLakeOrganizationConfigurationCommandOutput;
    };
  };
}
