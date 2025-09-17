// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMailboxExportJobRequest, DescribeMailboxExportJobResponse } from "../models/models_0";
import { de_DescribeMailboxExportJobCommand, se_DescribeMailboxExportJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMailboxExportJobCommand}.
 */
export interface DescribeMailboxExportJobCommandInput extends DescribeMailboxExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMailboxExportJobCommand}.
 */
export interface DescribeMailboxExportJobCommandOutput extends DescribeMailboxExportJobResponse, __MetadataBearer {}

/**
 * <p>Describes the current status of a mailbox export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeMailboxExportJobRequest
 *   JobId: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMailboxExportJobResponse
 * //   EntityId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   S3BucketName: "STRING_VALUE",
 * //   S3Prefix: "STRING_VALUE",
 * //   S3Path: "STRING_VALUE",
 * //   EstimatedProgress: Number("int"),
 * //   State: "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //   ErrorInfo: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeMailboxExportJobCommandInput - {@link DescribeMailboxExportJobCommandInput}
 * @returns {@link DescribeMailboxExportJobCommandOutput}
 * @see {@link DescribeMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeMailboxExportJobCommand extends $Command
  .classBuilder<
    DescribeMailboxExportJobCommandInput,
    DescribeMailboxExportJobCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DescribeMailboxExportJob", {})
  .n("WorkMailClient", "DescribeMailboxExportJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMailboxExportJobCommand)
  .de(de_DescribeMailboxExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMailboxExportJobRequest;
      output: DescribeMailboxExportJobResponse;
    };
    sdk: {
      input: DescribeMailboxExportJobCommandInput;
      output: DescribeMailboxExportJobCommandOutput;
    };
  };
}
