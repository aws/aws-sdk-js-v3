// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAnnotationStoreVersionRequest, UpdateAnnotationStoreVersionResponse } from "../models/models_0";
import { UpdateAnnotationStoreVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAnnotationStoreVersionCommand}.
 */
export interface UpdateAnnotationStoreVersionCommandInput extends UpdateAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnnotationStoreVersionCommand}.
 */
export interface UpdateAnnotationStoreVersionCommandOutput extends UpdateAnnotationStoreVersionResponse, __MetadataBearer {}

/**
 * Updates the description of an annotation store version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnnotationStoreVersionResponse
 * //   storeId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAnnotationStoreVersionCommandInput - {@link UpdateAnnotationStoreVersionCommandInput}
 * @returns {@link UpdateAnnotationStoreVersionCommandOutput}
 * @see {@link UpdateAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateAnnotationStoreVersionCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class UpdateAnnotationStoreVersionCommand extends command<UpdateAnnotationStoreVersionCommandInput, UpdateAnnotationStoreVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAnnotationStoreVersion",
  UpdateAnnotationStoreVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnnotationStoreVersionRequest;
      output: UpdateAnnotationStoreVersionResponse;
    };
    sdk: {
      input: UpdateAnnotationStoreVersionCommandInput;
      output: UpdateAnnotationStoreVersionCommandOutput;
    };
  };
}
