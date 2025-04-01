// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGroupRequest, DescribeGroupResult, DescribeGroupResultFilterSensitiveLog } from "../models/models_0";
import { de_DescribeGroupCommand, se_DescribeGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandInput extends DescribeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandOutput extends DescribeGroupResult, __MetadataBearer {}

/**
 * <p>Returns information about a specific group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, DescribeGroupCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, DescribeGroupCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // DescribeGroupRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Realm: "STRING_VALUE",
 *   SAMAccountName: "STRING_VALUE", // required
 *   OtherAttributes: [ // LdapDisplayNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   SID: "STRING_VALUE",
 * //   SAMAccountName: "STRING_VALUE",
 * //   DistinguishedName: "STRING_VALUE",
 * //   GroupType: "Distribution" || "Security",
 * //   GroupScope: "DomainLocal" || "Global" || "Universal" || "BuiltinLocal",
 * //   OtherAttributes: { // Attributes
 * //     "<keys>": { // AttributeValue Union: only one key present
 * //       S: "STRING_VALUE",
 * //       N: Number("long"),
 * //       BOOL: true || false,
 * //       SS: [ // StringSetAttributeValue
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGroupCommandInput - {@link DescribeGroupCommandInput}
 * @returns {@link DescribeGroupCommandOutput}
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The limit on the number of requests per second has been exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 *
 * @throws {@link DirectoryServiceDataServiceException}
 * <p>Base exception class for all service exceptions from DirectoryServiceData service.</p>
 *
 *
 * @public
 */
export class DescribeGroupCommand extends $Command
  .classBuilder<
    DescribeGroupCommandInput,
    DescribeGroupCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryServiceData", "DescribeGroup", {})
  .n("DirectoryServiceDataClient", "DescribeGroupCommand")
  .f(void 0, DescribeGroupResultFilterSensitiveLog)
  .ser(se_DescribeGroupCommand)
  .de(de_DescribeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupRequest;
      output: DescribeGroupResult;
    };
    sdk: {
      input: DescribeGroupCommandInput;
      output: DescribeGroupCommandOutput;
    };
  };
}
