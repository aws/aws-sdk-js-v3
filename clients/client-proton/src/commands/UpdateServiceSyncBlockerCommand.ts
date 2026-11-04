// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceSyncBlockerInput, UpdateServiceSyncBlockerOutput } from "../models/models_0";
import { UpdateServiceSyncBlocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandInput extends UpdateServiceSyncBlockerInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandOutput extends UpdateServiceSyncBlockerOutput, __MetadataBearer {}

/**
 * Update the service sync blocker by resolving it.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceSyncBlockerCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceSyncBlockerCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceSyncBlockerInput
 *   id: "STRING_VALUE", // required
 *   resolvedReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceSyncBlockerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceSyncBlockerOutput
 * //   serviceName: "STRING_VALUE", // required
 * //   serviceInstanceName: "STRING_VALUE",
 * //   serviceSyncBlocker: { // SyncBlocker
 * //     id: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdReason: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     contexts: [ // SyncBlockerContexts
 * //       { // SyncBlockerContext
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     resolvedReason: "STRING_VALUE",
 * //     resolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceSyncBlockerCommandInput - {@link UpdateServiceSyncBlockerCommandInput}
 * @returns {@link UpdateServiceSyncBlockerCommandOutput}
 * @see {@link UpdateServiceSyncBlockerCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSyncBlockerCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class UpdateServiceSyncBlockerCommand extends command<UpdateServiceSyncBlockerCommandInput, UpdateServiceSyncBlockerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceSyncBlocker",
  UpdateServiceSyncBlocker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceSyncBlockerInput;
      output: UpdateServiceSyncBlockerOutput;
    };
    sdk: {
      input: UpdateServiceSyncBlockerCommandInput;
      output: UpdateServiceSyncBlockerCommandOutput;
    };
  };
}
