// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeActivationsRequest, DescribeActivationsResult } from "../models/models_0";
import { DescribeActivations } from "../schemas/schemas_7_List";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActivationsCommand}.
 */
export interface DescribeActivationsCommandInput extends DescribeActivationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActivationsCommand}.
 */
export interface DescribeActivationsCommandOutput extends DescribeActivationsResult, __MetadataBearer {}

/**
 * <p>Describes details about the activation, such as the date and time the activation was
 *    created, its expiration date, the Identity and Access Management (IAM) role assigned to
 *    the managed nodes in the activation, and the number of nodes registered by using this
 *    activation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeActivationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeActivationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeActivationsRequest
 *   Filters: [ // DescribeActivationsFilterList
 *     { // DescribeActivationsFilter
 *       FilterKey: "ActivationIds" || "DefaultInstanceName" || "IamRole",
 *       FilterValues: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeActivationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActivationsResult
 * //   ActivationList: [ // ActivationList
 * //     { // Activation
 * //       ActivationId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefaultInstanceName: "STRING_VALUE",
 * //       IamRole: "STRING_VALUE",
 * //       RegistrationLimit: Number("int"),
 * //       RegistrationsCount: Number("int"),
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       Expired: true || false,
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActivationsCommandInput - {@link DescribeActivationsCommandInput}
 * @returns {@link DescribeActivationsCommandOutput}
 * @see {@link DescribeActivationsCommandInput} for command's `input` shape.
 * @see {@link DescribeActivationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeActivationsCommand extends $Command
  .classBuilder<
    DescribeActivationsCommandInput,
    DescribeActivationsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeActivations", {})
  .n("SSMClient", "DescribeActivationsCommand")
  .sc(DescribeActivations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActivationsRequest;
      output: DescribeActivationsResult;
    };
    sdk: {
      input: DescribeActivationsCommandInput;
      output: DescribeActivationsCommandOutput;
    };
  };
}
