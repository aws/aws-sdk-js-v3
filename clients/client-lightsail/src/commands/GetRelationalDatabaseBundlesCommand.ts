// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/models_1";
import {
  de_GetRelationalDatabaseBundlesCommand,
  se_GetRelationalDatabaseBundlesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseBundlesCommand}.
 */
export interface GetRelationalDatabaseBundlesCommandInput extends GetRelationalDatabaseBundlesRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseBundlesCommand}.
 */
export interface GetRelationalDatabaseBundlesCommandOutput
  extends GetRelationalDatabaseBundlesResult,
    __MetadataBearer {}

/**
 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the
 *       performance specifications for a database.</p>
 *          <p>You can use a bundle ID to create a new database with explicit performance
 *       specifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseBundlesRequest
 *   pageToken: "STRING_VALUE",
 *   includeInactive: true || false,
 * };
 * const command = new GetRelationalDatabaseBundlesCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseBundlesResult
 * //   bundles: [ // RelationalDatabaseBundleList
 * //     { // RelationalDatabaseBundle
 * //       bundleId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       price: Number("float"),
 * //       ramSizeInGb: Number("float"),
 * //       diskSizeInGb: Number("int"),
 * //       transferPerMonthInGb: Number("int"),
 * //       cpuCount: Number("int"),
 * //       isEncrypted: true || false,
 * //       isActive: true || false,
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseBundlesCommandInput - {@link GetRelationalDatabaseBundlesCommandInput}
 * @returns {@link GetRelationalDatabaseBundlesCommandOutput}
 * @see {@link GetRelationalDatabaseBundlesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBundlesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetRelationalDatabaseBundlesCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseBundlesCommandInput,
    GetRelationalDatabaseBundlesCommandOutput,
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
  .s("Lightsail_20161128", "GetRelationalDatabaseBundles", {})
  .n("LightsailClient", "GetRelationalDatabaseBundlesCommand")
  .f(void 0, void 0)
  .ser(se_GetRelationalDatabaseBundlesCommand)
  .de(de_GetRelationalDatabaseBundlesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseBundlesRequest;
      output: GetRelationalDatabaseBundlesResult;
    };
    sdk: {
      input: GetRelationalDatabaseBundlesCommandInput;
      output: GetRelationalDatabaseBundlesCommandOutput;
    };
  };
}
