// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptDataGrantRequest, AcceptDataGrantResponse } from "../models/models_0";
import { AcceptDataGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptDataGrantCommand}.
 */
export interface AcceptDataGrantCommandInput extends AcceptDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDataGrantCommand}.
 */
export interface AcceptDataGrantCommandOutput extends AcceptDataGrantResponse, __MetadataBearer {}

/**
 * This operation accepts a data grant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, AcceptDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, AcceptDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // AcceptDataGrantRequest
 *   DataGrantArn: "STRING_VALUE", // required
 * };
 * const command = new AcceptDataGrantCommand(input);
 * const response = await client.send(command);
 * // { // AcceptDataGrantResponse
 * //   Name: "STRING_VALUE", // required
 * //   SenderPrincipal: "STRING_VALUE",
 * //   ReceiverPrincipal: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   AcceptanceState: "STRING_VALUE", // required
 * //   AcceptedAt: new Date("TIMESTAMP"),
 * //   EndsAt: new Date("TIMESTAMP"),
 * //   GrantDistributionScope: "STRING_VALUE", // required
 * //   DataSetId: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AcceptDataGrantCommandInput - {@link AcceptDataGrantCommandInput}
 * @returns {@link AcceptDataGrantCommandOutput}
 * @see {@link AcceptDataGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptDataGrantCommandOutput} for command's `response` shape.
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
export class AcceptDataGrantCommand extends command<AcceptDataGrantCommandInput, AcceptDataGrantCommandOutput>(
  _ep0,
  _mw0,
  "AcceptDataGrant",
  AcceptDataGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptDataGrantRequest;
      output: AcceptDataGrantResponse;
    };
    sdk: {
      input: AcceptDataGrantCommandInput;
      output: AcceptDataGrantCommandOutput;
    };
  };
}
