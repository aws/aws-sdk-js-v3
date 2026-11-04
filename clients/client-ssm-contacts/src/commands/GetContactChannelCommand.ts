// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContactChannelRequest, GetContactChannelResult } from "../models/models_0";
import { GetContactChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContactChannelCommand}.
 */
export interface GetContactChannelCommandInput extends GetContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetContactChannelCommand}.
 */
export interface GetContactChannelCommandOutput extends GetContactChannelResult, __MetadataBearer {}

/**
 * List details about a specific contact channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // GetContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 * };
 * const command = new GetContactChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetContactChannelResult
 * //   ContactArn: "STRING_VALUE", // required
 * //   ContactChannelArn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Type: "SMS" || "VOICE" || "EMAIL", // required
 * //   DeliveryAddress: { // ContactChannelAddress
 * //     SimpleAddress: "STRING_VALUE",
 * //   },
 * //   ActivationStatus: "ACTIVATED" || "NOT_ACTIVATED",
 * // };
 *
 * ```
 *
 * @param GetContactChannelCommandInput - {@link GetContactChannelCommandInput}
 * @returns {@link GetContactChannelCommandOutput}
 * @see {@link GetContactChannelCommandInput} for command's `input` shape.
 * @see {@link GetContactChannelCommandOutput} for command's `response` shape.
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
export class GetContactChannelCommand extends command<GetContactChannelCommandInput, GetContactChannelCommandOutput>(
  _ep0,
  _mw0,
  "GetContactChannel",
  GetContactChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactChannelRequest;
      output: GetContactChannelResult;
    };
    sdk: {
      input: GetContactChannelCommandInput;
      output: GetContactChannelCommandOutput;
    };
  };
}
