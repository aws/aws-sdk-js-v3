// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutProfileObjectRequest,
  PutProfileObjectRequestFilterSensitiveLog,
  PutProfileObjectResponse,
} from "../models/models_0";
import { de_PutProfileObjectCommand, se_PutProfileObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProfileObjectCommand}.
 */
export interface PutProfileObjectCommandInput extends PutProfileObjectRequest {}
/**
 * @public
 *
 * The output of {@link PutProfileObjectCommand}.
 */
export interface PutProfileObjectCommandOutput extends PutProfileObjectResponse, __MetadataBearer {}

/**
 * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
 *          <p>When adding a specific profile object, like a Contact Record, an inferred profile can
 *          get created if it is not mapped to an existing profile. The resulting profile will only
 *          have a phone number populated in the standard ProfileObject. Any additional Contact Records
 *          with the same phone number will be mapped to the same inferred profile.</p>
 *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
 *          ProfileObject, it will provide data to a standard profile depending on the
 *          ProfileObjectType definition.</p>
 *          <p>PutProfileObject needs an ObjectType, which can be created using
 *          PutProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutProfileObjectRequest
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Object: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new PutProfileObjectCommand(input);
 * const response = await client.send(command);
 * // { // PutProfileObjectResponse
 * //   ProfileObjectUniqueKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutProfileObjectCommandInput - {@link PutProfileObjectCommandInput}
 * @returns {@link PutProfileObjectCommandOutput}
 * @see {@link PutProfileObjectCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 * @public
 */
export class PutProfileObjectCommand extends $Command
  .classBuilder<
    PutProfileObjectCommandInput,
    PutProfileObjectCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "PutProfileObject", {})
  .n("CustomerProfilesClient", "PutProfileObjectCommand")
  .f(PutProfileObjectRequestFilterSensitiveLog, void 0)
  .ser(se_PutProfileObjectCommand)
  .de(de_PutProfileObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProfileObjectRequest;
      output: PutProfileObjectResponse;
    };
    sdk: {
      input: PutProfileObjectCommandInput;
      output: PutProfileObjectCommandOutput;
    };
  };
}
