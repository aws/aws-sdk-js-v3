// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServicesInput, ListServicesOutput } from "../models/models_0";
import { ListServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesInput {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesOutput, __MetadataBearer {}

/**
 * Returns a paginated list of Amazon Web Services service identifiers that you can use as values for the `visibleServices` setting in [UpdateAccountCustomizations](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_UpdateAccountCustomizations.html). The available services vary by Amazon Web Services partition. Use pagination to retrieve all results.
 *
 * > **Note:** The `visibleServices` setting controls only the appearance of services in the Amazon Web Services Management Console. It does not restrict access through the CLI, SDKs, or other APIs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { UxcClient, ListServicesCommand } from "@aws-sdk/client-uxc"; // ES Modules import
 * // const { UxcClient, ListServicesCommand } = require("@aws-sdk/client-uxc"); // CommonJS import
 * // import type { UxcClientConfig } from "@aws-sdk/client-uxc";
 * const config = {}; // type is UxcClientConfig
 * const client = new UxcClient(config);
 * const input = { // ListServicesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesOutput
 * //   nextToken: "STRING_VALUE",
 * //   services: [ // ServiceList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link UxcClientResolvedConfig | config} for UxcClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation. Verify that your IAM policy includes the required `uxc:` permissions for the operation that you are calling. For more information on IAM permissions, see [Amazon Web Services managed policies for Amazon Web Services Management Console](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/security-iam-awsmanpol.html).
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Reduce the frequency of your requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link UxcServiceException}
 *
 * Base exception class for all service exceptions from Uxc service.
 *
 * @example List available services
 * ```javascript
 * // Retrieves a paginated list of available AWS services
 * const input = { /* empty *\/ };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJhbGciOiJIUzI1NiJ91W342Gdcs259019",
 *   services: [
 *     "s3",
 *     "ec2",
 *     "lambda"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListServicesCommand extends command<ListServicesCommandInput, ListServicesCommandOutput>(
  _ep0,
  _mw0,
  "ListServices",
  ListServices$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesInput;
      output: ListServicesOutput;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
