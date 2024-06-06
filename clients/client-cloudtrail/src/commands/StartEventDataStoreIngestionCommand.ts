// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartEventDataStoreIngestionRequest, StartEventDataStoreIngestionResponse } from "../models/models_0";
import {
  de_StartEventDataStoreIngestionCommand,
  se_StartEventDataStoreIngestionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartEventDataStoreIngestionCommand}.
 */
export interface StartEventDataStoreIngestionCommandInput extends StartEventDataStoreIngestionRequest {}
/**
 * @public
 *
 * The output of {@link StartEventDataStoreIngestionCommand}.
 */
export interface StartEventDataStoreIngestionCommandOutput
  extends StartEventDataStoreIngestionResponse,
    __MetadataBearer {}

/**
 * <p>Starts the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To start ingestion, the event data store <code>Status</code> must be <code>STOPPED_INGESTION</code>
 *          and the <code>eventCategory</code> must be <code>Management</code>, <code>Data</code>, or <code>ConfigurationItem</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartEventDataStoreIngestionCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartEventDataStoreIngestionCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // StartEventDataStoreIngestionRequest
 *   EventDataStore: "STRING_VALUE", // required
 * };
 * const command = new StartEventDataStoreIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartEventDataStoreIngestionCommandInput - {@link StartEventDataStoreIngestionCommandInput}
 * @returns {@link StartEventDataStoreIngestionCommandOutput}
 * @see {@link StartEventDataStoreIngestionCommandInput} for command's `input` shape.
 * @see {@link StartEventDataStoreIngestionCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *  <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 *
 * @throws {@link InvalidEventDataStoreStatusException} (client fault)
 *  <p>The event data store is not in a status that supports the operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *  <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html">Organization event data stores</a>.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 * @public
 */
export class StartEventDataStoreIngestionCommand extends $Command
  .classBuilder<
    StartEventDataStoreIngestionCommandInput,
    StartEventDataStoreIngestionCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "StartEventDataStoreIngestion", {})
  .n("CloudTrailClient", "StartEventDataStoreIngestionCommand")
  .f(void 0, void 0)
  .ser(se_StartEventDataStoreIngestionCommand)
  .de(de_StartEventDataStoreIngestionCommand)
  .build() {}
