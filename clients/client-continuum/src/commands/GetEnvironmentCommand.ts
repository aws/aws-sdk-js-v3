// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentInput, GetEnvironmentOutput } from "../models/models_0";
import { GetEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentOutput, __MetadataBearer {}

/**
 * Retrieves the current state and configuration of an environment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetEnvironmentCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetEnvironmentCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetEnvironmentInput
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentOutput
 * //   environmentId: "STRING_VALUE", // required
 * //   environmentArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   configuration: { // EnvironmentConfigurationDetails
 * //     codeConfiguration: { // CodeConfigurationDetails
 * //       collectorDetails: { // CollectorDetails
 * //         collectorDataAccessRoleArn: "STRING_VALUE",
 * //       },
 * //       sourceConfiguration: { // EnvironmentSourceConfiguration
 * //         s3Sources: [ // EnvironmentS3Sources
 * //           { // EnvironmentS3IntegrationSource
 * //             integrationId: "STRING_VALUE", // required
 * //             codePrefix: "STRING_VALUE",
 * //             contextPrefix: "STRING_VALUE",
 * //           },
 * //         ],
 * //         repositorySources: [ // EnvironmentRepositorySources
 * //           { // EnvironmentRepositorySource
 * //             integrationId: "STRING_VALUE", // required
 * //             repository: "STRING_VALUE", // required
 * //             defaultBranch: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       environmentConfiguration: { // EnvironmentConfiguration
 * //         network: { // EnvironmentNetworkConfiguration
 * //           allowedDomains: [ // DomainNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         scanFrequency: "STRING_VALUE",
 * //         patchCreationPolicy: "ENABLED" || "DISABLED",
 * //       },
 * //       latestScan: { // CodeScanSummary
 * //         scanRunId: "STRING_VALUE", // required
 * //         status: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING" || "SUCCEEDED" || "FAILED", // required
 * //         origin: "MANUAL" || "SCHEDULED", // required
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         completedAt: new Date("TIMESTAMP"),
 * //         failureMessage: "STRING_VALUE",
 * //         failureStage: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class GetEnvironmentCommand extends command<GetEnvironmentCommandInput, GetEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironment",
  GetEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentInput;
      output: GetEnvironmentOutput;
    };
    sdk: {
      input: GetEnvironmentCommandInput;
      output: GetEnvironmentCommandOutput;
    };
  };
}
