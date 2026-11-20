// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssetOwnerInput, UpdateAssetOwnerOutput } from "../models/models_0";
import { UpdateAssetOwner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssetOwnerCommand}.
 */
export interface UpdateAssetOwnerCommandInput extends UpdateAssetOwnerInput {}
/**
 * @public
 *
 * The output of {@link UpdateAssetOwnerCommand}.
 */
export interface UpdateAssetOwnerCommandOutput extends UpdateAssetOwnerOutput, __MetadataBearer {}

/**
 * <p>Transfers the ownership of an asset to another project in the same Amazon DataZone domain. The transfer changes the asset's owning project and moves its published listing, subscriptions, and subscription grants to the target project.</p> <p>The transfer runs asynchronously, and the operation returns HTTP status code 202. To follow the transfer, call <code>GetAsset</code> and check <code>ownershipTransfer.status</code> until it is <code>SUCCEEDED</code> or <code>FAILED</code>.</p> <p>You need to be an owner of the project that currently owns the asset. You can transfer an asset from the domain's administration project to any project. You can also transfer an asset from any project to the administration project.</p> <p>An asset can have only one ownership transfer in progress at a time. While a transfer is in progress, requests that change the asset or its listing fail with a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateAssetOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateAssetOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateAssetOwnerInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   targetProjectIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateAssetOwnerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetOwnerOutput
 * //   id: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   ownershipTransfer: { // AssetOwnershipTransfer
 * //     status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //     sourceProjectId: "STRING_VALUE", // required
 * //     targetProjectId: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssetOwnerCommandInput - {@link UpdateAssetOwnerCommandInput}
 * @returns {@link UpdateAssetOwnerCommandOutput}
 * @see {@link UpdateAssetOwnerCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetOwnerCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class UpdateAssetOwnerCommand extends command<UpdateAssetOwnerCommandInput, UpdateAssetOwnerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssetOwner",
  UpdateAssetOwner$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetOwnerInput;
      output: UpdateAssetOwnerOutput;
    };
    sdk: {
      input: UpdateAssetOwnerCommandInput;
      output: UpdateAssetOwnerCommandOutput;
    };
  };
}
