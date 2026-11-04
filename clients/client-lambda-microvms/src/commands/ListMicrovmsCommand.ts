// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMicrovmsRequest, ListMicrovmsResponse } from "../models/models_0";
import { ListMicrovms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMicrovmsCommand}.
 */
export interface ListMicrovmsCommandInput extends ListMicrovmsRequest {}
/**
 * @public
 *
 * The output of {@link ListMicrovmsCommand}.
 */
export interface ListMicrovmsCommandOutput extends ListMicrovmsResponse, __MetadataBearer {}

/**
 * Lists MicroVMs in the account with optional filtering by image and version. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ListMicrovmsCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ListMicrovmsCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ListMicrovmsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   imageIdentifier: "STRING_VALUE",
 *   imageVersion: "STRING_VALUE",
 * };
 * const command = new ListMicrovmsCommand(input);
 * const response = await client.send(command);
 * // { // ListMicrovmsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // MicrovmItemList // required
 * //     { // MicrovmItem
 * //       microvmId: "STRING_VALUE", // required
 * //       state: "PENDING" || "RUNNING" || "SUSPENDING" || "SUSPENDED" || "TERMINATING" || "TERMINATED", // required
 * //       imageArn: "STRING_VALUE", // required
 * //       imageVersion: "STRING_VALUE", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMicrovmsCommandInput - {@link ListMicrovmsCommandInput}
 * @returns {@link ListMicrovmsCommandOutput}
 * @see {@link ListMicrovmsCommandInput} for command's `input` shape.
 * @see {@link ListMicrovmsCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry the request later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by the service.
 *
 * @throws {@link LambdaMicrovmsServiceException}
 *
 * Base exception class for all service exceptions from LambdaMicrovms service.
 *
 * @public
 */
export class ListMicrovmsCommand extends command<ListMicrovmsCommandInput, ListMicrovmsCommandOutput>(
  _ep0,
  _mw0,
  "ListMicrovms",
  ListMicrovms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMicrovmsRequest;
      output: ListMicrovmsResponse;
    };
    sdk: {
      input: ListMicrovmsCommandInput;
      output: ListMicrovmsCommandOutput;
    };
  };
}
