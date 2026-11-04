// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePageRequest, DescribePageResult } from "../models/models_0";
import { DescribePage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePageCommand}.
 */
export interface DescribePageCommandInput extends DescribePageRequest {}
/**
 * @public
 *
 * The output of {@link DescribePageCommand}.
 */
export interface DescribePageCommandOutput extends DescribePageResult, __MetadataBearer {}

/**
 * Lists details of the engagement to a contact channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribePageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribePageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DescribePageRequest
 *   PageId: "STRING_VALUE", // required
 * };
 * const command = new DescribePageCommand(input);
 * const response = await client.send(command);
 * // { // DescribePageResult
 * //   PageArn: "STRING_VALUE", // required
 * //   EngagementArn: "STRING_VALUE", // required
 * //   ContactArn: "STRING_VALUE", // required
 * //   Sender: "STRING_VALUE", // required
 * //   Subject: "STRING_VALUE", // required
 * //   Content: "STRING_VALUE", // required
 * //   PublicSubject: "STRING_VALUE",
 * //   PublicContent: "STRING_VALUE",
 * //   IncidentId: "STRING_VALUE",
 * //   SentTime: new Date("TIMESTAMP"),
 * //   ReadTime: new Date("TIMESTAMP"),
 * //   DeliveryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribePageCommandInput - {@link DescribePageCommandInput}
 * @returns {@link DescribePageCommandOutput}
 * @see {@link DescribePageCommandInput} for command's `input` shape.
 * @see {@link DescribePageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link DataEncryptionException} (client fault)
 *
 * The operation failed to due an encryption key error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
 *
 * @public
 */
export class DescribePageCommand extends command<DescribePageCommandInput, DescribePageCommandOutput>(
  _ep0,
  _mw0,
  "DescribePage",
  DescribePage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePageRequest;
      output: DescribePageResult;
    };
    sdk: {
      input: DescribePageCommandInput;
      output: DescribePageCommandOutput;
    };
  };
}
