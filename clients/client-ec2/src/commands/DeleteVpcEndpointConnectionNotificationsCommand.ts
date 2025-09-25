// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteVpcEndpointConnectionNotificationsRequest,
  DeleteVpcEndpointConnectionNotificationsResult,
} from "../models/models_3";
import { DeleteVpcEndpointConnectionNotifications } from "../schemas/schemas_54_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointConnectionNotificationsCommand}.
 */
export interface DeleteVpcEndpointConnectionNotificationsCommandInput
  extends DeleteVpcEndpointConnectionNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointConnectionNotificationsCommand}.
 */
export interface DeleteVpcEndpointConnectionNotificationsCommandOutput
  extends DeleteVpcEndpointConnectionNotificationsResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified VPC endpoint connection notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcEndpointConnectionNotificationsRequest
 *   DryRun: true || false,
 *   ConnectionNotificationIds: [ // ConnectionNotificationIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointConnectionNotificationsResult
 * //   Unsuccessful: [ // UnsuccessfulItemSet
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteVpcEndpointConnectionNotificationsCommandInput - {@link DeleteVpcEndpointConnectionNotificationsCommandInput}
 * @returns {@link DeleteVpcEndpointConnectionNotificationsCommandOutput}
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpcEndpointConnectionNotificationsCommand extends $Command
  .classBuilder<
    DeleteVpcEndpointConnectionNotificationsCommandInput,
    DeleteVpcEndpointConnectionNotificationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpcEndpointConnectionNotifications", {})
  .n("EC2Client", "DeleteVpcEndpointConnectionNotificationsCommand")
  .sc(DeleteVpcEndpointConnectionNotifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEndpointConnectionNotificationsRequest;
      output: DeleteVpcEndpointConnectionNotificationsResult;
    };
    sdk: {
      input: DeleteVpcEndpointConnectionNotificationsCommandInput;
      output: DeleteVpcEndpointConnectionNotificationsCommandOutput;
    };
  };
}
