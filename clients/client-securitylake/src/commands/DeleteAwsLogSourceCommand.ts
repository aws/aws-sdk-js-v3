// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAwsLogSourceRequest, DeleteAwsLogSourceResponse } from "../models/models_0";
import { DeleteAwsLogSource } from "../schemas/schemas_0";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAwsLogSourceCommand}.
 */
export interface DeleteAwsLogSourceCommandInput extends DeleteAwsLogSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAwsLogSourceCommand}.
 */
export interface DeleteAwsLogSourceCommandOutput extends DeleteAwsLogSourceResponse, __MetadataBearer {}

/**
 * <p>Removes a natively supported Amazon Web Services service as an Amazon Security Lake source. You
 *          can remove a source for one or more Regions. When you remove the source, Security Lake stops
 *          collecting data from that source in the specified Regions and accounts, and subscribers can
 *          no longer consume new data from the source. However, subscribers can still consume data
 *          that Security Lake collected from the source before removal.</p>
 *          <p>You can choose any source type in any Amazon Web Services Region for either accounts that
 *          are part of a trusted organization or standalone accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteAwsLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteAwsLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // DeleteAwsLogSourceRequest
 *   sources: [ // AwsLogSourceConfigurationList // required
 *     { // AwsLogSourceConfiguration
 *       accounts: [ // AccountList
 *         "STRING_VALUE",
 *       ],
 *       regions: [ // RegionList // required
 *         "STRING_VALUE",
 *       ],
 *       sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA" || "EKS_AUDIT" || "WAF", // required
 *       sourceVersion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeleteAwsLogSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAwsLogSourceResponse
 * //   failed: [ // AccountList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteAwsLogSourceCommandInput - {@link DeleteAwsLogSourceCommandInput}
 * @returns {@link DeleteAwsLogSourceCommandOutput}
 * @see {@link DeleteAwsLogSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAwsLogSourceCommandOutput} for command's `response` shape.
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
export class DeleteAwsLogSourceCommand extends $Command
  .classBuilder<
    DeleteAwsLogSourceCommandInput,
    DeleteAwsLogSourceCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "DeleteAwsLogSource", {})
  .n("SecurityLakeClient", "DeleteAwsLogSourceCommand")
  .sc(DeleteAwsLogSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAwsLogSourceRequest;
      output: DeleteAwsLogSourceResponse;
    };
    sdk: {
      input: DeleteAwsLogSourceCommandInput;
      output: DeleteAwsLogSourceCommandOutput;
    };
  };
}
