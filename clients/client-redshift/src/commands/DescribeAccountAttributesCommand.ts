// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AccountAttributeList, DescribeAccountAttributesMessage } from "../models/models_0";
import { DescribeAccountAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends AccountAttributeList, __MetadataBearer {}

/**
 * <p>Returns a list of attributes attached to an account</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeAccountAttributesMessage
 *   AttributeNames: [ // AttributeNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // AccountAttributeList
 * //   AccountAttributes: [ // AttributeList
 * //     { // AccountAttribute
 * //       AttributeName: "STRING_VALUE",
 * //       AttributeValues: [ // AttributeValueList
 * //         { // AttributeValueTarget
 * //           AttributeValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeAccountAttributesCommand extends command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountAttributes",
  DescribeAccountAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountAttributesMessage;
      output: AccountAttributeList;
    };
    sdk: {
      input: DescribeAccountAttributesCommandInput;
      output: DescribeAccountAttributesCommandOutput;
    };
  };
}
