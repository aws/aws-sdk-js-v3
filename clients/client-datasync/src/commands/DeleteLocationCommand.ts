// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLocationRequest, DeleteLocationResponse } from "../models/models_0";
import { DeleteLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandInput extends DeleteLocationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandOutput extends DeleteLocationResponse, __MetadataBearer {}

/**
 * Deletes a transfer location resource from DataSync.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteLocationCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteLocationCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DeleteLocationRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLocationCommandInput - {@link DeleteLocationCommandInput}
 * @returns {@link DeleteLocationCommandOutput}
 * @see {@link DeleteLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocationCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception is thrown when an error occurs in the DataSync service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link DataSyncServiceException}
 *
 * Base exception class for all service exceptions from DataSync service.
 *
 * @public
 */
export class DeleteLocationCommand extends command<DeleteLocationCommandInput, DeleteLocationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLocation",
  DeleteLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLocationCommandInput;
      output: DeleteLocationCommandOutput;
    };
  };
}
