// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEnvironmentActionsInput, ListEnvironmentActionsOutput } from "../models/models_1";
import { de_ListEnvironmentActionsCommand, se_ListEnvironmentActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentActionsCommand}.
 */
export interface ListEnvironmentActionsCommandInput extends ListEnvironmentActionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentActionsCommand}.
 */
export interface ListEnvironmentActionsCommandOutput extends ListEnvironmentActionsOutput, __MetadataBearer {}

/**
 * <p>Lists existing environment actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentActionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentActionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentActionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentActionsOutput
 * //   items: [ // ListEnvironmentActionSummaries
 * //     { // EnvironmentActionSummary
 * //       domainId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       parameters: { // ActionParameters Union: only one key present
 * //         awsConsoleLink: { // AwsConsoleLinkParameters
 * //           uri: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentActionsCommandInput - {@link ListEnvironmentActionsCommandInput}
 * @returns {@link ListEnvironmentActionsCommandOutput}
 * @see {@link ListEnvironmentActionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentActionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentActionsCommand extends $Command
  .classBuilder<
    ListEnvironmentActionsCommandInput,
    ListEnvironmentActionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListEnvironmentActions", {})
  .n("DataZoneClient", "ListEnvironmentActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentActionsCommand)
  .de(de_ListEnvironmentActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentActionsInput;
      output: ListEnvironmentActionsOutput;
    };
    sdk: {
      input: ListEnvironmentActionsCommandInput;
      output: ListEnvironmentActionsCommandOutput;
    };
  };
}
