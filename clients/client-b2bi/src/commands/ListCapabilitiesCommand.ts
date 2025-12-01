// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCapabilitiesRequest, ListCapabilitiesResponse } from "../models/models_0";
import { ListCapabilities } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandInput extends ListCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandOutput extends ListCapabilitiesResponse, __MetadataBearer {}

/**
 * <p>Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListCapabilitiesCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListCapabilitiesCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
 * const client = new B2biClient(config);
 * const input = { // ListCapabilitiesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCapabilitiesResponse
 * //   capabilities: [ // CapabilityList // required
 * //     { // CapabilitySummary
 * //       capabilityId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "edi", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapabilitiesCommandInput - {@link ListCapabilitiesCommandInput}
 * @returns {@link ListCapabilitiesCommandOutput}
 * @see {@link ListCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 *
 * @example Sample ListCapabilities call
 * ```javascript
 * //
 * const input = {
 *   maxResults: 50,
 *   nextToken: "foo"
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capabilities: [
 *     {
 *       capabilityId: "ca-963a8121e4fc4e348",
 *       createdAt: "2023-11-01T21:51:05.504Z",
 *       modifiedAt: "2023-11-01T21:51:05.504Z",
 *       name: "b2biexample",
 *       type: "edi"
 *     }
 *   ],
 *   nextToken: "foo"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCapabilitiesCommand extends $Command
  .classBuilder<
    ListCapabilitiesCommandInput,
    ListCapabilitiesCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("B2BI", "ListCapabilities", {})
  .n("B2biClient", "ListCapabilitiesCommand")
  .sc(ListCapabilities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapabilitiesRequest;
      output: ListCapabilitiesResponse;
    };
    sdk: {
      input: ListCapabilitiesCommandInput;
      output: ListCapabilitiesCommandOutput;
    };
  };
}
