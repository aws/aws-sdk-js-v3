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
} from "@smithy/types";

import { CreateDataLakeRequest, CreateDataLakeResponse } from "../models/models_0";
import { de_CreateDataLakeCommand, se_CreateDataLakeCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataLakeCommand}.
 */
export interface CreateDataLakeCommandInput extends CreateDataLakeRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataLakeCommand}.
 */
export interface CreateDataLakeCommandOutput extends CreateDataLakeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You
 *          can enable Security Lake in Amazon Web Services Regions with customized settings before enabling
 *          log collection in Regions. To specify particular Regions, configure these Regions using the
 *             <code>configurations</code> parameter. If you have already enabled Security Lake in a Region
 *          when you call this command, the command will update the Region if you provide new
 *          configuration parameters. If you have not already enabled Security Lake in the Region when you
 *          call this API, it will set up the data lake in the Region with the specified
 *          configurations.</p>
 *          <p>When you enable Security Lake, it starts ingesting security data after the
 *             <code>CreateAwsLogSource</code> call. This includes ingesting security data from
 *          sources, storing data, and making data accessible to subscribers. Security Lake also enables
 *          all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For
 *          more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDataLakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDataLakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateDataLakeRequest
 *   configurations: [ // DataLakeConfigurationList // required
 *     { // DataLakeConfiguration
 *       region: "STRING_VALUE", // required
 *       encryptionConfiguration: { // DataLakeEncryptionConfiguration
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       lifecycleConfiguration: { // DataLakeLifecycleConfiguration
 *         expiration: { // DataLakeLifecycleExpiration
 *           days: Number("int"),
 *         },
 *         transitions: [ // DataLakeLifecycleTransitionList
 *           { // DataLakeLifecycleTransition
 *             storageClass: "STRING_VALUE",
 *             days: Number("int"),
 *           },
 *         ],
 *       },
 *       replicationConfiguration: { // DataLakeReplicationConfiguration
 *         regions: [ // RegionList
 *           "STRING_VALUE",
 *         ],
 *         roleArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   metaStoreManagerRoleArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataLakeCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataLakeResponse
 * //   dataLakes: [ // DataLakeResourceList
 * //     { // DataLakeResource
 * //       dataLakeArn: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //       s3BucketArn: "STRING_VALUE",
 * //       encryptionConfiguration: { // DataLakeEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       lifecycleConfiguration: { // DataLakeLifecycleConfiguration
 * //         expiration: { // DataLakeLifecycleExpiration
 * //           days: Number("int"),
 * //         },
 * //         transitions: [ // DataLakeLifecycleTransitionList
 * //           { // DataLakeLifecycleTransition
 * //             storageClass: "STRING_VALUE",
 * //             days: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       replicationConfiguration: { // DataLakeReplicationConfiguration
 * //         regions: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //       createStatus: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //       updateStatus: { // DataLakeUpdateStatus
 * //         requestId: "STRING_VALUE",
 * //         status: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //         exception: { // DataLakeUpdateException
 * //           reason: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateDataLakeCommandInput - {@link CreateDataLakeCommandInput}
 * @returns {@link CreateDataLakeCommandOutput}
 * @see {@link CreateDataLakeCommandInput} for command's `input` shape.
 * @see {@link CreateDataLakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class CreateDataLakeCommand extends $Command<
  CreateDataLakeCommandInput,
  CreateDataLakeCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: CreateDataLakeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataLakeCommandInput, CreateDataLakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataLakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDataLakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateDataLakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataLakeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataLakeCommandOutput> {
    return de_CreateDataLakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
