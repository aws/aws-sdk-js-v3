// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrustsRequest, DescribeTrustsResult } from "../models/models_0";
import { de_DescribeTrustsCommand, se_DescribeTrustsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustsCommand}.
 */
export interface DescribeTrustsCommandInput extends DescribeTrustsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustsCommand}.
 */
export interface DescribeTrustsCommandOutput extends DescribeTrustsResult, __MetadataBearer {}

/**
 * <p>Obtains information about the trust relationships for this account.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request
 *       describes all the trust relationships belonging to the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeTrustsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeTrustsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeTrustsRequest
 *   DirectoryId: "STRING_VALUE",
 *   TrustIds: [ // TrustIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTrustsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustsResult
 * //   Trusts: [ // Trusts
 * //     { // Trust
 * //       DirectoryId: "STRING_VALUE",
 * //       TrustId: "STRING_VALUE",
 * //       RemoteDomainName: "STRING_VALUE",
 * //       TrustType: "Forest" || "External",
 * //       TrustDirection: "One-Way: Outgoing" || "One-Way: Incoming" || "Two-Way",
 * //       TrustState: "Creating" || "Created" || "Verifying" || "VerifyFailed" || "Verified" || "Updating" || "UpdateFailed" || "Updated" || "Deleting" || "Deleted" || "Failed",
 * //       CreatedDateTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       StateLastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       TrustStateReason: "STRING_VALUE",
 * //       SelectiveAuth: "Enabled" || "Disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustsCommandInput - {@link DescribeTrustsCommandInput}
 * @returns {@link DescribeTrustsCommandOutput}
 * @see {@link DescribeTrustsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeTrustsCommand extends $Command
  .classBuilder<
    DescribeTrustsCommandInput,
    DescribeTrustsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DescribeTrusts", {})
  .n("DirectoryServiceClient", "DescribeTrustsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrustsCommand)
  .de(de_DescribeTrustsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustsRequest;
      output: DescribeTrustsResult;
    };
    sdk: {
      input: DescribeTrustsCommandInput;
      output: DescribeTrustsCommandOutput;
    };
  };
}
