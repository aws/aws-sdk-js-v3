// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataGrantRequest, CreateDataGrantResponse } from "../models/models_0";
import { CreateDataGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataGrantCommand}.
 */
export interface CreateDataGrantCommandInput extends CreateDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataGrantCommand}.
 */
export interface CreateDataGrantCommandOutput extends CreateDataGrantResponse, __MetadataBearer {}

/**
 * This operation creates a data grant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // CreateDataGrantRequest
 *   Name: "STRING_VALUE", // required
 *   GrantDistributionScope: "STRING_VALUE", // required
 *   ReceiverPrincipal: "STRING_VALUE", // required
 *   SourceDataSetId: "STRING_VALUE", // required
 *   EndsAt: new Date("TIMESTAMP"),
 *   Description: "STRING_VALUE",
 *   Tags: { // MapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataGrantResponse
 * //   Name: "STRING_VALUE", // required
 * //   SenderPrincipal: "STRING_VALUE", // required
 * //   ReceiverPrincipal: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   AcceptanceState: "STRING_VALUE", // required
 * //   AcceptedAt: new Date("TIMESTAMP"),
 * //   EndsAt: new Date("TIMESTAMP"),
 * //   GrantDistributionScope: "STRING_VALUE", // required
 * //   DataSetId: "STRING_VALUE", // required
 * //   SourceDataSetId: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataGrantCommandInput - {@link CreateDataGrantCommandInput}
 * @returns {@link CreateDataGrantCommandOutput}
 * @see {@link CreateDataGrantCommandInput} for command's `input` shape.
 * @see {@link CreateDataGrantCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request has exceeded the quotas imposed by the service.
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
export class CreateDataGrantCommand extends command<CreateDataGrantCommandInput, CreateDataGrantCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataGrant",
  CreateDataGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataGrantRequest;
      output: CreateDataGrantResponse;
    };
    sdk: {
      input: CreateDataGrantCommandInput;
      output: CreateDataGrantCommandOutput;
    };
  };
}
