// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDomainNameRequest, CreateDomainNameResponse } from "../models/models_0";
import { CreateDomainName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandInput extends CreateDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandOutput extends CreateDomainNameResponse, __MetadataBearer {}

/**
 * <p>Creates a custom <code>DomainName</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateDomainNameCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateDomainNameCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // CreateDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 *   certificateArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainNameResponse
 * //   domainNameConfig: { // DomainNameConfig
 * //     domainName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     appsyncDomainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     domainNameArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDomainNameCommandInput - {@link CreateDomainNameCommandInput}
 * @returns {@link CreateDomainNameCommandOutput}
 * @see {@link CreateDomainNameCommandInput} for command's `input` shape.
 * @see {@link CreateDomainNameCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class CreateDomainNameCommand extends command<CreateDomainNameCommandInput, CreateDomainNameCommandOutput>(
  _ep0,
  _mw0,
  "CreateDomainName",
  CreateDomainName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainNameRequest;
      output: CreateDomainNameResponse;
    };
    sdk: {
      input: CreateDomainNameCommandInput;
      output: CreateDomainNameCommandOutput;
    };
  };
}
