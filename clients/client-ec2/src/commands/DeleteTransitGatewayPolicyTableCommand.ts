// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayPolicyTableRequest, DeleteTransitGatewayPolicyTableResult } from "../models/models_3";
import { DeleteTransitGatewayPolicyTable } from "../schemas/schemas_87_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPolicyTableCommand}.
 */
export interface DeleteTransitGatewayPolicyTableCommandInput extends DeleteTransitGatewayPolicyTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPolicyTableCommand}.
 */
export interface DeleteTransitGatewayPolicyTableCommandOutput
  extends DeleteTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPolicyTableRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPolicyTableResult
 * //   TransitGatewayPolicyTable: { // TransitGatewayPolicyTable
 * //     TransitGatewayPolicyTableId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayPolicyTableCommandInput - {@link DeleteTransitGatewayPolicyTableCommandInput}
 * @returns {@link DeleteTransitGatewayPolicyTableCommandOutput}
 * @see {@link DeleteTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayPolicyTableCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayPolicyTableCommandInput,
    DeleteTransitGatewayPolicyTableCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayPolicyTable", {})
  .n("EC2Client", "DeleteTransitGatewayPolicyTableCommand")
  .sc(DeleteTransitGatewayPolicyTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayPolicyTableRequest;
      output: DeleteTransitGatewayPolicyTableResult;
    };
    sdk: {
      input: DeleteTransitGatewayPolicyTableCommandInput;
      output: DeleteTransitGatewayPolicyTableCommandOutput;
    };
  };
}
