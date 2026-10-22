// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnvironmentInput, CreateEnvironmentOutput } from "../models/models_0";
import { CreateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentOutput, __MetadataBearer {}

/**
 * Creates an environment and starts its validation and any requested provisioning. Storage provisioning and dependency checks may continue after the initial 201 response; use GetEnvironment to observe completion.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, CreateEnvironmentCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, CreateEnvironmentCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // CreateEnvironmentInput
 *   name: "STRING_VALUE", // required
 *   configuration: { // CreateEnvironmentConfiguration
 *     codeConfiguration: { // CreateCodeConfiguration
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
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentOutput
 * //   environmentId: "STRING_VALUE", // required
 * //   environmentArn: "STRING_VALUE", // required
 * //   status: "ACTIVE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed a service quota. Review your quota and request an increase if needed.
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
export class CreateEnvironmentCommand extends command<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironment",
  CreateEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentInput;
      output: CreateEnvironmentOutput;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
