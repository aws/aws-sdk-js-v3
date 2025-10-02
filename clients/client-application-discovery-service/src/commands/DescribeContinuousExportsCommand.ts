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
import { DescribeContinuousExportsRequest, DescribeContinuousExportsResponse } from "../models/models_0";
import { de_DescribeContinuousExportsCommand, se_DescribeContinuousExportsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContinuousExportsCommand}.
 */
export interface DescribeContinuousExportsCommandInput extends DescribeContinuousExportsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContinuousExportsCommand}.
 */
export interface DescribeContinuousExportsCommandOutput extends DescribeContinuousExportsResponse, __MetadataBearer {}

/**
 * <p>Lists exports as specified by ID. All continuous exports associated with your user
 *       can be listed if you call <code>DescribeContinuousExports</code> as is without passing
 *       any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeContinuousExportsRequest
 *   exportIds: [ // ContinuousExportIds
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeContinuousExportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContinuousExportsResponse
 * //   descriptions: [ // ContinuousExportDescriptions
 * //     { // ContinuousExportDescription
 * //       exportId: "STRING_VALUE",
 * //       status: "START_IN_PROGRESS" || "START_FAILED" || "ACTIVE" || "ERROR" || "STOP_IN_PROGRESS" || "STOP_FAILED" || "INACTIVE",
 * //       statusDetail: "STRING_VALUE",
 * //       s3Bucket: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       stopTime: new Date("TIMESTAMP"),
 * //       dataSource: "AGENT",
 * //       schemaStorageConfig: { // SchemaStorageConfig
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeContinuousExportsCommandInput - {@link DescribeContinuousExportsCommandInput}
 * @returns {@link DescribeContinuousExportsCommandOutput}
 * @see {@link DescribeContinuousExportsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousExportsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class DescribeContinuousExportsCommand extends $Command
  .classBuilder<
    DescribeContinuousExportsCommandInput,
    DescribeContinuousExportsCommandOutput,
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
  .s("AWSPoseidonService_V2015_11_01", "DescribeContinuousExports", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeContinuousExportsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContinuousExportsCommand)
  .de(de_DescribeContinuousExportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContinuousExportsRequest;
      output: DescribeContinuousExportsResponse;
    };
    sdk: {
      input: DescribeContinuousExportsCommandInput;
      output: DescribeContinuousExportsCommandOutput;
    };
  };
}
