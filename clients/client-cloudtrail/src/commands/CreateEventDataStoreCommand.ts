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
import { CreateEventDataStoreRequest, CreateEventDataStoreResponse } from "../models/models_0";
import { de_CreateEventDataStoreCommand, se_CreateEventDataStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEventDataStoreCommand}.
 */
export interface CreateEventDataStoreCommandInput extends CreateEventDataStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventDataStoreCommand}.
 */
export interface CreateEventDataStoreCommandOutput extends CreateEventDataStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new event data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CreateEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, CreateEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // CreateEventDataStoreRequest
 *   Name: "STRING_VALUE", // required
 *   AdvancedEventSelectors: [ // AdvancedEventSelectors
 *     { // AdvancedEventSelector
 *       Name: "STRING_VALUE",
 *       FieldSelectors: [ // AdvancedFieldSelectors // required
 *         { // AdvancedFieldSelector
 *           Field: "STRING_VALUE", // required
 *           Equals: [ // Operator
 *             "STRING_VALUE",
 *           ],
 *           StartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           EndsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [
 *             "STRING_VALUE",
 *           ],
 *           NotStartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEndsWith: "<Operator>",
 *         },
 *       ],
 *     },
 *   ],
 *   MultiRegionEnabled: true || false,
 *   OrganizationEnabled: true || false,
 *   RetentionPeriod: Number("int"),
 *   TerminationProtectionEnabled: true || false,
 *   TagsList: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   StartIngestion: true || false,
 * };
 * const command = new CreateEventDataStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventDataStoreResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATED" || "ENABLED" || "PENDING_DELETION" || "STARTING_INGESTION" || "STOPPING_INGESTION" || "STOPPED_INGESTION",
 * //   AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //     { // AdvancedEventSelector
 * //       Name: "STRING_VALUE",
 * //       FieldSelectors: [ // AdvancedFieldSelectors // required
 * //         { // AdvancedFieldSelector
 * //           Field: "STRING_VALUE", // required
 * //           Equals: [ // Operator
 * //             "STRING_VALUE",
 * //           ],
 * //           StartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEquals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotStartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEndsWith: "<Operator>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MultiRegionEnabled: true || false,
 * //   OrganizationEnabled: true || false,
 * //   RetentionPeriod: Number("int"),
 * //   TerminationProtectionEnabled: true || false,
 * //   TagsList: [ // TagsList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   KmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventDataStoreCommandInput - {@link CreateEventDataStoreCommandInput}
 * @returns {@link CreateEventDataStoreCommandOutput}
 * @see {@link CreateEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link CreateEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other Amazon Web Services Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link EventDataStoreAlreadyExistsException} (client fault)
 *  <p>An event data store with that name already exists.</p>
 *
 * @throws {@link EventDataStoreMaxLimitExceededException} (client fault)
 *  <p>Your account has used the maximum number of event data stores.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InvalidEventSelectorsException} (client fault)
 *  <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called
 *          with a number of event selectors, advanced event selectors, or data resources that is not
 *          valid. The combination of event selectors or advanced event selectors and data resources is
 *          not valid. A trail can have up to 5 event selectors. If a trail uses advanced event
 *          selectors, a maximum of 500 total values for all conditions in all advanced event selectors
 *          is allowed. A trail is limited to 250 data resources. These data resources can be
 *          distributed across event selectors, but the overall total cannot exceed 250.</p>
 *          <p>You can:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a valid number of event selectors (1 to 5) for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid number of data resources (1 to 250) for an event selector. The
 *                limit of number of resources on an individual event selector is configurable up to
 *                250. However, this upper limit is allowed only if the total number of data resources
 *                does not exceed 250 across all event selectors for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify up to 500 values for all conditions in all advanced event selectors for a
 *                trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid value for a parameter. For example, specifying the
 *                   <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is not
 *                valid.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *  <p>This exception is thrown when the KMS key ARN is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>This exception is thrown when the specified tag key or values are not valid. It can also
 *          occur if there are duplicate tags or too many tags on the resource.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *  <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
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
export class CreateEventDataStoreCommand extends $Command<
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: CreateEventDataStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventDataStoreCommandInput, CreateEventDataStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventDataStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "CreateEventDataStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "CreateEventDataStore",
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
  private serialize(input: CreateEventDataStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEventDataStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventDataStoreCommandOutput> {
    return de_CreateEventDataStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
