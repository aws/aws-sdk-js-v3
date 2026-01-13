// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListRoleAliasesRequest, ListRoleAliasesResponse } from "../models/models_1";
import { ListRoleAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoleAliasesCommand}.
 */
export interface ListRoleAliasesCommandInput extends ListRoleAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoleAliasesCommand}.
 */
export interface ListRoleAliasesCommandOutput extends ListRoleAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the role aliases registered in your account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRoleAliasesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRoleAliasesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListRoleAliasesRequest
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListRoleAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoleAliasesResponse
 * //   roleAliases: [ // RoleAliases
 * //     "STRING_VALUE",
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoleAliasesCommandInput - {@link ListRoleAliasesCommandInput}
 * @returns {@link ListRoleAliasesCommandOutput}
 * @see {@link ListRoleAliasesCommandInput} for command's `input` shape.
 * @see {@link ListRoleAliasesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListRoleAliasesCommand extends $Command
  .classBuilder<
    ListRoleAliasesCommandInput,
    ListRoleAliasesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListRoleAliases", {})
  .n("IoTClient", "ListRoleAliasesCommand")
  .sc(ListRoleAliases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoleAliasesRequest;
      output: ListRoleAliasesResponse;
    };
    sdk: {
      input: ListRoleAliasesCommandInput;
      output: ListRoleAliasesCommandOutput;
    };
  };
}
