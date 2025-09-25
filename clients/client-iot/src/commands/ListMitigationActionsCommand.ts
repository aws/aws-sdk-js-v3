// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListMitigationActionsRequest, ListMitigationActionsResponse } from "../models/models_2";
import { ListMitigationActions } from "../schemas/schemas_69_Mitigation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMitigationActionsCommand}.
 */
export interface ListMitigationActionsCommandInput extends ListMitigationActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMitigationActionsCommand}.
 */
export interface ListMitigationActionsCommandOutput extends ListMitigationActionsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMitigationActionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMitigationActionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListMitigationActionsRequest
 *   actionType: "UPDATE_DEVICE_CERTIFICATE" || "UPDATE_CA_CERTIFICATE" || "ADD_THINGS_TO_THING_GROUP" || "REPLACE_DEFAULT_POLICY_VERSION" || "ENABLE_IOT_LOGGING" || "PUBLISH_FINDING_TO_SNS",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMitigationActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMitigationActionsResponse
 * //   actionIdentifiers: [ // MitigationActionIdentifierList
 * //     { // MitigationActionIdentifier
 * //       actionName: "STRING_VALUE",
 * //       actionArn: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMitigationActionsCommandInput - {@link ListMitigationActionsCommandInput}
 * @returns {@link ListMitigationActionsCommandOutput}
 * @see {@link ListMitigationActionsCommandInput} for command's `input` shape.
 * @see {@link ListMitigationActionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListMitigationActionsCommand extends $Command
  .classBuilder<
    ListMitigationActionsCommandInput,
    ListMitigationActionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListMitigationActions", {})
  .n("IoTClient", "ListMitigationActionsCommand")
  .sc(ListMitigationActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMitigationActionsRequest;
      output: ListMitigationActionsResponse;
    };
    sdk: {
      input: ListMitigationActionsCommandInput;
      output: ListMitigationActionsCommandOutput;
    };
  };
}
