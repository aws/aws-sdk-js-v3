// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableFederationRequest, EnableFederationResponse } from "../models/models_0";
import { de_EnableFederationCommand, se_EnableFederationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableFederationCommand}.
 */
export interface EnableFederationCommandInput extends EnableFederationRequest {}
/**
 * @public
 *
 * The output of {@link EnableFederationCommand}.
 */
export interface EnableFederationCommandOutput extends EnableFederationResponse, __MetadataBearer {}

/**
 * <p>
 *          Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue
 *          <a href="https://docs.aws.amazon.com/glue/latest/dg/components-overview.html#data-catalog-intro">Data Catalog</a> and run
 *          SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog
 *          lets the Athena query engine know how to find, read, and process the data that you want to query.</p>
 *          <p>When you enable Lake query federation, CloudTrail
 *          creates a managed database named <code>aws:cloudtrail</code> (if the database doesn't already exist) and a managed federated table in
 *          the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation-lake-formation.html">Lake Formation</a>, the service responsible for allowing fine-grained access control
 *          of the federated resources in the Glue Data Catalog.</p>
 *          <p>For more information about Lake query federation, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html">Federate an event data store</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, EnableFederationCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, EnableFederationCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // EnableFederationRequest
 *   EventDataStore: "STRING_VALUE", // required
 *   FederationRoleArn: "STRING_VALUE", // required
 * };
 * const command = new EnableFederationCommand(input);
 * const response = await client.send(command);
 * // { // EnableFederationResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   FederationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //   FederationRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableFederationCommandInput - {@link EnableFederationCommandInput}
 * @returns {@link EnableFederationCommandOutput}
 * @see {@link EnableFederationCommandInput} for command's `input` shape.
 * @see {@link EnableFederationCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *          You do not have sufficient access to perform this action.
 *       </p>
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access">How to enable or disable trusted access</a> in the <i>Organizations User Guide</i> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> in the <i>CloudTrail User Guide</i>.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>
 *          You are trying to update a resource when another request is in progress. Allow sufficient wait time for the previous request to complete, then retry your request.
 *       </p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreFederationEnabledException} (client fault)
 *  <p>
 *         You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the <code>DisableFederation</code> operation to
 *          disable Lake query federation on the event data store.
 *       </p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
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
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *  <p>This exception is thrown when Organizations is not configured to support all
 *          features. All features must be enabled in Organizations to support creating an
 *          organization trail or event data store.</p>
 *
 * @throws {@link OrganizationsNotInUseException} (client fault)
 *  <p>This exception is thrown when the request is made from an Amazon Web Services account
 *          that is not a member of an organization. To make this request, sign in using the
 *          credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class EnableFederationCommand extends $Command
  .classBuilder<
    EnableFederationCommandInput,
    EnableFederationCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "EnableFederation", {})
  .n("CloudTrailClient", "EnableFederationCommand")
  .f(void 0, void 0)
  .ser(se_EnableFederationCommand)
  .de(de_EnableFederationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableFederationRequest;
      output: EnableFederationResponse;
    };
    sdk: {
      input: EnableFederationCommandInput;
      output: EnableFederationCommandOutput;
    };
  };
}
