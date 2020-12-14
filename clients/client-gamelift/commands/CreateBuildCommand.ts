import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateBuildInput, CreateBuildOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBuildCommand,
  serializeAws_json1_1CreateBuildCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateBuildCommandInput = CreateBuildInput;
export type CreateBuildCommandOutput = CreateBuildOutput & __MetadataBearer;

/**
 * <p>Creates a new Amazon GameLift build resource for your game server binary files. Game server
 *             binaries must be combined into a zip file for use with Amazon GameLift. </p>
 *         <important>
 *             <p>When setting up a new game build for GameLift, we recommend using the AWS CLI
 *                 command <b>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a>
 *                </b>. This helper command combines two tasks: (1) it
 *                 uploads your build files from a file directory to a GameLift Amazon S3 location, and (2)
 *                 it creates a new build resource. </p>
 *         </important>
 *         <p>The <code>CreateBuild</code> operation can used in the following scenarios:</p>
 *         <ul>
 *             <li>
 *                 <p>To create a new game build with build files that are in an S3 location under
 *                     an AWS account that you control. To use this option, you must first give Amazon GameLift
 *                     access to the S3 bucket. With permissions in place, call
 *                         <code>CreateBuild</code> and specify a build name, operating system, and the
 *                     S3 storage location of your game build.</p>
 *             </li>
 *             <li>
 *                 <p>To directly upload your build files to a GameLift S3 location. To use this
 *                     option, first call <code>CreateBuild</code> and specify a build name and
 *                     operating system. This operation creates a new build resource and also returns an
 *                     S3 location with temporary access credentials. Use the credentials to manually
 *                     upload your build files to the specified S3 location. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer
 *                         Guide</i>. Build files can be uploaded to the GameLift S3 location
 *                     once only; that can't be updated. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, this operation creates a new build resource with a unique build ID and
 *             places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code>
 *             status before you can create fleets with it.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
 *                 Game</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListBuilds</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBuild</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateBuildCommand extends $Command<
  CreateBuildCommandInput,
  CreateBuildCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateBuildCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBuildInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBuildOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBuildCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBuildCommandOutput> {
    return deserializeAws_json1_1CreateBuildCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
