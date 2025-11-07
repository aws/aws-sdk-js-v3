// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDomainControllersRequest, DescribeDomainControllersResult } from "../models/models_0";
import { DescribeDomainControllers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainControllersCommand}.
 */
export interface DescribeDomainControllersCommandInput extends DescribeDomainControllersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainControllersCommand}.
 */
export interface DescribeDomainControllersCommandOutput extends DescribeDomainControllersResult, __MetadataBearer {}

/**
 * <p>Provides information about any domain controllers in your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeDomainControllersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   DomainControllerIds: [ // DomainControllerIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeDomainControllersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainControllersResult
 * //   DomainControllers: [ // DomainControllers
 * //     { // DomainController
 * //       DirectoryId: "STRING_VALUE",
 * //       DomainControllerId: "STRING_VALUE",
 * //       DnsIpAddr: "STRING_VALUE",
 * //       DnsIpv6Addr: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       Status: "Creating" || "Active" || "Impaired" || "Restoring" || "Deleting" || "Deleted" || "Failed" || "Updating",
 * //       StatusReason: "STRING_VALUE",
 * //       LaunchTime: new Date("TIMESTAMP"),
 * //       StatusLastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDomainControllersCommandInput - {@link DescribeDomainControllersCommandInput}
 * @returns {@link DescribeDomainControllersCommandOutput}
 * @see {@link DescribeDomainControllersCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DescribeDomainControllersCommand extends $Command
  .classBuilder<
    DescribeDomainControllersCommandInput,
    DescribeDomainControllersCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeDomainControllers", {})
  .n("DirectoryServiceClient", "DescribeDomainControllersCommand")
  .sc(DescribeDomainControllers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainControllersRequest;
      output: DescribeDomainControllersResult;
    };
    sdk: {
      input: DescribeDomainControllersCommandInput;
      output: DescribeDomainControllersCommandOutput;
    };
  };
}
