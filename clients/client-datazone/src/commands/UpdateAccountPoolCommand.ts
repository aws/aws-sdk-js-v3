// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccountPoolInput, UpdateAccountPoolOutput } from "../models/models_2";
import { UpdateAccountPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccountPoolCommand}.
 */
export interface UpdateAccountPoolCommandInput extends UpdateAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccountPoolCommand}.
 */
export interface UpdateAccountPoolCommandOutput extends UpdateAccountPoolOutput, __MetadataBearer {}

/**
 * Updates the account pool.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   resolutionStrategy: "MANUAL",
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
 * const command = new UpdateAccountPoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountPoolOutput
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
 * @param UpdateAccountPoolCommandInput - {@link UpdateAccountPoolCommandInput}
 * @returns {@link UpdateAccountPoolCommandOutput}
 * @see {@link UpdateAccountPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPoolCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class UpdateAccountPoolCommand extends command<UpdateAccountPoolCommandInput, UpdateAccountPoolCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountPool",
  UpdateAccountPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountPoolInput;
      output: UpdateAccountPoolOutput;
    };
    sdk: {
      input: UpdateAccountPoolCommandInput;
      output: UpdateAccountPoolCommandOutput;
    };
  };
}
