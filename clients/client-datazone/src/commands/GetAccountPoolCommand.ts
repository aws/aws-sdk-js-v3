// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountPoolInput, GetAccountPoolOutput } from "../models/models_1";
import { GetAccountPool } from "../schemas/schemas_17_AccountPool";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountPoolCommand}.
 */
export interface GetAccountPoolCommandInput extends GetAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link GetAccountPoolCommand}.
 */
export interface GetAccountPoolCommandOutput extends GetAccountPoolOutput, __MetadataBearer {}

/**
 * <p>Gets the details of the account pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetAccountPoolCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountPoolOutput
 * //   domainId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   resolutionStrategy: "MANUAL",
 * //   accountSource: { // AccountSource Union: only one key present
 * //     accounts: [ // AccountInfoList
 * //       { // AccountInfo
 * //         awsAccountId: "STRING_VALUE", // required
 * //         supportedRegions: [ // AwsRegionList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         awsAccountName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     customAccountPoolHandler: { // CustomAccountPoolHandler
 * //       lambdaFunctionArn: "STRING_VALUE", // required
 * //       lambdaExecutionRoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   domainUnitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountPoolCommandInput - {@link GetAccountPoolCommandInput}
 * @returns {@link GetAccountPoolCommandOutput}
 * @see {@link GetAccountPoolCommandInput} for command's `input` shape.
 * @see {@link GetAccountPoolCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetAccountPoolCommand extends $Command
  .classBuilder<
    GetAccountPoolCommandInput,
    GetAccountPoolCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetAccountPool", {})
  .n("DataZoneClient", "GetAccountPoolCommand")
  .sc(GetAccountPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountPoolInput;
      output: GetAccountPoolOutput;
    };
    sdk: {
      input: GetAccountPoolCommandInput;
      output: GetAccountPoolCommandOutput;
    };
  };
}
