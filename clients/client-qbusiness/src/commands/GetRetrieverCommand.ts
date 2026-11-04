// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRetrieverRequest, GetRetrieverResponse } from "../models/models_0";
import { GetRetriever$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandInput extends GetRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandOutput extends GetRetrieverResponse, __MetadataBearer {}

/**
 * Gets information about an existing retriever used by an Amazon Q Business application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   retrieverId: "STRING_VALUE", // required
 * };
 * const command = new GetRetrieverCommand(input);
 * const response = await client.send(command);
 * // { // GetRetrieverResponse
 * //   applicationId: "STRING_VALUE",
 * //   retrieverId: "STRING_VALUE",
 * //   retrieverArn: "STRING_VALUE",
 * //   type: "NATIVE_INDEX" || "KENDRA_INDEX",
 * //   status: "CREATING" || "ACTIVE" || "FAILED",
 * //   displayName: "STRING_VALUE",
 * //   configuration: { // RetrieverConfiguration Union: only one key present
 * //     nativeIndexConfiguration: { // NativeIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //       version: Number("long"),
 * //       boostingOverride: { // DocumentAttributeBoostingOverrideMap
 * //         "<keys>": { // DocumentAttributeBoostingConfiguration Union: only one key present
 * //           numberConfiguration: { // NumberAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             boostingType: "PRIORITIZE_LARGER_VALUES" || "PRIORITIZE_SMALLER_VALUES",
 * //           },
 * //           stringConfiguration: { // StringAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             attributeValueBoosting: { // StringAttributeValueBoosting
 * //               "<keys>": "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO" || "THREE" || "FOUR" || "FIVE",
 * //             },
 * //           },
 * //           dateConfiguration: { // DateAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             boostingDurationInSeconds: Number("long"),
 * //           },
 * //           stringListConfiguration: { // StringListAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     kendraIndexConfiguration: { // KendraIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRetrieverCommandInput - {@link GetRetrieverCommandInput}
 * @returns {@link GetRetrieverCommandOutput}
 * @see {@link GetRetrieverCommandInput} for command's `input` shape.
 * @see {@link GetRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class GetRetrieverCommand extends command<GetRetrieverCommandInput, GetRetrieverCommandOutput>(
  _ep0,
  _mw0,
  "GetRetriever",
  GetRetriever$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRetrieverRequest;
      output: GetRetrieverResponse;
    };
    sdk: {
      input: GetRetrieverCommandInput;
      output: GetRetrieverCommandOutput;
    };
  };
}
