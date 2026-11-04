// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeRevisionRequest, RevokeRevisionResponse } from "../models/models_0";
import { RevokeRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeRevisionCommand}.
 */
export interface RevokeRevisionCommandInput extends RevokeRevisionRequest {}
/**
 * @public
 *
 * The output of {@link RevokeRevisionCommand}.
 */
export interface RevokeRevisionCommandOutput extends RevokeRevisionResponse, __MetadataBearer {}

/**
 * This operation revokes subscribers' access to a revision.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, RevokeRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, RevokeRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // RevokeRevisionRequest
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 *   RevocationComment: "STRING_VALUE", // required
 * };
 * const command = new RevokeRevisionCommand(input);
 * const response = await client.send(command);
 * // { // RevokeRevisionResponse
 * //   Arn: "STRING_VALUE",
 * //   Comment: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DataSetId: "STRING_VALUE",
 * //   Finalized: true || false,
 * //   Id: "STRING_VALUE",
 * //   SourceId: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   RevocationComment: "STRING_VALUE",
 * //   Revoked: true || false,
 * //   RevokedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RevokeRevisionCommandInput - {@link RevokeRevisionCommandInput}
 * @returns {@link RevokeRevisionCommandOutput}
 * @see {@link RevokeRevisionCommandInput} for command's `input` shape.
 * @see {@link RevokeRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class RevokeRevisionCommand extends command<RevokeRevisionCommandInput, RevokeRevisionCommandOutput>(
  _ep0,
  _mw0,
  "RevokeRevision",
  RevokeRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeRevisionRequest;
      output: RevokeRevisionResponse;
    };
    sdk: {
      input: RevokeRevisionCommandInput;
      output: RevokeRevisionCommandOutput;
    };
  };
}
