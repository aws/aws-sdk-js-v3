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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationRequest, GetOperationResult } from "../models/models_1";
import { de_GetOperationCommand, se_GetOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOperationCommand}.
 */
export interface GetOperationCommandInput extends GetOperationRequest {}
/**
 * @public
 *
 * The output of {@link GetOperationCommand}.
 */
export interface GetOperationCommandOutput extends GetOperationResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific operation. Operations include events such as when you
 *       create an instance, allocate a static IP, attach a static IP, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetOperationRequest
 *   operationId: "STRING_VALUE", // required
 * };
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetOperationResult
 * //   operation: { // Operation
 * //     id: "STRING_VALUE",
 * //     resourceName: "STRING_VALUE",
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //     },
 * //     isTerminal: true || false,
 * //     operationDetails: "STRING_VALUE",
 * //     operationType: "DeleteKnownHostKeys" || "DeleteInstance" || "CreateInstance" || "StopInstance" || "StartInstance" || "RebootInstance" || "OpenInstancePublicPorts" || "PutInstancePublicPorts" || "CloseInstancePublicPorts" || "AllocateStaticIp" || "ReleaseStaticIp" || "AttachStaticIp" || "DetachStaticIp" || "UpdateDomainEntry" || "DeleteDomainEntry" || "CreateDomain" || "DeleteDomain" || "CreateInstanceSnapshot" || "DeleteInstanceSnapshot" || "CreateInstancesFromSnapshot" || "CreateLoadBalancer" || "DeleteLoadBalancer" || "AttachInstancesToLoadBalancer" || "DetachInstancesFromLoadBalancer" || "UpdateLoadBalancerAttribute" || "CreateLoadBalancerTlsCertificate" || "DeleteLoadBalancerTlsCertificate" || "AttachLoadBalancerTlsCertificate" || "CreateDisk" || "DeleteDisk" || "AttachDisk" || "DetachDisk" || "CreateDiskSnapshot" || "DeleteDiskSnapshot" || "CreateDiskFromSnapshot" || "CreateRelationalDatabase" || "UpdateRelationalDatabase" || "DeleteRelationalDatabase" || "CreateRelationalDatabaseFromSnapshot" || "CreateRelationalDatabaseSnapshot" || "DeleteRelationalDatabaseSnapshot" || "UpdateRelationalDatabaseParameters" || "StartRelationalDatabase" || "RebootRelationalDatabase" || "StopRelationalDatabase" || "EnableAddOn" || "DisableAddOn" || "PutAlarm" || "GetAlarms" || "DeleteAlarm" || "TestAlarm" || "CreateContactMethod" || "GetContactMethods" || "SendContactMethodVerification" || "DeleteContactMethod" || "CreateDistribution" || "UpdateDistribution" || "DeleteDistribution" || "ResetDistributionCache" || "AttachCertificateToDistribution" || "DetachCertificateFromDistribution" || "UpdateDistributionBundle" || "SetIpAddressType" || "CreateCertificate" || "DeleteCertificate" || "CreateContainerService" || "UpdateContainerService" || "DeleteContainerService" || "CreateContainerServiceDeployment" || "CreateContainerServiceRegistryLogin" || "RegisterContainerImage" || "DeleteContainerImage" || "CreateBucket" || "DeleteBucket" || "CreateBucketAccessKey" || "DeleteBucketAccessKey" || "UpdateBucketBundle" || "UpdateBucket" || "SetResourceAccessForBucket" || "UpdateInstanceMetadataOptions" || "StartGUISession" || "StopGUISession",
 * //     status: "NotStarted" || "Started" || "Failed" || "Completed" || "Succeeded",
 * //     statusChangedAt: new Date("TIMESTAMP"),
 * //     errorCode: "STRING_VALUE",
 * //     errorDetails: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOperationCommandInput - {@link GetOperationCommandInput}
 * @returns {@link GetOperationCommandOutput}
 * @see {@link GetOperationCommandInput} for command's `input` shape.
 * @see {@link GetOperationCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
 */
export class GetOperationCommand extends $Command<
  GetOperationCommandInput,
  GetOperationCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOperationCommandInput, GetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetOperationCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetOperation",
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
  private serialize(input: GetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationCommandOutput> {
    return de_GetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
