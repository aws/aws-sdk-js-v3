// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMaintenanceWindowRequest, GetMaintenanceWindowResult } from "../models/models_1";
import { GetMaintenanceWindow } from "../schemas/schemas_24_Maintenance";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowCommand}.
 */
export interface GetMaintenanceWindowCommandInput extends GetMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowCommand}.
 */
export interface GetMaintenanceWindowCommandOutput extends GetMaintenanceWindowResult, __MetadataBearer {}

/**
 * <p>Retrieves a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StartDate: "STRING_VALUE",
 * //   EndDate: "STRING_VALUE",
 * //   Schedule: "STRING_VALUE",
 * //   ScheduleTimezone: "STRING_VALUE",
 * //   ScheduleOffset: Number("int"),
 * //   NextExecutionTime: "STRING_VALUE",
 * //   Duration: Number("int"),
 * //   Cutoff: Number("int"),
 * //   AllowUnassociatedTargets: true || false,
 * //   Enabled: true || false,
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   ModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowCommandInput - {@link GetMaintenanceWindowCommandInput}
 * @returns {@link GetMaintenanceWindowCommandOutput}
 * @see {@link GetMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetMaintenanceWindowCommand extends $Command
  .classBuilder<
    GetMaintenanceWindowCommandInput,
    GetMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetMaintenanceWindow", {})
  .n("SSMClient", "GetMaintenanceWindowCommand")
  .sc(GetMaintenanceWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMaintenanceWindowRequest;
      output: GetMaintenanceWindowResult;
    };
    sdk: {
      input: GetMaintenanceWindowCommandInput;
      output: GetMaintenanceWindowCommandOutput;
    };
  };
}
