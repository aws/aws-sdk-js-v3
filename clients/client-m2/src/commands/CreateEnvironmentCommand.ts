// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { CreateEnvironmentRequest, CreateEnvironmentResponse } from "../models/models_0";
import { CreateEnvironment } from "../schemas/schemas_1_Batch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates a runtime environment for a given runtime engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CreateEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CreateEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // CreateEnvironmentRequest
 *   name: "STRING_VALUE", // required
 *   instanceType: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   engineType: "STRING_VALUE", // required
 *   engineVersion: "STRING_VALUE",
 *   subnetIds: [ // String50List
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   storageConfigurations: [ // StorageConfigurationList
 *     { // StorageConfiguration Union: only one key present
 *       efs: { // EfsStorageConfiguration
 *         fileSystemId: "STRING_VALUE", // required
 *         mountPoint: "STRING_VALUE", // required
 *       },
 *       fsx: { // FsxStorageConfiguration
 *         fileSystemId: "STRING_VALUE", // required
 *         mountPoint: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   publiclyAccessible: true || false,
 *   highAvailabilityConfig: { // HighAvailabilityConfig
 *     desiredCapacity: Number("int"), // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   preferredMaintenanceWindow: "STRING_VALUE",
 *   networkType: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentResponse
 * //   environmentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class CreateEnvironmentCommand extends $Command
  .classBuilder<
    CreateEnvironmentCommandInput,
    CreateEnvironmentCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "CreateEnvironment", {})
  .n("M2Client", "CreateEnvironmentCommand")
  .sc(CreateEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentRequest;
      output: CreateEnvironmentResponse;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
