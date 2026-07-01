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
 * <p>Creates a <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html">notebook</a> in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing.</p>
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
 * //   status: "ACTIVE" || "ARCHIVED", // required
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
