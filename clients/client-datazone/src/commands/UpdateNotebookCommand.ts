// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateNotebookInput, UpdateNotebookOutput } from "../models/models_1";
import { UpdateNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandInput extends UpdateNotebookInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandOutput extends UpdateNotebookOutput, __MetadataBearer {}

/**
 * <p>Updates a <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html">notebook</a> in Amazon SageMaker Unified Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateNotebookCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateNotebookCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateNotebookInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "ACTIVE" || "ARCHIVED",
 *   name: "STRING_VALUE",
 *   cellOrder: [ // CellOrder
 *     {},
 *   ],
 *   metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   parameters: { // Parameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   environmentConfiguration: { // EnvironmentConfig
 *     imageVersion: "STRING_VALUE",
 *     packageConfig: { // PackageConfig
 *       packageManager: "UV", // required
 *       packageSpecification: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateNotebookCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNotebookOutput
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
 * @param UpdateNotebookCommandInput - {@link UpdateNotebookCommandInput}
 * @returns {@link UpdateNotebookCommandOutput}
 * @see {@link UpdateNotebookCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookCommandOutput} for command's `response` shape.
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
export class UpdateNotebookCommand extends $Command
  .classBuilder<
    UpdateNotebookCommandInput,
    UpdateNotebookCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateNotebook", {})
  .n("DataZoneClient", "UpdateNotebookCommand")
  .sc(UpdateNotebook$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotebookInput;
      output: UpdateNotebookOutput;
    };
    sdk: {
      input: UpdateNotebookCommandInput;
      output: UpdateNotebookCommandOutput;
    };
  };
}
