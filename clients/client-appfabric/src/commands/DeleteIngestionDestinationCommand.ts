// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIngestionDestinationRequest, DeleteIngestionDestinationResponse } from "../models/models_0";
import { DeleteIngestionDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIngestionDestinationCommand}.
 */
export interface DeleteIngestionDestinationCommandInput extends DeleteIngestionDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIngestionDestinationCommand}.
 */
export interface DeleteIngestionDestinationCommandOutput extends DeleteIngestionDestinationResponse, __MetadataBearer {}

/**
 * Deletes an ingestion destination.
 *
 * This deletes the association between an ingestion and it's destination. It doesn't delete previously ingested data or the storage destination, such as the Amazon S3 bucket where the data is delivered. If the ingestion destination is deleted while the associated ingestion is enabled, the ingestion will fail and is eventually disabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, DeleteIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, DeleteIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // DeleteIngestionDestinationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   ingestionDestinationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIngestionDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIngestionDestinationCommandInput - {@link DeleteIngestionDestinationCommandInput}
 * @returns {@link DeleteIngestionDestinationCommandOutput}
 * @see {@link DeleteIngestionDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteIngestionDestinationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class DeleteIngestionDestinationCommand extends command<DeleteIngestionDestinationCommandInput, DeleteIngestionDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIngestionDestination",
  DeleteIngestionDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIngestionDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIngestionDestinationCommandInput;
      output: DeleteIngestionDestinationCommandOutput;
    };
  };
}
