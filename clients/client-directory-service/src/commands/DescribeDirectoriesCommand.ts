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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  DescribeDirectoriesRequest,
  DescribeDirectoriesResult,
  DescribeDirectoriesResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDirectoriesCommand, se_DescribeDirectoriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectoriesCommand}.
 */
export interface DescribeDirectoriesCommandInput extends DescribeDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoriesCommand}.
 */
export interface DescribeDirectoriesCommandOutput extends DescribeDirectoriesResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains information about the directories that belong to this account.</p>
 *          <p>You can retrieve information about specific directories by passing the directory
 *       identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong
 *       to the current account are returned.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the
 *         <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in
 *       the next call to <a>DescribeDirectories</a> to retrieve the next set of
 *       items.</p>
 *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeDirectoriesRequest
 *   DirectoryIds: [ // DirectoryIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoriesResult
 * //   DirectoryDescriptions: [ // DirectoryDescriptions
 * //     { // DirectoryDescription
 * //       DirectoryId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ShortName: "STRING_VALUE",
 * //       Size: "Small" || "Large",
 * //       Edition: "Enterprise" || "Standard",
 * //       Alias: "STRING_VALUE",
 * //       AccessUrl: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DnsIpAddrs: [ // DnsIpAddrs
 * //         "STRING_VALUE",
 * //       ],
 * //       Stage: "Requested" || "Creating" || "Created" || "Active" || "Inoperable" || "Impaired" || "Restoring" || "RestoreFailed" || "Deleting" || "Deleted" || "Failed",
 * //       ShareStatus: "Shared" || "PendingAcceptance" || "Rejected" || "Rejecting" || "RejectFailed" || "Sharing" || "ShareFailed" || "Deleted" || "Deleting",
 * //       ShareMethod: "ORGANIZATIONS" || "HANDSHAKE",
 * //       ShareNotes: "STRING_VALUE",
 * //       LaunchTime: new Date("TIMESTAMP"),
 * //       StageLastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       Type: "SimpleAD" || "ADConnector" || "MicrosoftAD" || "SharedMicrosoftAD",
 * //       VpcSettings: { // DirectoryVpcSettingsDescription
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupId: "STRING_VALUE",
 * //         AvailabilityZones: [ // AvailabilityZones
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ConnectSettings: { // DirectoryConnectSettingsDescription
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         CustomerUserName: "STRING_VALUE",
 * //         SecurityGroupId: "STRING_VALUE",
 * //         AvailabilityZones: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ConnectIps: [ // IpAddrs
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       RadiusSettings: { // RadiusSettings
 * //         RadiusServers: [ // Servers
 * //           "STRING_VALUE",
 * //         ],
 * //         RadiusPort: Number("int"),
 * //         RadiusTimeout: Number("int"),
 * //         RadiusRetries: Number("int"),
 * //         SharedSecret: "STRING_VALUE",
 * //         AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 * //         DisplayLabel: "STRING_VALUE",
 * //         UseSameUsername: true || false,
 * //       },
 * //       RadiusStatus: "Creating" || "Completed" || "Failed",
 * //       StageReason: "STRING_VALUE",
 * //       SsoEnabled: true || false,
 * //       DesiredNumberOfDomainControllers: Number("int"),
 * //       OwnerDirectoryDescription: { // OwnerDirectoryDescription
 * //         DirectoryId: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //         DnsIpAddrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcSettings: {
 * //           VpcId: "STRING_VALUE",
 * //           SubnetIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroupId: "STRING_VALUE",
 * //           AvailabilityZones: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         RadiusSettings: {
 * //           RadiusServers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           RadiusPort: Number("int"),
 * //           RadiusTimeout: Number("int"),
 * //           RadiusRetries: Number("int"),
 * //           SharedSecret: "STRING_VALUE",
 * //           AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 * //           DisplayLabel: "STRING_VALUE",
 * //           UseSameUsername: true || false,
 * //         },
 * //         RadiusStatus: "Creating" || "Completed" || "Failed",
 * //       },
 * //       RegionsInfo: { // RegionsInfo
 * //         PrimaryRegion: "STRING_VALUE",
 * //         AdditionalRegions: [ // AdditionalRegions
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       OsVersion: "SERVER_2012" || "SERVER_2019",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoriesCommandInput - {@link DescribeDirectoriesCommandInput}
 * @returns {@link DescribeDirectoriesCommandOutput}
 * @see {@link DescribeDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeDirectoriesCommand extends $Command<
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeDirectoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectoriesCommandInput, DescribeDirectoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDirectoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeDirectoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeDirectoriesResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeDirectories",
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
  private serialize(input: DescribeDirectoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDirectoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDirectoriesCommandOutput> {
    return de_DescribeDirectoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
