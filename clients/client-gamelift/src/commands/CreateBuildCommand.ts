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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateBuildInput, CreateBuildOutput, CreateBuildOutputFilterSensitiveLog } from "../models/models_0";
import { de_CreateBuildCommand, se_CreateBuildCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBuildCommand}.
 */
export interface CreateBuildCommandInput extends CreateBuildInput {}
/**
 * @public
 *
 * The output of {@link CreateBuildCommand}.
 */
export interface CreateBuildCommandOutput extends CreateBuildOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game
 *             server binaries into a zip file for use with Amazon GameLift. </p>
 *          <important>
 *             <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a>
 *                </b>. This helper command combines two tasks: (1) it
 *                 uploads your build files from a file directory to an Amazon GameLift Amazon S3 location, and (2)
 *                 it creates a new build resource.</p>
 *          </important>
 *          <p>You can use the <code>CreateBuild</code> operation in the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Create a new game build with build files that are in an Amazon S3 location under an
 *                     Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to
 *                     the Amazon S3 bucket. With permissions in place, specify a build name, operating
 *                     system, and the Amazon S3 storage location of your game build.</p>
 *             </li>
 *             <li>
 *                <p>Upload your build files to a Amazon GameLift Amazon S3 location. To use this option,
 *                     specify a build name and operating system. This operation creates a new build
 *                     resource and also returns an Amazon S3 location with temporary access credentials.
 *                     Use the credentials to manually upload your build files to the specified Amazon S3
 *                     location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in
 *                     the <i>Amazon S3 Developer Guide</i>. After you upload build files to
 *                     the Amazon GameLift Amazon S3 location, you can't update them. </p>
 *             </li>
 *          </ul>
 *          <p>If successful, this operation creates a new build resource with a unique build ID and
 *             places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code>
 *             status before you can create fleets with it.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
 *                 Game</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateBuildInput
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ServerSdkVersion: "STRING_VALUE",
 * };
 * const command = new CreateBuildCommand(input);
 * const response = await client.send(command);
 * // { // CreateBuildOutput
 * //   Build: { // Build
 * //     BuildId: "STRING_VALUE",
 * //     BuildArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "INITIALIZED" || "READY" || "FAILED",
 * //     SizeOnDisk: Number("long"),
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ServerSdkVersion: "STRING_VALUE",
 * //   },
 * //   UploadCredentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * //   StorageLocation: { // S3Location
 * //     Bucket: "STRING_VALUE",
 * //     Key: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     ObjectVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBuildCommandInput - {@link CreateBuildCommandInput}
 * @returns {@link CreateBuildCommandOutput}
 * @see {@link CreateBuildCommandInput} for command's `input` shape.
 * @see {@link CreateBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class CreateBuildCommand extends $Command<
  CreateBuildCommandInput,
  CreateBuildCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: CreateBuildCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBuildCommandInput, CreateBuildCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBuildCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateBuildCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateBuildOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "CreateBuild",
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
  private serialize(input: CreateBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBuildCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBuildCommandOutput> {
    return de_CreateBuildCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
