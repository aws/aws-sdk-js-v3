// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetShareRequest, GetShareResponse } from "../models/models_0";
import { GetShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetShareCommand}.
 */
export interface GetShareCommandInput extends GetShareRequest {}
/**
 * @public
 *
 * The output of {@link GetShareCommand}.
 */
export interface GetShareCommandOutput extends GetShareResponse, __MetadataBearer {}

/**
 * Retrieves the metadata for the specified resource share.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new GetShareCommand(input);
 * const response = await client.send(command);
 * // { // GetShareResponse
 * //   share: { // ShareDetails
 * //     shareId: "STRING_VALUE",
 * //     resourceArn: "STRING_VALUE",
 * //     resourceId: "STRING_VALUE",
 * //     principalSubscriber: "STRING_VALUE",
 * //     ownerId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     shareName: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     updateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetShareCommandInput - {@link GetShareCommandInput}
 * @returns {@link GetShareCommandOutput}
 * @see {@link GetShareCommandInput} for command's `input` shape.
 * @see {@link GetShareCommandOutput} for command's `response` shape.
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
export class GetShareCommand extends command<GetShareCommandInput, GetShareCommandOutput>(
  _ep0,
  _mw0,
  "GetShare",
  GetShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetShareRequest;
      output: GetShareResponse;
    };
    sdk: {
      input: GetShareCommandInput;
      output: GetShareCommandOutput;
    };
  };
}
