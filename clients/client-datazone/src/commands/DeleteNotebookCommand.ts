// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotebookInput, DeleteNotebookOutput } from "../models/models_1";
import { DeleteNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotebookCommand}.
 */
export interface DeleteNotebookCommandInput extends DeleteNotebookInput {}
/**
 * @public
 *
 * The output of {@link DeleteNotebookCommand}.
 */
export interface DeleteNotebookCommandOutput extends DeleteNotebookOutput, __MetadataBearer {}

/**
 * <p>Deletes a <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html">notebook</a> in Amazon SageMaker Unified Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteNotebookCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteNotebookCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteNotebookInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotebookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotebookCommandInput - {@link DeleteNotebookCommandInput}
 * @returns {@link DeleteNotebookCommandOutput}
 * @see {@link DeleteNotebookCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookCommandOutput} for command's `response` shape.
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
export class DeleteNotebookCommand extends command<DeleteNotebookCommandInput, DeleteNotebookCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotebook",
  DeleteNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotebookInput;
      output: {};
    };
    sdk: {
      input: DeleteNotebookCommandInput;
      output: DeleteNotebookCommandOutput;
    };
  };
}
