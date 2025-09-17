// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateScheduledActionRequest, CreateScheduledActionResponse } from "../models/models_0";
import { de_CreateScheduledActionCommand, se_CreateScheduledActionCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandInput extends CreateScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandOutput extends CreateScheduledActionResponse, __MetadataBearer {}

/**
 * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 *          For example, you can create a schedule of when to run the <code>CreateSnapshot</code> API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateScheduledActionCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateScheduledActionCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateScheduledActionRequest
 *   scheduledActionName: "STRING_VALUE", // required
 *   targetAction: { // TargetAction Union: only one key present
 *     createSnapshot: { // CreateSnapshotScheduleActionParameters
 *       namespaceName: "STRING_VALUE", // required
 *       snapshotNamePrefix: "STRING_VALUE", // required
 *       retentionPeriod: Number("int"),
 *       tags: [ // TagList
 *         { // Tag
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   schedule: { // Schedule Union: only one key present
 *     at: new Date("TIMESTAMP"),
 *     cron: "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   namespaceName: "STRING_VALUE", // required
 *   enabled: true || false,
 *   scheduledActionDescription: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new CreateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledActionResponse
 * //   scheduledAction: { // ScheduledActionResponse
 * //     scheduledActionName: "STRING_VALUE",
 * //     schedule: { // Schedule Union: only one key present
 * //       at: new Date("TIMESTAMP"),
 * //       cron: "STRING_VALUE",
 * //     },
 * //     scheduledActionDescription: "STRING_VALUE",
 * //     nextInvocations: [ // NextInvocationsList
 * //       new Date("TIMESTAMP"),
 * //     ],
 * //     roleArn: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     targetAction: { // TargetAction Union: only one key present
 * //       createSnapshot: { // CreateSnapshotScheduleActionParameters
 * //         namespaceName: "STRING_VALUE", // required
 * //         snapshotNamePrefix: "STRING_VALUE", // required
 * //         retentionPeriod: Number("int"),
 * //         tags: [ // TagList
 * //           { // Tag
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     namespaceName: "STRING_VALUE",
 * //     scheduledActionUuid: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateScheduledActionCommandInput - {@link CreateScheduledActionCommandInput}
 * @returns {@link CreateScheduledActionCommandOutput}
 * @see {@link CreateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class CreateScheduledActionCommand extends $Command
  .classBuilder<
    CreateScheduledActionCommandInput,
    CreateScheduledActionCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "CreateScheduledAction", {})
  .n("RedshiftServerlessClient", "CreateScheduledActionCommand")
  .f(void 0, void 0)
  .ser(se_CreateScheduledActionCommand)
  .de(de_CreateScheduledActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduledActionRequest;
      output: CreateScheduledActionResponse;
    };
    sdk: {
      input: CreateScheduledActionCommandInput;
      output: CreateScheduledActionCommandOutput;
    };
  };
}
