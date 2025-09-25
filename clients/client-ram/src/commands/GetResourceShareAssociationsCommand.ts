// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse } from "../models/models_0";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourceShareAssociations } from "../schemas/schemas_1_ResourceShare";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceShareAssociationsCommand}.
 */
export interface GetResourceShareAssociationsCommandInput extends GetResourceShareAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceShareAssociationsCommand}.
 */
export interface GetResourceShareAssociationsCommandOutput
  extends GetResourceShareAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the lists of resources and principals that associated for resource shares that you
 *             own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // GetResourceShareAssociationsRequest
 *   associationType: "PRINCIPAL" || "RESOURCE", // required
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceArn: "STRING_VALUE",
 *   principal: "STRING_VALUE",
 *   associationStatus: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourceShareAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceShareAssociationsResponse
 * //   resourceShareAssociations: [ // ResourceShareAssociationList
 * //     { // ResourceShareAssociation
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       associatedEntity: "STRING_VALUE",
 * //       associationType: "PRINCIPAL" || "RESOURCE",
 * //       status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       external: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceShareAssociationsCommandInput - {@link GetResourceShareAssociationsCommandInput}
 * @returns {@link GetResourceShareAssociationsCommandOutput}
 * @see {@link GetResourceShareAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class GetResourceShareAssociationsCommand extends $Command
  .classBuilder<
    GetResourceShareAssociationsCommandInput,
    GetResourceShareAssociationsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "GetResourceShareAssociations", {})
  .n("RAMClient", "GetResourceShareAssociationsCommand")
  .sc(GetResourceShareAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceShareAssociationsRequest;
      output: GetResourceShareAssociationsResponse;
    };
    sdk: {
      input: GetResourceShareAssociationsCommandInput;
      output: GetResourceShareAssociationsCommandOutput;
    };
  };
}
