// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateDatalakeRequest, CreateDatalakeResponse } from "../models/models_0";
import { de_CreateDatalakeCommand, se_CreateDatalakeCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link CreateDatalakeCommand}.
 */
export interface CreateDatalakeCommandInput extends CreateDatalakeRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatalakeCommand}.
 */
export interface CreateDatalakeCommandOutput extends CreateDatalakeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You
 *          can enable Security Lake in Amazon Web Services Regions with customized settings before enabling
 *          log collection in Regions. You can either use the <code>enableAll</code> parameter to
 *          specify all Regions or specify the Regions where you want to enable Security Lake. To specify
 *          particular Regions, use the <code>Regions</code> parameter and then configure these Regions
 *          using the <code>configurations</code> parameter. If you have already enabled Security Lake in a
 *          Region when you call this command, the command will update the Region if you provide new
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
 * import { SecurityLakeClient, CreateDatalakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDatalakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateDatalakeRequest
 *   regions: [ // RegionSet
 *     "STRING_VALUE",
 *   ],
 *   configurations: { // LakeConfigurationRequestMap
 *     "<keys>": { // LakeConfigurationRequest
 *       encryptionKey: "STRING_VALUE",
 *       retentionSettings: [ // RetentionSettingList
 *         { // RetentionSetting
 *           storageClass: "STRING_VALUE",
 *           retentionPeriod: Number("int"),
 *         },
 *       ],
 *       tagsMap: { // TagsMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       replicationDestinationRegions: [
 *         "STRING_VALUE",
 *       ],
 *       replicationRoleArn: "STRING_VALUE",
 *     },
 *   },
 *   enableAll: true || false,
 *   metaStoreManagerRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateDatalakeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDatalakeCommandInput - {@link CreateDatalakeCommandInput}
 * @returns {@link CreateDatalakeCommandOutput}
 * @see {@link CreateDatalakeCommandInput} for command's `input` shape.
 * @see {@link CreateDatalakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class CreateDatalakeCommand extends $Command<
  CreateDatalakeCommandInput,
  CreateDatalakeCommandOutput,
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
  constructor(readonly input: CreateDatalakeCommandInput) {
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
  ): Handler<CreateDatalakeCommandInput, CreateDatalakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatalakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDatalakeCommand";
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
  private serialize(input: CreateDatalakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDatalakeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatalakeCommandOutput> {
    return de_CreateDatalakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
