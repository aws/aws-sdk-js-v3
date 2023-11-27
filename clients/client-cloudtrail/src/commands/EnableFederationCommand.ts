// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { EnableFederationRequest, EnableFederationResponse } from "../models/models_0";
import { de_EnableFederationCommand, se_EnableFederationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>
 *          Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue
 *          <a href="https://docs.aws.amazon.com/glue/latest/dg/components-overview.html#data-catalog-intro">Data Catalog</a> and run
 *          SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog
 *          lets the Athena query engine know how to find, read, and process the data that you want to query.</p>
 *          <p>When you enable Lake query federation, CloudTrail
 *          creates a federated database named <code>aws:cloudtrail</code> (if the database doesn't already exist) and a federated table in
 *          the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in
 *          <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/how-it-works.html">Lake Formation</a>, the service responsible for revoking or granting permissions
 *          to the federated resources in the Glue Data Catalog.
 *       </p>
 *          <p>For more information about Lake query federation, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html">Federate an event data store</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, EnableFederationCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, EnableFederationCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
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
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other Amazon Web Services Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
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
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html">Create an event data store</a>.</p>
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
 */
export class EnableFederationCommand extends $Command<
  EnableFederationCommandInput,
  EnableFederationCommandOutput,
  CloudTrailClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: EnableFederationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableFederationCommandInput, EnableFederationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableFederationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "EnableFederationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "EnableFederation",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: EnableFederationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableFederationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableFederationCommandOutput> {
    return de_EnableFederationCommand(output, context);
  }
}
