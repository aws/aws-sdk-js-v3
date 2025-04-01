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
import { CreateGroupRequest, CreateGroupRequestFilterSensitiveLog, CreateGroupResult } from "../models/models_0";
import { de_CreateGroupCommand, se_CreateGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandInput extends CreateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, CreateGroupCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, CreateGroupCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // CreateGroupRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   SAMAccountName: "STRING_VALUE", // required
 *   GroupType: "Distribution" || "Security",
 *   GroupScope: "DomainLocal" || "Global" || "Universal" || "BuiltinLocal",
 *   OtherAttributes: { // Attributes
 *     "<keys>": { // AttributeValue Union: only one key present
 *       S: "STRING_VALUE",
 *       N: Number("long"),
 *       BOOL: true || false,
 *       SS: [ // StringSetAttributeValue
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupResult
 * //   DirectoryId: "STRING_VALUE",
 * //   SAMAccountName: "STRING_VALUE",
 * //   SID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupCommandInput - {@link CreateGroupCommandInput}
 * @returns {@link CreateGroupCommandOutput}
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *  <p> This error will occur when you try to create a resource that conflicts with an existing
 *       object. It can also occur when adding a member to a group that the member is already
 *       in.</p>
 *          <p> This error can be caused by a request sent within the 8-hour idempotency window with the
 *       same client token but different input parameters. Client tokens should not be re-used across
 *       different requests. After 8 hours, any request with the same client token is treated as a new
 *       request. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
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
export class CreateGroupCommand extends $Command
  .classBuilder<
    CreateGroupCommandInput,
    CreateGroupCommandOutput,
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
  .s("DirectoryServiceData", "CreateGroup", {})
  .n("DirectoryServiceDataClient", "CreateGroupCommand")
  .f(CreateGroupRequestFilterSensitiveLog, void 0)
  .ser(se_CreateGroupCommand)
  .de(de_CreateGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupRequest;
      output: CreateGroupResult;
    };
    sdk: {
      input: CreateGroupCommandInput;
      output: CreateGroupCommandOutput;
    };
  };
}
