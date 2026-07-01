// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNotebookInput, GetNotebookOutput } from "../models/models_1";
import { GetNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNotebookCommand}.
 */
export interface GetNotebookCommandInput extends GetNotebookInput {}
/**
 * @public
 *
 * The output of {@link GetNotebookCommand}.
 */
export interface GetNotebookCommandOutput extends GetNotebookOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html">notebook</a> in Amazon SageMaker Unified Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetNotebookCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetNotebookCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetNotebookInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetNotebookCommand(input);
 * const response = await client.send(command);
 * // { // GetNotebookOutput
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
 * @param GetNotebookCommandInput - {@link GetNotebookCommandInput}
 * @returns {@link GetNotebookCommandOutput}
 * @see {@link GetNotebookCommandInput} for command's `input` shape.
 * @see {@link GetNotebookCommandOutput} for command's `response` shape.
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
export class GetNotebookCommand extends command<GetNotebookCommandInput, GetNotebookCommandOutput>(
  _ep0,
  _mw0,
  "GetNotebook",
  GetNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotebookInput;
      output: GetNotebookOutput;
    };
    sdk: {
      input: GetNotebookCommandInput;
      output: GetNotebookCommandOutput;
    };
  };
}
