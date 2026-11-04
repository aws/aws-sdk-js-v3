// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBrandProfileAttributesInput, CreateBrandProfileAttributesOutput } from "../models/models_0";
import { CreateBrandProfileAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBrandProfileAttributesCommand}.
 */
export interface CreateBrandProfileAttributesCommandInput extends CreateBrandProfileAttributesInput {}
/**
 * @public
 *
 * The output of {@link CreateBrandProfileAttributesCommand}.
 */
export interface CreateBrandProfileAttributesCommandOutput extends CreateBrandProfileAttributesOutput, __MetadataBearer {}

/**
 * Creates up to 10 attributes for a brand profile in a single request. For attributes of type IMAGE or DOCUMENT, the response includes a presigned Amazon S3 URL that you use to upload the media. This operation is atomic: either all of the attributes are created, or none of them are.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, CreateBrandProfileAttributesCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, CreateBrandProfileAttributesCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // CreateBrandProfileAttributesInput
 *   brandProfileId: "STRING_VALUE", // required
 *   attributes: [ // BrandProfileAttributeInputList // required
 *     { // BrandProfileAttributeInput
 *       attributeName: "STRING_VALUE", // required
 *       attributeType: "TEXT" || "IMAGE" || "DOCUMENT", // required
 *       attributeValue: "STRING_VALUE",
 *       attachmentBody: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       description: "STRING_VALUE",
 *       category: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBrandProfileAttributesCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrandProfileAttributesOutput
 * //   attributes: [ // BrandProfileAttributeOutputList // required
 * //     { // BrandProfileAttributeOutput
 * //       attributeName: "STRING_VALUE", // required
 * //       attributeType: "TEXT" || "IMAGE" || "DOCUMENT", // required
 * //       mediaDownloadUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateBrandProfileAttributesCommandInput - {@link CreateBrandProfileAttributesCommandInput}
 * @returns {@link CreateBrandProfileAttributesCommandOutput}
 * @see {@link CreateBrandProfileAttributesCommandInput} for command's `input` shape.
 * @see {@link CreateBrandProfileAttributesCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed a service quota for your account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 *
 * Base exception class for all service exceptions from EndUserMessaging service.
 *
 * @example Create a text attribute on a brand profile
 * ```javascript
 * //
 * const input = {
 *   attributes: [
 *     {
 *       attributeName: "SupportEmail",
 *       attributeType: "TEXT",
 *       attributeValue: "support@example.com",
 *       category: "CONTACT"
 *     }
 *   ],
 *   brandProfileId: "bp-abc12345678901234"
 * };
 * const command = new CreateBrandProfileAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributes: [
 *     {
 *       attributeName: "SupportEmail",
 *       attributeType: "TEXT"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateBrandProfileAttributesCommand extends command<CreateBrandProfileAttributesCommandInput, CreateBrandProfileAttributesCommandOutput>(
  _ep0,
  _mw0,
  "CreateBrandProfileAttributes",
  CreateBrandProfileAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrandProfileAttributesInput;
      output: CreateBrandProfileAttributesOutput;
    };
    sdk: {
      input: CreateBrandProfileAttributesCommandInput;
      output: CreateBrandProfileAttributesCommandOutput;
    };
  };
}
