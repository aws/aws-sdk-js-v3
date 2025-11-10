// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAwsLogSourceRequest, CreateAwsLogSourceResponse } from "../models/models_0";
import { CreateAwsLogSource } from "../schemas/schemas_0";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAwsLogSourceCommand}.
 */
export interface CreateAwsLogSourceCommandInput extends CreateAwsLogSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAwsLogSourceCommand}.
 */
export interface CreateAwsLogSourceCommandOutput extends CreateAwsLogSourceResponse, __MetadataBearer {}

/**
 * <p>Adds a natively supported Amazon Web Services service as an Amazon Security Lake source. Enables
 *          source types for member accounts in required Amazon Web Services Regions, based on the
 *          parameters you specify. You can choose any source type in any Region for either accounts
 *          that are part of a trusted organization or standalone accounts. Once you add an Amazon Web Services service as a source, Security Lake starts collecting logs and events from it.</p>
 *          <p>You can use this API only to enable natively supported Amazon Web Services services as a
 *          source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom
 *          source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateAwsLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateAwsLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateAwsLogSourceRequest
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
 * const command = new CreateAwsLogSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAwsLogSourceResponse
 * //   failed: [ // AccountList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateAwsLogSourceCommandInput - {@link CreateAwsLogSourceCommandInput}
 * @returns {@link CreateAwsLogSourceCommandOutput}
 * @see {@link CreateAwsLogSourceCommandInput} for command's `input` shape.
 * @see {@link CreateAwsLogSourceCommandOutput} for command's `response` shape.
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
export class CreateAwsLogSourceCommand extends $Command
  .classBuilder<
    CreateAwsLogSourceCommandInput,
    CreateAwsLogSourceCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "CreateAwsLogSource", {})
  .n("SecurityLakeClient", "CreateAwsLogSourceCommand")
  .sc(CreateAwsLogSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAwsLogSourceRequest;
      output: CreateAwsLogSourceResponse;
    };
    sdk: {
      input: CreateAwsLogSourceCommandInput;
      output: CreateAwsLogSourceCommandOutput;
    };
  };
}
