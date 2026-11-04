// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVariantStoreRequest, UpdateVariantStoreResponse } from "../models/models_0";
import { UpdateVariantStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVariantStoreCommand}.
 */
export interface UpdateVariantStoreCommandInput extends UpdateVariantStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVariantStoreCommand}.
 */
export interface UpdateVariantStoreCommandOutput extends UpdateVariantStoreResponse, __MetadataBearer {}

/**
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Updates a variant store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateVariantStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateVariantStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateVariantStoreRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateVariantStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVariantStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateVariantStoreCommandInput - {@link UpdateVariantStoreCommandInput}
 * @returns {@link UpdateVariantStoreCommandOutput}
 * @see {@link UpdateVariantStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateVariantStoreCommandOutput} for command's `response` shape.
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
export class UpdateVariantStoreCommand extends command<UpdateVariantStoreCommandInput, UpdateVariantStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVariantStore",
  UpdateVariantStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVariantStoreRequest;
      output: UpdateVariantStoreResponse;
    };
    sdk: {
      input: UpdateVariantStoreCommandInput;
      output: UpdateVariantStoreCommandOutput;
    };
  };
}
