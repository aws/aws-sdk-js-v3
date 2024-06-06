// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/models_1";
import {
  de_GetRelationalDatabaseParametersCommand,
  se_GetRelationalDatabaseParametersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseParametersCommand}.
 */
export interface GetRelationalDatabaseParametersCommandInput extends GetRelationalDatabaseParametersRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseParametersCommand}.
 */
export interface GetRelationalDatabaseParametersCommandOutput
  extends GetRelationalDatabaseParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns all of the runtime parameters offered by the underlying database software, or
 *       engine, for a specific database in Amazon Lightsail.</p>
 *          <p>In addition to the parameter names and values, this operation returns other information
 *       about each parameter. This information includes whether changes require a reboot, whether the
 *       parameter is modifiable, the allowed values, and the data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseParametersRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseParametersResult
 * //   parameters: [ // RelationalDatabaseParameterList
 * //     { // RelationalDatabaseParameter
 * //       allowedValues: "STRING_VALUE",
 * //       applyMethod: "STRING_VALUE",
 * //       applyType: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       isModifiable: true || false,
 * //       parameterName: "STRING_VALUE",
 * //       parameterValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseParametersCommandInput - {@link GetRelationalDatabaseParametersCommandInput}
 * @returns {@link GetRelationalDatabaseParametersCommandOutput}
 * @see {@link GetRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseParametersCommandOutput} for command's `response` shape.
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
export class GetRelationalDatabaseParametersCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseParametersCommandInput,
    GetRelationalDatabaseParametersCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetRelationalDatabaseParameters", {})
  .n("LightsailClient", "GetRelationalDatabaseParametersCommand")
  .f(void 0, void 0)
  .ser(se_GetRelationalDatabaseParametersCommand)
  .de(de_GetRelationalDatabaseParametersCommand)
  .build() {}
