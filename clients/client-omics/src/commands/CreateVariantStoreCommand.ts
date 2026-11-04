// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVariantStoreRequest, CreateVariantStoreResponse } from "../models/models_0";
import { CreateVariantStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVariantStoreCommand}.
 */
export interface CreateVariantStoreCommandInput extends CreateVariantStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateVariantStoreCommand}.
 */
export interface CreateVariantStoreCommandOutput extends CreateVariantStoreResponse, __MetadataBearer {}

/**
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Creates a variant store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateVariantStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateVariantStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateVariantStoreRequest
 *   reference: { // ReferenceItem Union: only one key present
 *     referenceArn: "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sseConfig: { // SseConfig
 *     type: "STRING_VALUE", // required
 *     keyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVariantStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateVariantStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateVariantStoreCommandInput - {@link CreateVariantStoreCommandInput}
 * @returns {@link CreateVariantStoreCommandOutput}
 * @see {@link CreateVariantStoreCommandInput} for command's `input` shape.
 * @see {@link CreateVariantStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
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
export class CreateVariantStoreCommand extends command<CreateVariantStoreCommandInput, CreateVariantStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateVariantStore",
  CreateVariantStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVariantStoreRequest;
      output: CreateVariantStoreResponse;
    };
    sdk: {
      input: CreateVariantStoreCommandInput;
      output: CreateVariantStoreCommandOutput;
    };
  };
}
