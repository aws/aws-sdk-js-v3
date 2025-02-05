// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAttributeGroupRequest, GetAttributeGroupResponse } from "../models/models_0";
import { de_GetAttributeGroupCommand, se_GetAttributeGroupCommand } from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttributeGroupCommand}.
 */
export interface GetAttributeGroupCommandInput extends GetAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetAttributeGroupCommand}.
 */
export interface GetAttributeGroupCommandOutput extends GetAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>
 *        Retrieves an attribute group
 *        by its ARN, ID, or name.
 *        The attribute group can be specified
 *        by its ARN, ID, or name.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // GetAttributeGroupRequest
 *   attributeGroup: "STRING_VALUE", // required
 * };
 * const command = new GetAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetAttributeGroupResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   attributes: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastUpdateTime: new Date("TIMESTAMP"),
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAttributeGroupCommandInput - {@link GetAttributeGroupCommandInput}
 * @returns {@link GetAttributeGroupCommandOutput}
 * @see {@link GetAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link GetAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
 *
 * @public
 */
export class GetAttributeGroupCommand extends $Command
  .classBuilder<
    GetAttributeGroupCommandInput,
    GetAttributeGroupCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "GetAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "GetAttributeGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetAttributeGroupCommand)
  .de(de_GetAttributeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttributeGroupRequest;
      output: GetAttributeGroupResponse;
    };
    sdk: {
      input: GetAttributeGroupCommandInput;
      output: GetAttributeGroupCommandOutput;
    };
  };
}
