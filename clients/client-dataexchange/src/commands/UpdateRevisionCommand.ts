// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRevisionRequest, UpdateRevisionResponse } from "../models/models_0";
import { UpdateRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRevisionCommand}.
 */
export interface UpdateRevisionCommandInput extends UpdateRevisionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRevisionCommand}.
 */
export interface UpdateRevisionCommandOutput extends UpdateRevisionResponse, __MetadataBearer {}

/**
 * This operation updates a revision.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // UpdateRevisionRequest
 *   Comment: "STRING_VALUE",
 *   DataSetId: "STRING_VALUE", // required
 *   Finalized: true || false,
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRevisionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRevisionResponse
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
 * @param UpdateRevisionCommandInput - {@link UpdateRevisionCommandInput}
 * @returns {@link UpdateRevisionCommandOutput}
 * @see {@link UpdateRevisionCommandInput} for command's `input` shape.
 * @see {@link UpdateRevisionCommandOutput} for command's `response` shape.
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
export class UpdateRevisionCommand extends command<UpdateRevisionCommandInput, UpdateRevisionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRevision",
  UpdateRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRevisionRequest;
      output: UpdateRevisionResponse;
    };
    sdk: {
      input: UpdateRevisionCommandInput;
      output: UpdateRevisionCommandOutput;
    };
  };
}
