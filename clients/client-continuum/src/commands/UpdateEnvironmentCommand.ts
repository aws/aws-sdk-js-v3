// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnvironmentInput, UpdateEnvironmentOutput } from "../models/models_0";
import { UpdateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * Updates the customer-controlled mutable properties of an environment. Only the name, the environment's S3 integration source and repository selections, its scan frequency, its network policy, and its patch creation policy can be changed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, UpdateEnvironmentCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // UpdateEnvironmentInput
 *   environmentId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   configuration: { // UpdateEnvironmentConfiguration
 *     codeConfiguration: { // UpdateCodeConfiguration
 *       sourceConfiguration: { // EnvironmentSourceConfiguration
 *         s3Sources: [ // EnvironmentS3Sources
 *           { // EnvironmentS3IntegrationSource
 *             integrationId: "STRING_VALUE", // required
 *             codePrefix: "STRING_VALUE",
 *             contextPrefix: "STRING_VALUE",
 *           },
 *         ],
 *         repositorySources: [ // EnvironmentRepositorySources
 *           { // EnvironmentRepositorySource
 *             integrationId: "STRING_VALUE", // required
 *             repository: "STRING_VALUE", // required
 *             defaultBranch: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       environmentConfiguration: { // EnvironmentConfiguration
 *         network: { // EnvironmentNetworkConfiguration
 *           allowedDomains: [ // DomainNames
 *             "STRING_VALUE",
 *           ],
 *         },
 *         scanFrequency: "STRING_VALUE",
 *         patchCreationPolicy: "ENABLED" || "DISABLED",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentOutput
 * //   environmentId: "STRING_VALUE", // required
 * //   environmentArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
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
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
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
export class UpdateEnvironmentCommand extends command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnvironment",
  UpdateEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentInput;
      output: UpdateEnvironmentOutput;
    };
    sdk: {
      input: UpdateEnvironmentCommandInput;
      output: UpdateEnvironmentCommandOutput;
    };
  };
}
