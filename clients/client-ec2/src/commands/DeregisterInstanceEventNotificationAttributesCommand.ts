// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterInstanceEventNotificationAttributesRequest,
  DeregisterInstanceEventNotificationAttributesResult,
} from "../models/models_3";
import { DeregisterInstanceEventNotificationAttributes } from "../schemas/schemas_71_EventNotification";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandInput
  extends DeregisterInstanceEventNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandOutput
  extends DeregisterInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being
 *          included in scheduled event notifications for resources in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeregisterInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 *   InstanceTagAttribute: { // DeregisterInstanceTagAttributeRequest
 *     IncludeAllTagsOfInstance: true || false,
 *     InstanceTagKeys: [ // InstanceTagKeySet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new DeregisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterInstanceEventNotificationAttributesResult
 * //   InstanceTagAttribute: { // InstanceTagNotificationAttribute
 * //     InstanceTagKeys: [ // InstanceTagKeySet
 * //       "STRING_VALUE",
 * //     ],
 * //     IncludeAllTagsOfInstance: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterInstanceEventNotificationAttributesCommandInput - {@link DeregisterInstanceEventNotificationAttributesCommandInput}
 * @returns {@link DeregisterInstanceEventNotificationAttributesCommandOutput}
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeregisterInstanceEventNotificationAttributesCommand extends $Command
  .classBuilder<
    DeregisterInstanceEventNotificationAttributesCommandInput,
    DeregisterInstanceEventNotificationAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeregisterInstanceEventNotificationAttributes", {})
  .n("EC2Client", "DeregisterInstanceEventNotificationAttributesCommand")
  .sc(DeregisterInstanceEventNotificationAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterInstanceEventNotificationAttributesRequest;
      output: DeregisterInstanceEventNotificationAttributesResult;
    };
    sdk: {
      input: DeregisterInstanceEventNotificationAttributesCommandInput;
      output: DeregisterInstanceEventNotificationAttributesCommandOutput;
    };
  };
}
