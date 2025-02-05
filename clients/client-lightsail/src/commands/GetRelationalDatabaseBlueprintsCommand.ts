// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBlueprintsRequest, GetRelationalDatabaseBlueprintsResult } from "../models/models_1";
import {
  de_GetRelationalDatabaseBlueprintsCommand,
  se_GetRelationalDatabaseBlueprintsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseBlueprintsCommand}.
 */
export interface GetRelationalDatabaseBlueprintsCommandInput extends GetRelationalDatabaseBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseBlueprintsCommand}.
 */
export interface GetRelationalDatabaseBlueprintsCommandOutput
  extends GetRelationalDatabaseBlueprintsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes
 *       the major engine version of a database.</p>
 *          <p>You can use a blueprint ID to create a new database that runs a specific database
 *       engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseBlueprintsRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabaseBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseBlueprintsResult
 * //   blueprints: [ // RelationalDatabaseBlueprintList
 * //     { // RelationalDatabaseBlueprint
 * //       blueprintId: "STRING_VALUE",
 * //       engine: "mysql",
 * //       engineVersion: "STRING_VALUE",
 * //       engineDescription: "STRING_VALUE",
 * //       engineVersionDescription: "STRING_VALUE",
 * //       isEngineDefault: true || false,
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseBlueprintsCommandInput - {@link GetRelationalDatabaseBlueprintsCommandInput}
 * @returns {@link GetRelationalDatabaseBlueprintsCommandOutput}
 * @see {@link GetRelationalDatabaseBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
 * @public
 */
export class GetRelationalDatabaseBlueprintsCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseBlueprintsCommandInput,
    GetRelationalDatabaseBlueprintsCommandOutput,
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
  .s("Lightsail_20161128", "GetRelationalDatabaseBlueprints", {})
  .n("LightsailClient", "GetRelationalDatabaseBlueprintsCommand")
  .f(void 0, void 0)
  .ser(se_GetRelationalDatabaseBlueprintsCommand)
  .de(de_GetRelationalDatabaseBlueprintsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseBlueprintsRequest;
      output: GetRelationalDatabaseBlueprintsResult;
    };
    sdk: {
      input: GetRelationalDatabaseBlueprintsCommandInput;
      output: GetRelationalDatabaseBlueprintsCommandOutput;
    };
  };
}
