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
import { GetBucketsRequest, GetBucketsResult } from "../models/models_0";
import { de_GetBucketsCommand, se_GetBucketsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketsCommand}.
 */
export interface GetBucketsCommandInput extends GetBucketsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketsCommand}.
 */
export interface GetBucketsCommandOutput extends GetBucketsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about one or more Amazon Lightsail buckets. The information returned
 *       includes the synchronization status of the Amazon Simple Storage Service (Amazon S3)
 *       account-level block public access feature for your Lightsail buckets.</p>
 *          <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetBucketsRequest
 *   bucketName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 *   includeConnectedResources: true || false,
 * };
 * const command = new GetBucketsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketsResult
 * //   buckets: [ // BucketList
 * //     { // Bucket
 * //       resourceType: "STRING_VALUE",
 * //       accessRules: { // AccessRules
 * //         getObject: "public" || "private",
 * //         allowPublicOverrides: true || false,
 * //       },
 * //       arn: "STRING_VALUE",
 * //       bundleId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       url: "STRING_VALUE",
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       name: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       objectVersioning: "STRING_VALUE",
 * //       ableToUpdateBundle: true || false,
 * //       readonlyAccessAccounts: [ // PartnerIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       resourcesReceivingAccess: [ // AccessReceiverList
 * //         { // ResourceReceivingAccess
 * //           name: "STRING_VALUE",
 * //           resourceType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       state: { // BucketState
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //       accessLogConfig: { // BucketAccessLogConfig
 * //         enabled: true || false, // required
 * //         destination: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * //   accountLevelBpaSync: { // AccountLevelBpaSync
 * //     status: "InSync" || "Failed" || "NeverSynced" || "Defaulted",
 * //     lastSyncedAt: new Date("TIMESTAMP"),
 * //     message: "DEFAULTED_FOR_SLR_MISSING" || "SYNC_ON_HOLD" || "DEFAULTED_FOR_SLR_MISSING_ON_HOLD" || "Unknown",
 * //     bpaImpactsLightsail: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketsCommandInput - {@link GetBucketsCommandInput}
 * @returns {@link GetBucketsCommandOutput}
 * @see {@link GetBucketsCommandInput} for command's `input` shape.
 * @see {@link GetBucketsCommandOutput} for command's `response` shape.
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
 */
export class GetBucketsCommand extends $Command<
  GetBucketsCommandInput,
  GetBucketsCommandOutput,
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
  constructor(readonly input: GetBucketsCommandInput) {
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
  ): Handler<GetBucketsCommandInput, GetBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBucketsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBucketsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetBuckets",
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
  private serialize(input: GetBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketsCommandOutput> {
    return de_GetBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
