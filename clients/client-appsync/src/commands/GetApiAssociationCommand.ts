// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApiAssociationRequest, GetApiAssociationResponse } from "../models/models_0";
import { GetApiAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApiAssociationCommand}.
 */
export interface GetApiAssociationCommandInput extends GetApiAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetApiAssociationCommand}.
 */
export interface GetApiAssociationCommandOutput extends GetApiAssociationResponse, __MetadataBearer {}

/**
 * Retrieves an `ApiAssociation` object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetApiAssociationRequest
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new GetApiAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetApiAssociationResponse
 * //   apiAssociation: { // ApiAssociation
 * //     domainName: "STRING_VALUE",
 * //     apiId: "STRING_VALUE",
 * //     associationStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //     deploymentDetail: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApiAssociationCommandInput - {@link GetApiAssociationCommandInput}
 * @returns {@link GetApiAssociationCommandOutput}
 * @see {@link GetApiAssociationCommandInput} for command's `input` shape.
 * @see {@link GetApiAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class GetApiAssociationCommand extends command<GetApiAssociationCommandInput, GetApiAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetApiAssociation",
  GetApiAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiAssociationRequest;
      output: GetApiAssociationResponse;
    };
    sdk: {
      input: GetApiAssociationCommandInput;
      output: GetApiAssociationCommandOutput;
    };
  };
}
