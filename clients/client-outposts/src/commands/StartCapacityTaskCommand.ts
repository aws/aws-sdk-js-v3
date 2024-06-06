// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartCapacityTaskInput, StartCapacityTaskOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_StartCapacityTaskCommand, se_StartCapacityTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCapacityTaskCommand}.
 */
export interface StartCapacityTaskCommandInput extends StartCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link StartCapacityTaskCommand}.
 */
export interface StartCapacityTaskCommandOutput extends StartCapacityTaskOutput, __MetadataBearer {}

/**
 * <p>Starts the specified capacity task. You can have one active capacity task for an order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, StartCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, StartCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // StartCapacityTaskInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   OrderId: "STRING_VALUE", // required
 *   InstancePools: [ // RequestedInstancePools // required
 *     { // InstanceTypeCapacity
 *       InstanceType: "STRING_VALUE", // required
 *       Count: Number("int"), // required
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new StartCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartCapacityTaskOutput
 * //   CapacityTaskId: "STRING_VALUE",
 * //   OutpostId: "STRING_VALUE",
 * //   OrderId: "STRING_VALUE",
 * //   RequestedInstancePools: [ // RequestedInstancePools
 * //     { // InstanceTypeCapacity
 * //       InstanceType: "STRING_VALUE", // required
 * //       Count: Number("int"), // required
 * //     },
 * //   ],
 * //   DryRun: true || false,
 * //   CapacityTaskStatus: "REQUESTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "CANCELLED",
 * //   Failed: { // CapacityTaskFailure
 * //     Reason: "STRING_VALUE", // required
 * //     Type: "UNSUPPORTED_CAPACITY_CONFIGURATION",
 * //   },
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartCapacityTaskCommandInput - {@link StartCapacityTaskCommandInput}
 * @returns {@link StartCapacityTaskCommandOutput}
 * @see {@link StartCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link StartCapacityTaskCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class StartCapacityTaskCommand extends $Command
  .classBuilder<
    StartCapacityTaskCommandInput,
    StartCapacityTaskCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "StartCapacityTask", {})
  .n("OutpostsClient", "StartCapacityTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartCapacityTaskCommand)
  .de(de_StartCapacityTaskCommand)
  .build() {}
