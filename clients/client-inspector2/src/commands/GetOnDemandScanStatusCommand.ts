// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOnDemandScanStatusRequest, GetOnDemandScanStatusResponse } from "../models/models_0";
import { GetOnDemandScanStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOnDemandScanStatusCommand}.
 */
export interface GetOnDemandScanStatusCommandInput extends GetOnDemandScanStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetOnDemandScanStatusCommand}.
 */
export interface GetOnDemandScanStatusCommandOutput extends GetOnDemandScanStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status of a specific on-demand scan for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetOnDemandScanStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetOnDemandScanStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetOnDemandScanStatusRequest
 *   resourceId: "STRING_VALUE", // required
 *   scanId: "STRING_VALUE", // required
 *   resourceType: "AMI", // required
 * };
 * const command = new GetOnDemandScanStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOnDemandScanStatusResponse
 * //   scanId: "STRING_VALUE", // required
 * //   resourceId: "STRING_VALUE", // required
 * //   resourceType: "AMI", // required
 * //   scanStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //   scanStatusReason: "ACCESS_DENIED" || "INTERNAL_ERROR" || "STORAGE_LIMIT_EXCEEDED" || "EXTRACTION_COLLECTION_TIME_LIMIT_EXCEEDED" || "UNSUPPORTED_OS" || "RESOURCE_TERMINATED",
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   completedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetOnDemandScanStatusCommandInput - {@link GetOnDemandScanStatusCommandInput}
 * @returns {@link GetOnDemandScanStatusCommandOutput}
 * @see {@link GetOnDemandScanStatusCommandInput} for command's `input` shape.
 * @see {@link GetOnDemandScanStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetOnDemandScanStatusCommand extends command<GetOnDemandScanStatusCommandInput, GetOnDemandScanStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetOnDemandScanStatus",
  GetOnDemandScanStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOnDemandScanStatusRequest;
      output: GetOnDemandScanStatusResponse;
    };
    sdk: {
      input: GetOnDemandScanStatusCommandInput;
      output: GetOnDemandScanStatusCommandOutput;
    };
  };
}
