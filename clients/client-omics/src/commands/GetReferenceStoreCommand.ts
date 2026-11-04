// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetReferenceStoreRequest, GetReferenceStoreResponse } from "../models/models_0";
import { GetReferenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetReferenceStoreCommand}.
 */
export interface GetReferenceStoreCommandInput extends GetReferenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetReferenceStoreCommand}.
 */
export interface GetReferenceStoreCommandOutput extends GetReferenceStoreResponse, __MetadataBearer {}

/**
 * Gets information about a reference store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReferenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReferenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetReferenceStoreRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetReferenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetReferenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetReferenceStoreCommandInput - {@link GetReferenceStoreCommandInput}
 * @returns {@link GetReferenceStoreCommandOutput}
 * @see {@link GetReferenceStoreCommandInput} for command's `input` shape.
 * @see {@link GetReferenceStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
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
export class GetReferenceStoreCommand extends command<GetReferenceStoreCommandInput, GetReferenceStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetReferenceStore",
  GetReferenceStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReferenceStoreRequest;
      output: GetReferenceStoreResponse;
    };
    sdk: {
      input: GetReferenceStoreCommandInput;
      output: GetReferenceStoreCommandOutput;
    };
  };
}
