// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateActiveModelVersionRequest, UpdateActiveModelVersionResponse } from "../models/models_0";
import { UpdateActiveModelVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateActiveModelVersionCommand}.
 */
export interface UpdateActiveModelVersionCommandInput extends UpdateActiveModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActiveModelVersionCommand}.
 */
export interface UpdateActiveModelVersionCommandOutput extends UpdateActiveModelVersionResponse, __MetadataBearer {}

/**
 * Sets the active model version for a given machine learning model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateActiveModelVersionCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateActiveModelVersionCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateActiveModelVersionRequest
 *   ModelName: "STRING_VALUE", // required
 *   ModelVersion: Number("long"), // required
 * };
 * const command = new UpdateActiveModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActiveModelVersionResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   CurrentActiveVersion: Number("long"),
 * //   PreviousActiveVersion: Number("long"),
 * //   CurrentActiveVersionArn: "STRING_VALUE",
 * //   PreviousActiveVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateActiveModelVersionCommandInput - {@link UpdateActiveModelVersionCommandInput}
 * @returns {@link UpdateActiveModelVersionCommandOutput}
 * @see {@link UpdateActiveModelVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateActiveModelVersionCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @public
 */
export class UpdateActiveModelVersionCommand extends command<UpdateActiveModelVersionCommandInput, UpdateActiveModelVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateActiveModelVersion",
  UpdateActiveModelVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateActiveModelVersionRequest;
      output: UpdateActiveModelVersionResponse;
    };
    sdk: {
      input: UpdateActiveModelVersionCommandInput;
      output: UpdateActiveModelVersionCommandOutput;
    };
  };
}
