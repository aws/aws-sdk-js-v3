// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueuedReservedInstancesRequest, DeleteQueuedReservedInstancesResult } from "../models/models_3";
import { de_DeleteQueuedReservedInstancesCommand, se_DeleteQueuedReservedInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueuedReservedInstancesCommand}.
 */
export interface DeleteQueuedReservedInstancesCommandInput extends DeleteQueuedReservedInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueuedReservedInstancesCommand}.
 */
export interface DeleteQueuedReservedInstancesCommandOutput
  extends DeleteQueuedReservedInstancesResult,
    __MetadataBearer {}

/**
 * <p>Deletes the queued purchases for the specified Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteQueuedReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteQueuedReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteQueuedReservedInstancesRequest
 *   DryRun: true || false,
 *   ReservedInstancesIds: [ // DeleteQueuedReservedInstancesIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteQueuedReservedInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteQueuedReservedInstancesResult
 * //   SuccessfulQueuedPurchaseDeletions: [ // SuccessfulQueuedPurchaseDeletionSet
 * //     { // SuccessfulQueuedPurchaseDeletion
 * //       ReservedInstancesId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedQueuedPurchaseDeletions: [ // FailedQueuedPurchaseDeletionSet
 * //     { // FailedQueuedPurchaseDeletion
 * //       Error: { // DeleteQueuedReservedInstancesError
 * //         Code: "reserved-instances-id-invalid" || "reserved-instances-not-in-queued-state" || "unexpected-error",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ReservedInstancesId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteQueuedReservedInstancesCommandInput - {@link DeleteQueuedReservedInstancesCommandInput}
 * @returns {@link DeleteQueuedReservedInstancesCommandOutput}
 * @see {@link DeleteQueuedReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteQueuedReservedInstancesCommand extends $Command
  .classBuilder<
    DeleteQueuedReservedInstancesCommandInput,
    DeleteQueuedReservedInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteQueuedReservedInstances", {})
  .n("EC2Client", "DeleteQueuedReservedInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueuedReservedInstancesCommand)
  .de(de_DeleteQueuedReservedInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueuedReservedInstancesRequest;
      output: DeleteQueuedReservedInstancesResult;
    };
    sdk: {
      input: DeleteQueuedReservedInstancesCommandInput;
      output: DeleteQueuedReservedInstancesCommandOutput;
    };
  };
}
