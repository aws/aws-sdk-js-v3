// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseLogStreamsRequest, GetRelationalDatabaseLogStreamsResult } from "../models/models_1";
import {
  de_GetRelationalDatabaseLogStreamsCommand,
  se_GetRelationalDatabaseLogStreamsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseLogStreamsCommand}.
 */
export interface GetRelationalDatabaseLogStreamsCommandInput extends GetRelationalDatabaseLogStreamsRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseLogStreamsCommand}.
 */
export interface GetRelationalDatabaseLogStreamsCommandOutput
  extends GetRelationalDatabaseLogStreamsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of available log streams for a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseLogStreamsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseLogStreamsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseLogStreamsRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 * };
 * const command = new GetRelationalDatabaseLogStreamsCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseLogStreamsResult
 * //   logStreams: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseLogStreamsCommandInput - {@link GetRelationalDatabaseLogStreamsCommandInput}
 * @returns {@link GetRelationalDatabaseLogStreamsCommandOutput}
 * @see {@link GetRelationalDatabaseLogStreamsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseLogStreamsCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseLogStreamsCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseLogStreamsCommandInput,
    GetRelationalDatabaseLogStreamsCommandOutput,
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
  .s("Lightsail_20161128", "GetRelationalDatabaseLogStreams", {})
  .n("LightsailClient", "GetRelationalDatabaseLogStreamsCommand")
  .f(void 0, void 0)
  .ser(se_GetRelationalDatabaseLogStreamsCommand)
  .de(de_GetRelationalDatabaseLogStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseLogStreamsRequest;
      output: GetRelationalDatabaseLogStreamsResult;
    };
    sdk: {
      input: GetRelationalDatabaseLogStreamsCommandInput;
      output: GetRelationalDatabaseLogStreamsCommandOutput;
    };
  };
}
