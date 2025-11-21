// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateScheduledActionRequest, UpdateScheduledActionResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { UpdateScheduledAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandInput extends UpdateScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandOutput extends UpdateScheduledActionResponse, __MetadataBearer {}

/**
 * <p>Updates a scheduled action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateScheduledActionCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateScheduledActionCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateScheduledActionRequest
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
 *   roleArn: "STRING_VALUE",
 *   enabled: true || false,
 *   scheduledActionDescription: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledActionResponse
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
 * @param UpdateScheduledActionCommandInput - {@link UpdateScheduledActionCommandInput}
 * @returns {@link UpdateScheduledActionCommandOutput}
 * @see {@link UpdateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledActionCommandOutput} for command's `response` shape.
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
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class UpdateScheduledActionCommand extends $Command
  .classBuilder<
    UpdateScheduledActionCommandInput,
    UpdateScheduledActionCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "UpdateScheduledAction", {})
  .n("RedshiftServerlessClient", "UpdateScheduledActionCommand")
  .sc(UpdateScheduledAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduledActionRequest;
      output: UpdateScheduledActionResponse;
    };
    sdk: {
      input: UpdateScheduledActionCommandInput;
      output: UpdateScheduledActionCommandOutput;
    };
  };
}
