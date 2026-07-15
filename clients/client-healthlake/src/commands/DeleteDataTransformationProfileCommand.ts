// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteDataTransformationProfileRequest,
  DeleteDataTransformationProfileResponse,
} from "../models/models_0";
import { DeleteDataTransformationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataTransformationProfileCommand}.
 */
export interface DeleteDataTransformationProfileCommandInput extends DeleteDataTransformationProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataTransformationProfileCommand}.
 */
export interface DeleteDataTransformationProfileCommandOutput extends DeleteDataTransformationProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes a data transformation profile and all its versions, including the DRAFT and all published versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DeleteDataTransformationProfileCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DeleteDataTransformationProfileCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DeleteDataTransformationProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataTransformationProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataTransformationProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * //   ProfileName: "STRING_VALUE",
 * //   DeletionTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteDataTransformationProfileCommandInput - {@link DeleteDataTransformationProfileCommandInput}
 * @returns {@link DeleteDataTransformationProfileCommandOutput}
 * @see {@link DeleteDataTransformationProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteDataTransformationProfileCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class DeleteDataTransformationProfileCommand extends command<DeleteDataTransformationProfileCommandInput, DeleteDataTransformationProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataTransformationProfile",
  DeleteDataTransformationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataTransformationProfileRequest;
      output: DeleteDataTransformationProfileResponse;
    };
    sdk: {
      input: DeleteDataTransformationProfileCommandInput;
      output: DeleteDataTransformationProfileCommandOutput;
    };
  };
}
