// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCapacityManagerAttributesRequest, GetCapacityManagerAttributesResult } from "../models/models_5";
import { GetCapacityManagerAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityManagerAttributesCommand}.
 */
export interface GetCapacityManagerAttributesCommandInput extends GetCapacityManagerAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityManagerAttributesCommand}.
 */
export interface GetCapacityManagerAttributesCommandOutput extends GetCapacityManagerAttributesResult, __MetadataBearer {}

/**
 * <p>
 * Retrieves the current configuration and status of EC2 Capacity Manager for your account, including enablement status, Organizations access settings, and data ingestion status.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityManagerAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityManagerAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetCapacityManagerAttributesRequest
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityManagerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityManagerAttributesResult
 * //   CapacityManagerStatus: "enabled" || "disabled",
 * //   OrganizationsAccess: true || false,
 * //   DataExportCount: Number("int"),
 * //   IngestionStatus: "initial-ingestion-in-progress" || "ingestion-complete" || "ingestion-failed",
 * //   IngestionStatusMessage: "STRING_VALUE",
 * //   EarliestDatapointTimestamp: new Date("TIMESTAMP"),
 * //   LatestDatapointTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCapacityManagerAttributesCommandInput - {@link GetCapacityManagerAttributesCommandInput}
 * @returns {@link GetCapacityManagerAttributesCommandOutput}
 * @see {@link GetCapacityManagerAttributesCommandInput} for command's `input` shape.
 * @see {@link GetCapacityManagerAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetCapacityManagerAttributesCommand extends $Command
  .classBuilder<
    GetCapacityManagerAttributesCommandInput,
    GetCapacityManagerAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetCapacityManagerAttributes", {})
  .n("EC2Client", "GetCapacityManagerAttributesCommand")
  .sc(GetCapacityManagerAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityManagerAttributesRequest;
      output: GetCapacityManagerAttributesResult;
    };
    sdk: {
      input: GetCapacityManagerAttributesCommandInput;
      output: GetCapacityManagerAttributesCommandOutput;
    };
  };
}
