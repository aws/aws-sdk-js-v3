// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateViewContentRequest, UpdateViewContentResponse } from "../models/models_4";
import { UpdateViewContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandInput extends UpdateViewContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandOutput extends UpdateViewContentResponse, __MetadataBearer {}

/**
 * Updates the view content of the given view identifier in the specified Connect Customer instance.
 *
 * It performs content validation if `Status` is set to `SAVED` and performs full content validation if `Status` is `PUBLISHED`. Note that the `$SAVED` alias' content will always be updated, but the `$LATEST` alias' content will only be updated if `Status` is `PUBLISHED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateViewContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateViewContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateViewContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED", // required
 *   Content: { // ViewInputContent
 *     Template: "STRING_VALUE",
 *     Actions: [ // ViewActions
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateViewContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateViewContentResponse
 * //   View: { // View
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //     Description: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     VersionDescription: "STRING_VALUE",
 * //     Content: { // ViewContent
 * //       InputSchema: "STRING_VALUE",
 * //       Template: "STRING_VALUE",
 * //       Actions: [ // ViewActions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     ViewContentSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateViewContentCommandInput - {@link UpdateViewContentCommandInput}
 * @returns {@link UpdateViewContentCommandOutput}
 * @see {@link UpdateViewContentCommandInput} for command's `input` shape.
 * @see {@link UpdateViewContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * That resource is already in use (for example, you're trying to add a record with the same name as an existing record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Displayed when rate-related API limits are exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateViewContentCommand extends command<UpdateViewContentCommandInput, UpdateViewContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateViewContent",
  UpdateViewContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateViewContentRequest;
      output: UpdateViewContentResponse;
    };
    sdk: {
      input: UpdateViewContentCommandInput;
      output: UpdateViewContentCommandOutput;
    };
  };
}
