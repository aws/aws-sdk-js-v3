// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSubdomainsRequest, GetSubdomainsResult } from "../models/models_1";
import { GetSubdomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSubdomainsCommand}.
 */
export interface GetSubdomainsCommandInput extends GetSubdomainsRequest {}
/**
 * @public
 *
 * The output of {@link GetSubdomainsCommand}.
 */
export interface GetSubdomainsCommandOutput extends GetSubdomainsResult, __MetadataBearer {}

/**
 * <p>Returns information about one or more of your Lightsail subdomains.</p>
 *          <p>When you don't specify a subdomain, the response lists your top-level subdomains, and
 *       each top-level subdomain includes its nested subdomains.</p>
 *          <p>The results are paginated. To get the next page of results, use the <code>pageToken</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetSubdomainsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetSubdomainsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetSubdomainsRequest
 *   subdomainName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetSubdomainsCommand(input);
 * const response = await client.send(command);
 * // { // GetSubdomainsResult
 * //   subdomains: [ // SubdomainList
 * //     { // Subdomain
 * //       subdomainName: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       fqdn: "STRING_VALUE",
 * //       depth: Number("int"),
 * //       state: "CREATING" || "CREATE_FAILED" || "UNATTACHED" || "ATTACHING" || "ATTACHED" || "DETACHING" || "TRANSFERRING" || "IMPLICIT",
 * //       attachedResource: { // SubdomainAttachableResource
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         attachedAt: new Date("TIMESTAMP"),
 * //       },
 * //       attachingResource: {
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         attachedAt: new Date("TIMESTAMP"),
 * //       },
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       parentFqdn: "STRING_VALUE",
 * //       children: [
 * //         {
 * //           subdomainName: "STRING_VALUE",
 * //           arn: "STRING_VALUE",
 * //           fqdn: "STRING_VALUE",
 * //           depth: Number("int"),
 * //           state: "CREATING" || "CREATE_FAILED" || "UNATTACHED" || "ATTACHING" || "ATTACHED" || "DETACHING" || "TRANSFERRING" || "IMPLICIT",
 * //           attachedResource: {
 * //             arn: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //             attachedAt: new Date("TIMESTAMP"),
 * //           },
 * //           attachingResource: {
 * //             arn: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //             attachedAt: new Date("TIMESTAMP"),
 * //           },
 * //           location: {
 * //             availabilityZone: "STRING_VALUE",
 * //             regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
 * //           },
 * //           createdAt: new Date("TIMESTAMP"),
 * //           parentFqdn: "STRING_VALUE",
 * //           children: "<SubdomainList>",
 * //           tags: [ // TagList
 * //             { // Tag
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       tags: [
 * //         {
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSubdomainsCommandInput - {@link GetSubdomainsCommandInput}
 * @returns {@link GetSubdomainsCommandOutput}
 * @see {@link GetSubdomainsCommandInput} for command's `input` shape.
 * @see {@link GetSubdomainsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetSubdomainsCommand extends command<GetSubdomainsCommandInput, GetSubdomainsCommandOutput>(
  _ep0,
  _mw0,
  "GetSubdomains",
  GetSubdomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubdomainsRequest;
      output: GetSubdomainsResult;
    };
    sdk: {
      input: GetSubdomainsCommandInput;
      output: GetSubdomainsCommandOutput;
    };
  };
}
