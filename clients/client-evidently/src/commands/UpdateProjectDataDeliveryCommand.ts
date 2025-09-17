// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { UpdateProjectDataDeliveryRequest, UpdateProjectDataDeliveryResponse } from "../models/models_0";
import { de_UpdateProjectDataDeliveryCommand, se_UpdateProjectDataDeliveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectDataDeliveryCommand}.
 */
export interface UpdateProjectDataDeliveryCommandInput extends UpdateProjectDataDeliveryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProjectDataDeliveryCommand}.
 */
export interface UpdateProjectDataDeliveryCommandOutput extends UpdateProjectDataDeliveryResponse, __MetadataBearer {}

/**
 * <p>Updates the data storage options for this project. If you store evaluation events, you an
 *       keep them and analyze them on your own. If you choose not to store evaluation events,
 *       Evidently deletes them after using them to produce metrics and other experiment results that
 *       you can view.</p>
 *          <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateProjectDataDeliveryCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateProjectDataDeliveryCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // UpdateProjectDataDeliveryRequest
 *   project: "STRING_VALUE", // required
 *   s3Destination: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     prefix: "STRING_VALUE",
 *   },
 *   cloudWatchLogs: { // CloudWatchLogsDestinationConfig
 *     logGroup: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateProjectDataDeliveryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectDataDeliveryResponse
 * //   project: { // Project
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     featureCount: Number("long"),
 * //     launchCount: Number("long"),
 * //     activeLaunchCount: Number("long"),
 * //     experimentCount: Number("long"),
 * //     activeExperimentCount: Number("long"),
 * //     dataDelivery: { // ProjectDataDelivery
 * //       s3Destination: { // S3Destination
 * //         bucket: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       cloudWatchLogs: { // CloudWatchLogsDestination
 * //         logGroup: "STRING_VALUE",
 * //       },
 * //     },
 * //     appConfigResource: { // ProjectAppConfigResource
 * //       applicationId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       configurationProfileId: "STRING_VALUE", // required
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProjectDataDeliveryCommandInput - {@link UpdateProjectDataDeliveryCommandInput}
 * @returns {@link UpdateProjectDataDeliveryCommandOutput}
 * @see {@link UpdateProjectDataDeliveryCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectDataDeliveryCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class UpdateProjectDataDeliveryCommand extends $Command
  .classBuilder<
    UpdateProjectDataDeliveryCommandInput,
    UpdateProjectDataDeliveryCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "UpdateProjectDataDelivery", {})
  .n("EvidentlyClient", "UpdateProjectDataDeliveryCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProjectDataDeliveryCommand)
  .de(de_UpdateProjectDataDeliveryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectDataDeliveryRequest;
      output: UpdateProjectDataDeliveryResponse;
    };
    sdk: {
      input: UpdateProjectDataDeliveryCommandInput;
      output: UpdateProjectDataDeliveryCommandOutput;
    };
  };
}
