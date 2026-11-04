// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelManifestRequest, DeleteModelManifestResponse } from "../models/models_0";
import { DeleteModelManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteModelManifestCommand}.
 */
export interface DeleteModelManifestCommandInput extends DeleteModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelManifestCommand}.
 */
export interface DeleteModelManifestCommandOutput extends DeleteModelManifestResponse, __MetadataBearer {}

/**
 * Deletes a vehicle model (model manifest).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteModelManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // DeleteModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteModelManifestCommandInput - {@link DeleteModelManifestCommandInput}
 * @returns {@link DeleteModelManifestCommandOutput}
 * @see {@link DeleteModelManifestCommandInput} for command's `input` shape.
 * @see {@link DeleteModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class DeleteModelManifestCommand extends command<DeleteModelManifestCommandInput, DeleteModelManifestCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelManifest",
  DeleteModelManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelManifestRequest;
      output: DeleteModelManifestResponse;
    };
    sdk: {
      input: DeleteModelManifestCommandInput;
      output: DeleteModelManifestCommandOutput;
    };
  };
}
