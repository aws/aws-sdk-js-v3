// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AuthorizeDataShareMessage, DataShare } from "../models/models_0";
import { AuthorizeDataShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AuthorizeDataShareCommand}.
 */
export interface AuthorizeDataShareCommandInput extends AuthorizeDataShareMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeDataShareCommand}.
 */
export interface AuthorizeDataShareCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a data producer account, authorizes the sharing of a datashare with one or more
 *             consumer accounts or managing entities. To authorize a datashare for a data consumer,
 *             the producer account must have the correct access permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeDataShareCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeDataShareCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // AuthorizeDataShareMessage
 *   DataShareArn: "STRING_VALUE", // required
 *   ConsumerIdentifier: "STRING_VALUE", // required
 *   AllowWrites: true || false,
 * };
 * const command = new AuthorizeDataShareCommand(input);
 * const response = await client.send(command);
 * // { // DataShare
 * //   DataShareArn: "STRING_VALUE",
 * //   ProducerArn: "STRING_VALUE",
 * //   AllowPubliclyAccessibleConsumers: true || false,
 * //   DataShareAssociations: [ // DataShareAssociationList
 * //     { // DataShareAssociation
 * //       ConsumerIdentifier: "STRING_VALUE",
 * //       Status: "ACTIVE" || "PENDING_AUTHORIZATION" || "AUTHORIZED" || "DEAUTHORIZED" || "REJECTED" || "AVAILABLE",
 * //       ConsumerRegion: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       StatusChangeDate: new Date("TIMESTAMP"),
 * //       ProducerAllowedWrites: true || false,
 * //       ConsumerAcceptedWrites: true || false,
 * //     },
 * //   ],
 * //   ManagedBy: "STRING_VALUE",
 * //   DataShareType: "INTERNAL",
 * // };
 *
 * ```
 *
 * @param AuthorizeDataShareCommandInput - {@link AuthorizeDataShareCommandInput}
 * @returns {@link AuthorizeDataShareCommandOutput}
 * @see {@link AuthorizeDataShareCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDataShareCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidDataShareFault} (client fault)
 *  <p>There is an error with the datashare.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class AuthorizeDataShareCommand extends command<AuthorizeDataShareCommandInput, AuthorizeDataShareCommandOutput>(
  _ep0,
  _mw0,
  "AuthorizeDataShare",
  AuthorizeDataShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeDataShareMessage;
      output: DataShare;
    };
    sdk: {
      input: AuthorizeDataShareCommandInput;
      output: AuthorizeDataShareCommandOutput;
    };
  };
}
