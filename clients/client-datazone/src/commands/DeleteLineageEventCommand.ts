// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLineageEventInput, DeleteLineageEventOutput } from "../models/models_1";
import { DeleteLineageEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLineageEventCommand}.
 */
export interface DeleteLineageEventCommandInput extends DeleteLineageEventInput {}
/**
 * @public
 *
 * The output of {@link DeleteLineageEventCommand}.
 */
export interface DeleteLineageEventCommandOutput extends DeleteLineageEventOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified lineage event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteLineageEventCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteLineageEventCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteLineageEventInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteLineageEventCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLineageEventOutput
 * //   id: "STRING_VALUE",
 * //   domainId: "STRING_VALUE",
 * //   processingStatus: "REQUESTED" || "PROCESSING" || "SUCCESS" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteLineageEventCommandInput - {@link DeleteLineageEventCommandInput}
 * @returns {@link DeleteLineageEventCommandOutput}
 * @see {@link DeleteLineageEventCommandInput} for command's `input` shape.
 * @see {@link DeleteLineageEventCommandOutput} for command's `response` shape.
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
export class DeleteLineageEventCommand extends command<DeleteLineageEventCommandInput, DeleteLineageEventCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLineageEvent",
  DeleteLineageEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLineageEventInput;
      output: DeleteLineageEventOutput;
    };
    sdk: {
      input: DeleteLineageEventCommandInput;
      output: DeleteLineageEventCommandOutput;
    };
  };
}
