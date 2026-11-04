// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelDomainConfigChangeRequest, CancelDomainConfigChangeResponse } from "../models/models_0";
import { CancelDomainConfigChange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelDomainConfigChangeCommand}.
 */
export interface CancelDomainConfigChangeCommandInput extends CancelDomainConfigChangeRequest {}
/**
 * @public
 *
 * The output of {@link CancelDomainConfigChangeCommand}.
 */
export interface CancelDomainConfigChangeCommandOutput extends CancelDomainConfigChangeResponse, __MetadataBearer {}

/**
 * Cancels a pending configuration change on an Amazon OpenSearch Service domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CancelDomainConfigChangeCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelDomainConfigChangeCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // CancelDomainConfigChangeRequest
 *   DomainName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelDomainConfigChangeCommand(input);
 * const response = await client.send(command);
 * // { // CancelDomainConfigChangeResponse
 * //   DryRun: true || false,
 * //   CancelledChangeIds: [ // GUIDList
 * //     "STRING_VALUE",
 * //   ],
 * //   CancelledChangeProperties: [ // CancelledChangePropertyList
 * //     { // CancelledChangeProperty
 * //       PropertyName: "STRING_VALUE",
 * //       CancelledValue: "STRING_VALUE",
 * //       ActiveValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelDomainConfigChangeCommandInput - {@link CancelDomainConfigChangeCommandInput}
 * @returns {@link CancelDomainConfigChangeCommandOutput}
 * @see {@link CancelDomainConfigChangeCommandInput} for command's `input` shape.
 * @see {@link CancelDomainConfigChangeCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access a not supported operation. Gives http status code of 409.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing / invalid input fields. Gives http status code of 400.
 *
 * @throws {@link ElasticsearchServiceServiceException}
 *
 * Base exception class for all service exceptions from ElasticsearchService service.
 *
 * @public
 */
export class CancelDomainConfigChangeCommand extends command<CancelDomainConfigChangeCommandInput, CancelDomainConfigChangeCommandOutput>(
  _ep0,
  _mw0,
  "CancelDomainConfigChange",
  CancelDomainConfigChange$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDomainConfigChangeRequest;
      output: CancelDomainConfigChangeResponse;
    };
    sdk: {
      input: CancelDomainConfigChangeCommandInput;
      output: CancelDomainConfigChangeCommandOutput;
    };
  };
}
