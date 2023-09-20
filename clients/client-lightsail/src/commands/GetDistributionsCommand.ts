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
import { GetDistributionsRequest, GetDistributionsResult } from "../models/models_1";
import { de_GetDistributionsCommand, se_GetDistributionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionsCommand}.
 */
export interface GetDistributionsCommandInput extends GetDistributionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionsCommand}.
 */
export interface GetDistributionsCommandOutput extends GetDistributionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about one or more of your Amazon Lightsail content delivery network
 *       (CDN) distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetDistributionsRequest
 *   distributionName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetDistributionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionsResult
 * //   distributions: [ // DistributionList
 * //     { // LightsailDistribution
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       alternativeDomainNames: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       isEnabled: true || false,
 * //       domainName: "STRING_VALUE",
 * //       bundleId: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       origin: { // Origin
 * //         name: "STRING_VALUE",
 * //         resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //         protocolPolicy: "http-only" || "https-only",
 * //       },
 * //       originPublicDNS: "STRING_VALUE",
 * //       defaultCacheBehavior: { // CacheBehavior
 * //         behavior: "dont-cache" || "cache",
 * //       },
 * //       cacheBehaviorSettings: { // CacheSettings
 * //         defaultTTL: Number("long"),
 * //         minimumTTL: Number("long"),
 * //         maximumTTL: Number("long"),
 * //         allowedHTTPMethods: "STRING_VALUE",
 * //         cachedHTTPMethods: "STRING_VALUE",
 * //         forwardedCookies: { // CookieObject
 * //           option: "none" || "allow-list" || "all",
 * //           cookiesAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         forwardedHeaders: { // HeaderObject
 * //           option: "none" || "allow-list" || "all",
 * //           headersAllowList: [ // HeaderForwardList
 * //             "Accept" || "Accept-Charset" || "Accept-Datetime" || "Accept-Encoding" || "Accept-Language" || "Authorization" || "CloudFront-Forwarded-Proto" || "CloudFront-Is-Desktop-Viewer" || "CloudFront-Is-Mobile-Viewer" || "CloudFront-Is-SmartTV-Viewer" || "CloudFront-Is-Tablet-Viewer" || "CloudFront-Viewer-Country" || "Host" || "Origin" || "Referer",
 * //           ],
 * //         },
 * //         forwardedQueryStrings: { // QueryStringObject
 * //           option: true || false,
 * //           queryStringsAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       cacheBehaviors: [ // CacheBehaviorList
 * //         { // CacheBehaviorPerPath
 * //           path: "STRING_VALUE",
 * //           behavior: "dont-cache" || "cache",
 * //         },
 * //       ],
 * //       ableToUpdateBundle: true || false,
 * //       ipAddressType: "dualstack" || "ipv4",
 * //       tags: [ // TagList
 * //         { // Tag
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
 * @param GetDistributionsCommandInput - {@link GetDistributionsCommandInput}
 * @returns {@link GetDistributionsCommandOutput}
 * @see {@link GetDistributionsCommandInput} for command's `input` shape.
 * @see {@link GetDistributionsCommandOutput} for command's `response` shape.
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
export class GetDistributionsCommand extends $Command<
  GetDistributionsCommandInput,
  GetDistributionsCommandOutput,
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
  constructor(readonly input: GetDistributionsCommandInput) {
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
  ): Handler<GetDistributionsCommandInput, GetDistributionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDistributionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetDistributions",
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
  private serialize(input: GetDistributionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDistributionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDistributionsCommandOutput> {
    return de_GetDistributionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
