// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIamPortalLoginUrlInput, GetIamPortalLoginUrlOutput } from "../models/models_1";
import { GetIamPortalLoginUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIamPortalLoginUrlCommand}.
 */
export interface GetIamPortalLoginUrlCommandInput extends GetIamPortalLoginUrlInput {}
/**
 * @public
 *
 * The output of {@link GetIamPortalLoginUrlCommand}.
 */
export interface GetIamPortalLoginUrlCommandOutput extends GetIamPortalLoginUrlOutput, __MetadataBearer {}

/**
 * Gets the data portal URL for the specified Amazon DataZone domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetIamPortalLoginUrlCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetIamPortalLoginUrlCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetIamPortalLoginUrlInput
 *   domainIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIamPortalLoginUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetIamPortalLoginUrlOutput
 * //   authCodeUrl: "STRING_VALUE",
 * //   userProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetIamPortalLoginUrlCommandInput - {@link GetIamPortalLoginUrlCommandInput}
 * @returns {@link GetIamPortalLoginUrlCommandOutput}
 * @see {@link GetIamPortalLoginUrlCommandInput} for command's `input` shape.
 * @see {@link GetIamPortalLoginUrlCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetIamPortalLoginUrlCommand extends command<GetIamPortalLoginUrlCommandInput, GetIamPortalLoginUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetIamPortalLoginUrl",
  GetIamPortalLoginUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIamPortalLoginUrlInput;
      output: GetIamPortalLoginUrlOutput;
    };
    sdk: {
      input: GetIamPortalLoginUrlCommandInput;
      output: GetIamPortalLoginUrlCommandOutput;
    };
  };
}
