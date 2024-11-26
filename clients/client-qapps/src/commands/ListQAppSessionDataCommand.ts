// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQAppSessionDataInput, ListQAppSessionDataOutput } from "../models/models_0";
import { de_ListQAppSessionDataCommand, se_ListQAppSessionDataCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQAppSessionDataCommand}.
 */
export interface ListQAppSessionDataCommandInput extends ListQAppSessionDataInput {}
/**
 * @public
 *
 * The output of {@link ListQAppSessionDataCommand}.
 */
export interface ListQAppSessionDataCommandOutput extends ListQAppSessionDataOutput, __MetadataBearer {}

/**
 * <p>Lists the collected data of a Q App data collection session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ListQAppSessionDataCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ListQAppSessionDataCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // ListQAppSessionDataInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new ListQAppSessionDataCommand(input);
 * const response = await client.send(command);
 * // { // ListQAppSessionDataOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionData: [ // QAppSessionDataList
 * //     { // QAppSessionData
 * //       cardId: "STRING_VALUE", // required
 * //       value: "DOCUMENT_VALUE",
 * //       user: { // User
 * //         userId: "STRING_VALUE",
 * //       },
 * //       submissionId: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQAppSessionDataCommandInput - {@link ListQAppSessionDataCommandInput}
 * @returns {@link ListQAppSessionDataCommandOutput}
 * @see {@link ListQAppSessionDataCommandInput} for command's `input` shape.
 * @see {@link ListQAppSessionDataCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because
 *       it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many
 *       requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 * @public
 */
export class ListQAppSessionDataCommand extends $Command
  .classBuilder<
    ListQAppSessionDataCommandInput,
    ListQAppSessionDataCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "ListQAppSessionData", {})
  .n("QAppsClient", "ListQAppSessionDataCommand")
  .f(void 0, void 0)
  .ser(se_ListQAppSessionDataCommand)
  .de(de_ListQAppSessionDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQAppSessionDataInput;
      output: ListQAppSessionDataOutput;
    };
    sdk: {
      input: ListQAppSessionDataCommandInput;
      output: ListQAppSessionDataCommandOutput;
    };
  };
}
