// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSpacesInput, ListSpacesOutput } from "../models/models_0";
import { ListSpaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandInput extends ListSpacesInput {}
/**
 * @public
 *
 * The output of {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandOutput extends ListSpacesOutput, __MetadataBearer {}

/**
 * Returns the spaces in the account, optionally filtered by domain.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListSpacesCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListSpacesCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListSpacesInput
 *   domainId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesOutput
 * //   items: [ // SpaceSummaryList // required
 * //     { // SpaceSummary
 * //       spaceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       spaceArn: "STRING_VALUE", // required
 * //       domainArn: "STRING_VALUE",
 * //       region: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "SUSPENDED" || "MOVING", // required
 * //       statusReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpacesCommandInput - {@link ListSpacesCommandInput}
 * @returns {@link ListSpacesCommandOutput}
 * @see {@link ListSpacesCommandInput} for command's `input` shape.
 * @see {@link ListSpacesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example List spaces in a domain
 * ```javascript
 * // The following example lists the first page of spaces in a domain and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   maxResults: 50
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:domain/d-1a2b3c4d5e",
 *       name: "prod-observability",
 *       ownerAccountId: "123456789012",
 *       region: "us-east-1",
 *       spaceArn: "arn:aws:cloudwatch:us-east-1:123456789012:space/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     },
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:domain/d-1a2b3c4d5e",
 *       name: "staging-observability",
 *       ownerAccountId: "123456789012",
 *       region: "us-east-1",
 *       spaceArn: "arn:aws:cloudwatch:us-east-1:123456789012:space/b2c3d4e5-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
 *       spaceId: "b2c3d4e5-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSpacesCommand extends command<ListSpacesCommandInput, ListSpacesCommandOutput>(
  _ep0,
  _mw0,
  "ListSpaces",
  ListSpaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpacesInput;
      output: ListSpacesOutput;
    };
    sdk: {
      input: ListSpacesCommandInput;
      output: ListSpacesCommandOutput;
    };
  };
}
