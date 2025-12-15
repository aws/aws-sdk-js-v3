// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePlatformVersionRequest, DeletePlatformVersionResult } from "../models/models_0";
import { DeletePlatformVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlatformVersionCommand}.
 */
export interface DeletePlatformVersionCommandInput extends DeletePlatformVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlatformVersionCommand}.
 */
export interface DeletePlatformVersionCommandOutput extends DeletePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Deletes the specified version of a custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeletePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeletePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DeletePlatformVersionRequest
 *   PlatformArn: "STRING_VALUE",
 * };
 * const command = new DeletePlatformVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePlatformVersionResult
 * //   PlatformSummary: { // PlatformSummary
 * //     PlatformArn: "STRING_VALUE",
 * //     PlatformOwner: "STRING_VALUE",
 * //     PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //     PlatformCategory: "STRING_VALUE",
 * //     OperatingSystemName: "STRING_VALUE",
 * //     OperatingSystemVersion: "STRING_VALUE",
 * //     SupportedTierList: [ // SupportedTierList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedAddonList: [ // SupportedAddonList
 * //       "STRING_VALUE",
 * //     ],
 * //     PlatformLifecycleState: "STRING_VALUE",
 * //     PlatformVersion: "STRING_VALUE",
 * //     PlatformBranchName: "STRING_VALUE",
 * //     PlatformBranchLifecycleState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePlatformVersionCommandInput - {@link DeletePlatformVersionCommandInput}
 * @returns {@link DeletePlatformVersionCommandOutput}
 * @see {@link DeletePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 *
 * @throws {@link PlatformVersionStillReferencedException} (client fault)
 *  <p>You cannot delete the platform version because there are still environments running on it.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DeletePlatformVersionCommand extends $Command
  .classBuilder<
    DeletePlatformVersionCommandInput,
    DeletePlatformVersionCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "DeletePlatformVersion", {})
  .n("ElasticBeanstalkClient", "DeletePlatformVersionCommand")
  .sc(DeletePlatformVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlatformVersionRequest;
      output: DeletePlatformVersionResult;
    };
    sdk: {
      input: DeletePlatformVersionCommandInput;
      output: DeletePlatformVersionCommandOutput;
    };
  };
}
