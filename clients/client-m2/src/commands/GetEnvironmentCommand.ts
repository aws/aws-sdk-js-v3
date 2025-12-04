// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import type { GetEnvironmentRequest, GetEnvironmentResponse } from "../models/models_0";
import { GetEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Describes a specific runtime environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // GetEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   environmentArn: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   instanceType: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   engineType: "STRING_VALUE", // required
 * //   engineVersion: "STRING_VALUE", // required
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // String50List // required
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // required
 * //     "STRING_VALUE",
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   storageConfigurations: [ // StorageConfigurationList
 * //     { // StorageConfiguration Union: only one key present
 * //       efs: { // EfsStorageConfiguration
 * //         fileSystemId: "STRING_VALUE", // required
 * //         mountPoint: "STRING_VALUE", // required
 * //       },
 * //       fsx: { // FsxStorageConfiguration
 * //         fileSystemId: "STRING_VALUE", // required
 * //         mountPoint: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   highAvailabilityConfig: { // HighAvailabilityConfig
 * //     desiredCapacity: Number("int"), // required
 * //   },
 * //   publiclyAccessible: true || false,
 * //   actualCapacity: Number("int"),
 * //   loadBalancerArn: "STRING_VALUE",
 * //   statusReason: "STRING_VALUE",
 * //   preferredMaintenanceWindow: "STRING_VALUE",
 * //   pendingMaintenance: { // PendingMaintenance
 * //     schedule: { // MaintenanceSchedule
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //     engineVersion: "STRING_VALUE",
 * //   },
 * //   kmsKeyId: "STRING_VALUE",
 * //   networkType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class GetEnvironmentCommand extends $Command
  .classBuilder<
    GetEnvironmentCommandInput,
    GetEnvironmentCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "GetEnvironment", {})
  .n("M2Client", "GetEnvironmentCommand")
  .sc(GetEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentRequest;
      output: GetEnvironmentResponse;
    };
    sdk: {
      input: GetEnvironmentCommandInput;
      output: GetEnvironmentCommandOutput;
    };
  };
}
