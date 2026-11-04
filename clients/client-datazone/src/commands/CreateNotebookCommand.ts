// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotebookInput, CreateNotebookOutput } from "../models/models_0";
import { CreateNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandInput extends CreateNotebookInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandOutput extends CreateNotebookOutput, __MetadataBearer {}

/**
 * Creates a [notebook](https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html) in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateNotebookCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateNotebookCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateNotebookInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "DATA" || "SQL",
 *   metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   parameters: { // Parameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateNotebookCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   cellOrder: [ // CellOrder // required
 * //     {},
 * //   ],
 * //   status: "ACTIVE" || "ARCHIVED" || "SYNC_IN_PROGRESS" || "SYNC_FAILED", // required
 * //   type: "DATA" || "SQL",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   lockedBy: "STRING_VALUE",
 * //   lockedAt: new Date("TIMESTAMP"),
 * //   lockExpiresAt: new Date("TIMESTAMP"),
 * //   computeId: "STRING_VALUE",
 * //   metadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   parameters: { // Parameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   environmentConfiguration: { // EnvironmentConfig
 * //     imageVersion: "STRING_VALUE",
 * //     packageConfig: { // PackageConfig
 * //       packageManager: "UV", // required
 * //       packageSpecification: "STRING_VALUE",
 * //     },
 * //   },
 * //   error: { // NotebookError
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   gitMetadata: { // GitMetadata
 * //     connectionId: "STRING_VALUE", // required
 * //     repository: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     commitHash: "STRING_VALUE", // required
 * //     fileName: "STRING_VALUE",
 * //     committedAt: new Date("TIMESTAMP"),
 * //     commitMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNotebookCommandInput - {@link CreateNotebookCommandInput}
 * @returns {@link CreateNotebookCommandOutput}
 * @see {@link CreateNotebookCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookCommandOutput} for command's `response` shape.
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
export class CreateNotebookCommand extends command<CreateNotebookCommandInput, CreateNotebookCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotebook",
  CreateNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotebookInput;
      output: CreateNotebookOutput;
    };
    sdk: {
      input: CreateNotebookCommandInput;
      output: CreateNotebookCommandOutput;
    };
  };
}
