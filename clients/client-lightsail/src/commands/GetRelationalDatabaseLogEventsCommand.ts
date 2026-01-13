// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetRelationalDatabaseLogEventsRequest, GetRelationalDatabaseLogEventsResult } from "../models/models_1";
import { GetRelationalDatabaseLogEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseLogEventsCommand}.
 */
export interface GetRelationalDatabaseLogEventsCommandInput extends GetRelationalDatabaseLogEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseLogEventsCommand}.
 */
export interface GetRelationalDatabaseLogEventsCommandOutput extends GetRelationalDatabaseLogEventsResult, __MetadataBearer {}

/**
 * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseLogEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseLogEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseLogEventsRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   logStreamName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   startFromHead: true || false,
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabaseLogEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseLogEventsResult
 * //   resourceLogEvents: [ // LogEventList
 * //     { // LogEvent
 * //       createdAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextBackwardToken: "STRING_VALUE",
 * //   nextForwardToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseLogEventsCommandInput - {@link GetRelationalDatabaseLogEventsCommandInput}
 * @returns {@link GetRelationalDatabaseLogEventsCommandOutput}
 * @see {@link GetRelationalDatabaseLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseLogEventsCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseLogEventsCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseLogEventsCommandInput,
    GetRelationalDatabaseLogEventsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetRelationalDatabaseLogEvents", {})
  .n("LightsailClient", "GetRelationalDatabaseLogEventsCommand")
  .sc(GetRelationalDatabaseLogEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseLogEventsRequest;
      output: GetRelationalDatabaseLogEventsResult;
    };
    sdk: {
      input: GetRelationalDatabaseLogEventsCommandInput;
      output: GetRelationalDatabaseLogEventsCommandOutput;
    };
  };
}
