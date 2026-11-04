// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVariantStoreRequest, GetVariantStoreResponse } from "../models/models_0";
import { GetVariantStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVariantStoreCommand}.
 */
export interface GetVariantStoreCommandInput extends GetVariantStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetVariantStoreCommand}.
 */
export interface GetVariantStoreCommandOutput extends GetVariantStoreResponse, __MetadataBearer {}

/**
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Gets information about a variant store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetVariantStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetVariantStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetVariantStoreRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetVariantStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetVariantStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   storeArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   statusMessage: "STRING_VALUE", // required
 * //   storeSizeBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetVariantStoreCommandInput - {@link GetVariantStoreCommandInput}
 * @returns {@link GetVariantStoreCommandOutput}
 * @see {@link GetVariantStoreCommandInput} for command's `input` shape.
 * @see {@link GetVariantStoreCommandOutput} for command's `response` shape.
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
export class GetVariantStoreCommand extends command<GetVariantStoreCommandInput, GetVariantStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetVariantStore",
  GetVariantStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVariantStoreRequest;
      output: GetVariantStoreResponse;
    };
    sdk: {
      input: GetVariantStoreCommandInput;
      output: GetVariantStoreCommandOutput;
    };
  };
}
