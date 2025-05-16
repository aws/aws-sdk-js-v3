// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOnClusterAppUIPresignedURLInput, GetOnClusterAppUIPresignedURLOutput } from "../models/models_0";
import {
  de_GetOnClusterAppUIPresignedURLCommand,
  se_GetOnClusterAppUIPresignedURLCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOnClusterAppUIPresignedURLCommand}.
 */
export interface GetOnClusterAppUIPresignedURLCommandInput extends GetOnClusterAppUIPresignedURLInput {}
/**
 * @public
 *
 * The output of {@link GetOnClusterAppUIPresignedURLCommand}.
 */
export interface GetOnClusterAppUIPresignedURLCommandOutput
  extends GetOnClusterAppUIPresignedURLOutput,
    __MetadataBearer {}

/**
 * <p>The presigned URL properties for the cluster's application user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetOnClusterAppUIPresignedURLCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetOnClusterAppUIPresignedURLCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetOnClusterAppUIPresignedURLInput
 *   ClusterId: "STRING_VALUE", // required
 *   OnClusterAppUIType: "SparkHistoryServer" || "YarnTimelineService" || "TezUI" || "ApplicationMaster" || "JobHistoryServer" || "ResourceManager",
 *   ApplicationId: "STRING_VALUE",
 *   DryRun: true || false,
 *   ExecutionRoleArn: "STRING_VALUE",
 * };
 * const command = new GetOnClusterAppUIPresignedURLCommand(input);
 * const response = await client.send(command);
 * // { // GetOnClusterAppUIPresignedURLOutput
 * //   PresignedURLReady: true || false,
 * //   PresignedURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOnClusterAppUIPresignedURLCommandInput - {@link GetOnClusterAppUIPresignedURLCommandInput}
 * @returns {@link GetOnClusterAppUIPresignedURLCommandOutput}
 * @see {@link GetOnClusterAppUIPresignedURLCommandInput} for command's `input` shape.
 * @see {@link GetOnClusterAppUIPresignedURLCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetOnClusterAppUIPresignedURLCommand extends $Command
  .classBuilder<
    GetOnClusterAppUIPresignedURLCommandInput,
    GetOnClusterAppUIPresignedURLCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "GetOnClusterAppUIPresignedURL", {})
  .n("EMRClient", "GetOnClusterAppUIPresignedURLCommand")
  .f(void 0, void 0)
  .ser(se_GetOnClusterAppUIPresignedURLCommand)
  .de(de_GetOnClusterAppUIPresignedURLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOnClusterAppUIPresignedURLInput;
      output: GetOnClusterAppUIPresignedURLOutput;
    };
    sdk: {
      input: GetOnClusterAppUIPresignedURLCommandInput;
      output: GetOnClusterAppUIPresignedURLCommandOutput;
    };
  };
}
