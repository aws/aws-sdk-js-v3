// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerLogRequest, GetContainerLogResult } from "../models/models_0";
import { de_GetContainerLogCommand, se_GetContainerLogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContainerLogCommand}.
 */
export interface GetContainerLogCommandInput extends GetContainerLogRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerLogCommand}.
 */
export interface GetContainerLogCommandOutput extends GetContainerLogResult, __MetadataBearer {}

/**
 * <p>Returns the log events of a container of your Amazon Lightsail container service.</p>
 *          <p>If your container service has more than one node (i.e., a scale greater than 1), then the
 *       log events that are returned for the specified container are merged from all nodes on your
 *       container service.</p>
 *          <note>
 *             <p>Container logs are retained for a certain amount of time. For more information, see
 *           <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>Amazon Web Services General
 *           Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerLogCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerLogCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContainerLogRequest
 *   serviceName: "STRING_VALUE", // required
 *   containerName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   filterPattern: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetContainerLogCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerLogResult
 * //   logEvents: [ // ContainerServiceLogEventList
 * //     { // ContainerServiceLogEvent
 * //       createdAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContainerLogCommandInput - {@link GetContainerLogCommandInput}
 * @returns {@link GetContainerLogCommandOutput}
 * @see {@link GetContainerLogCommandInput} for command's `input` shape.
 * @see {@link GetContainerLogCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetContainerLogCommand extends $Command
  .classBuilder<
    GetContainerLogCommandInput,
    GetContainerLogCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetContainerLog", {})
  .n("LightsailClient", "GetContainerLogCommand")
  .f(void 0, void 0)
  .ser(se_GetContainerLogCommand)
  .de(de_GetContainerLogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerLogRequest;
      output: GetContainerLogResult;
    };
    sdk: {
      input: GetContainerLogCommandInput;
      output: GetContainerLogCommandOutput;
    };
  };
}
