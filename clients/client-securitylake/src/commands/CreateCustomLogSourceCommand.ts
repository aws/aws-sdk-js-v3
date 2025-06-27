// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomLogSourceRequest, CreateCustomLogSourceResponse } from "../models/models_0";
import { de_CreateCustomLogSourceCommand, se_CreateCustomLogSourceCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomLogSourceCommand}.
 */
export interface CreateCustomLogSourceCommandInput extends CreateCustomLogSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomLogSourceCommand}.
 */
export interface CreateCustomLogSourceCommandOutput extends CreateCustomLogSourceResponse, __MetadataBearer {}

/**
 * <p>Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region
 *          where you want to create a custom source. Security Lake can collect logs and events from
 *          third-party custom sources. After creating the appropriate IAM role to
 *          invoke Glue crawler, use this API to add a custom source name in Security Lake. This
 *          operation creates a partition in the Amazon S3 bucket for Security Lake as the target
 *          location for log files from the custom source. In addition, this operation also creates an
 *          associated Glue table and an Glue crawler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateCustomLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateCustomLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateCustomLogSourceRequest
 *   sourceName: "STRING_VALUE", // required
 *   sourceVersion: "STRING_VALUE",
 *   eventClasses: [ // OcsfEventClassList
 *     "STRING_VALUE",
 *   ],
 *   configuration: { // CustomLogSourceConfiguration
 *     crawlerConfiguration: { // CustomLogSourceCrawlerConfiguration
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     providerIdentity: { // AwsIdentity
 *       principal: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateCustomLogSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomLogSourceResponse
 * //   source: { // CustomLogSourceResource
 * //     sourceName: "STRING_VALUE",
 * //     sourceVersion: "STRING_VALUE",
 * //     provider: { // CustomLogSourceProvider
 * //       roleArn: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //     },
 * //     attributes: { // CustomLogSourceAttributes
 * //       crawlerArn: "STRING_VALUE",
 * //       databaseArn: "STRING_VALUE",
 * //       tableArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCustomLogSourceCommandInput - {@link CreateCustomLogSourceCommandInput}
 * @returns {@link CreateCustomLogSourceCommandOutput}
 * @see {@link CreateCustomLogSourceCommandInput} for command's `input` shape.
 * @see {@link CreateCustomLogSourceCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 *
 * @public
 */
export class CreateCustomLogSourceCommand extends $Command
  .classBuilder<
    CreateCustomLogSourceCommandInput,
    CreateCustomLogSourceCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityLake", "CreateCustomLogSource", {})
  .n("SecurityLakeClient", "CreateCustomLogSourceCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomLogSourceCommand)
  .de(de_CreateCustomLogSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomLogSourceRequest;
      output: CreateCustomLogSourceResponse;
    };
    sdk: {
      input: CreateCustomLogSourceCommandInput;
      output: CreateCustomLogSourceCommandOutput;
    };
  };
}
