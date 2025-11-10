// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccountPoolInput, CreateAccountPoolOutput } from "../models/models_0";
import { CreateAccountPool } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountPoolCommand}.
 */
export interface CreateAccountPoolCommandInput extends CreateAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link CreateAccountPoolCommand}.
 */
export interface CreateAccountPoolCommandOutput extends CreateAccountPoolOutput, __MetadataBearer {}

/**
 * <p>Creates an account pool. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   resolutionStrategy: "MANUAL", // required
 *   accountSource: { // AccountSource Union: only one key present
 *     accounts: [ // AccountInfoList
 *       { // AccountInfo
 *         awsAccountId: "STRING_VALUE", // required
 *         supportedRegions: [ // AwsRegionList // required
 *           "STRING_VALUE",
 *         ],
 *         awsAccountName: "STRING_VALUE",
 *       },
 *     ],
 *     customAccountPoolHandler: { // CustomAccountPoolHandler
 *       lambdaFunctionArn: "STRING_VALUE", // required
 *       lambdaExecutionRoleArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateAccountPoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountPoolOutput
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
 * @param CreateAccountPoolCommandInput - {@link CreateAccountPoolCommandInput}
 * @returns {@link CreateAccountPoolCommandOutput}
 * @see {@link CreateAccountPoolCommandInput} for command's `input` shape.
 * @see {@link CreateAccountPoolCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class CreateAccountPoolCommand extends $Command
  .classBuilder<
    CreateAccountPoolCommandInput,
    CreateAccountPoolCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateAccountPool", {})
  .n("DataZoneClient", "CreateAccountPoolCommand")
  .sc(CreateAccountPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountPoolInput;
      output: CreateAccountPoolOutput;
    };
    sdk: {
      input: CreateAccountPoolCommandInput;
      output: CreateAccountPoolCommandOutput;
    };
  };
}
