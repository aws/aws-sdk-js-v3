// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMicrovmImagesRequest, ListMicrovmImagesResponse } from "../models/models_0";
import { ListMicrovmImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMicrovmImagesCommand}.
 */
export interface ListMicrovmImagesCommandInput extends ListMicrovmImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListMicrovmImagesCommand}.
 */
export interface ListMicrovmImagesCommandOutput extends ListMicrovmImagesResponse, __MetadataBearer {}

/**
 * <p>Lists MicroVM images in the account with optional name filtering. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ListMicrovmImagesCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ListMicrovmImagesCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ListMicrovmImagesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   nameFilter: "STRING_VALUE",
 * };
 * const command = new ListMicrovmImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListMicrovmImagesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // MicrovmImageSummaries // required
 * //     { // MicrovmImageSummary
 * //       imageArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       state: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //       latestActiveImageVersion: "STRING_VALUE",
 * //       latestFailedImageVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMicrovmImagesCommandInput - {@link ListMicrovmImagesCommandInput}
 * @returns {@link ListMicrovmImagesCommandOutput}
 * @see {@link ListMicrovmImagesCommandInput} for command's `input` shape.
 * @see {@link ListMicrovmImagesCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class ListMicrovmImagesCommand extends command<ListMicrovmImagesCommandInput, ListMicrovmImagesCommandOutput>(
  _ep0,
  _mw0,
  "ListMicrovmImages",
  ListMicrovmImages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMicrovmImagesRequest;
      output: ListMicrovmImagesResponse;
    };
    sdk: {
      input: ListMicrovmImagesCommandInput;
      output: ListMicrovmImagesCommandOutput;
    };
  };
}
