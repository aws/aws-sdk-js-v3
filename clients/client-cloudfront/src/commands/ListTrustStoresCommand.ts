// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrustStoresRequest, ListTrustStoresResult } from "../models/models_1";
import { ListTrustStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandInput extends ListTrustStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandOutput extends ListTrustStoresResult, __MetadataBearer {}

/**
 * <p>Lists trust stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListTrustStoresCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListTrustStoresCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListTrustStoresRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrustStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustStoresResult
 * //   NextMarker: "STRING_VALUE",
 * //   TrustStoreList: [ // TrustStoreList
 * //     { // TrustStoreSummary
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "pending" || "active" || "failed", // required
 * //       NumberOfCaCertificates: Number("int"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       Reason: "STRING_VALUE",
 * //       ETag: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrustStoresCommandInput - {@link ListTrustStoresCommandInput}
 * @returns {@link ListTrustStoresCommandOutput}
 * @see {@link ListTrustStoresCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListTrustStoresCommand extends command<ListTrustStoresCommandInput, ListTrustStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListTrustStores",
  ListTrustStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustStoresRequest;
      output: ListTrustStoresResult;
    };
    sdk: {
      input: ListTrustStoresCommandInput;
      output: ListTrustStoresCommandOutput;
    };
  };
}
