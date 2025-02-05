// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteImportDataRequest, BatchDeleteImportDataResponse } from "../models/models_0";
import { de_BatchDeleteImportDataCommand, se_BatchDeleteImportDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteImportDataCommand}.
 */
export interface BatchDeleteImportDataCommandInput extends BatchDeleteImportDataRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteImportDataCommand}.
 */
export interface BatchDeleteImportDataCommandOutput extends BatchDeleteImportDataResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
 *       a number of records that can identify servers or applications. </p>
 *          <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when
 *       discovered servers match existing entries that you've previously discovered, the information
 *       for the already-existing discovered server is updated. When you delete an import task that
 *       contains records that were used to match, the information in those matched records that comes
 *       from the deleted records will also be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // BatchDeleteImportDataRequest
 *   importTaskIds: [ // ToDeleteIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   deleteHistory: true || false,
 * };
 * const command = new BatchDeleteImportDataCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteImportDataResponse
 * //   errors: [ // BatchDeleteImportDataErrorList
 * //     { // BatchDeleteImportDataError
 * //       importTaskId: "STRING_VALUE",
 * //       errorCode: "NOT_FOUND" || "INTERNAL_SERVER_ERROR" || "OVER_LIMIT",
 * //       errorDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteImportDataCommandInput - {@link BatchDeleteImportDataCommandInput}
 * @returns {@link BatchDeleteImportDataCommandOutput}
 * @see {@link BatchDeleteImportDataCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImportDataCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 * @public
 */
export class BatchDeleteImportDataCommand extends $Command
  .classBuilder<
    BatchDeleteImportDataCommandInput,
    BatchDeleteImportDataCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "BatchDeleteImportData", {})
  .n("ApplicationDiscoveryServiceClient", "BatchDeleteImportDataCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteImportDataCommand)
  .de(de_BatchDeleteImportDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteImportDataRequest;
      output: BatchDeleteImportDataResponse;
    };
    sdk: {
      input: BatchDeleteImportDataCommandInput;
      output: BatchDeleteImportDataCommandOutput;
    };
  };
}
