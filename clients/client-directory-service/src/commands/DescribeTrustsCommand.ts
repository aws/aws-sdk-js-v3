// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrustsRequest, DescribeTrustsResult } from "../models/models_0";
import { DescribeTrusts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Obtains information about the trust relationships for this account.
 *
 * If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeTrustsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeTrustsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @example To describe a trust
 * ```javascript
 * // The following example obtains information about the trust relationship for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Limit: 0,
 *   TrustIds: [
 *     "t-9267353df0"
 *   ]
 * };
 * const command = new DescribeTrustsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Trusts: [
 *     {
 *       CreatedDateTime: 1.481749250657E9,
 *       DirectoryId: "d-92654abfed",
 *       LastUpdatedDateTime: 1.481749260156E9,
 *       RemoteDomainName: "sales.example.com",
 *       StateLastUpdatedDateTime: 1.481749260156E9,
 *       TrustDirection: "One-Way: Outgoing",
 *       TrustId: "t-9267353df0",
 *       TrustState: "Failed",
 *       TrustStateReason: "The specified domain either does not exist or could not be contacted. Name: sales.example.com",
 *       TrustType: "Forest"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTrustsCommand extends command<DescribeTrustsCommandInput, DescribeTrustsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrusts",
  DescribeTrusts$
) {
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
