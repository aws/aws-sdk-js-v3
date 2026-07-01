// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStudioSessionMappingInput, GetStudioSessionMappingOutput } from "../models/models_0";
import { GetStudioSessionMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStudioSessionMappingCommand}.
 */
export interface GetStudioSessionMappingCommandInput extends GetStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link GetStudioSessionMappingCommand}.
 */
export interface GetStudioSessionMappingCommandOutput extends GetStudioSessionMappingOutput, __MetadataBearer {}

/**
 * <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user
 *          or group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 * };
 * const command = new GetStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // { // GetStudioSessionMappingOutput
 * //   SessionMapping: { // SessionMappingDetail
 * //     StudioId: "STRING_VALUE",
 * //     IdentityId: "STRING_VALUE",
 * //     IdentityName: "STRING_VALUE",
 * //     IdentityType: "USER" || "GROUP",
 * //     SessionPolicyArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStudioSessionMappingCommandInput - {@link GetStudioSessionMappingCommandInput}
 * @returns {@link GetStudioSessionMappingCommandOutput}
 * @see {@link GetStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link GetStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetStudioSessionMappingCommand extends command<GetStudioSessionMappingCommandInput, GetStudioSessionMappingCommandOutput>(
  _ep0,
  _mw0,
  "GetStudioSessionMapping",
  GetStudioSessionMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStudioSessionMappingInput;
      output: GetStudioSessionMappingOutput;
    };
    sdk: {
      input: GetStudioSessionMappingCommandInput;
      output: GetStudioSessionMappingCommandOutput;
    };
  };
}
