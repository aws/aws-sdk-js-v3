import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeBuildInput, DescribeBuildOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBuildCommand,
  serializeAws_json1_1DescribeBuildCommand,
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

export type DescribeBuildCommandInput = DescribeBuildInput;
export type DescribeBuildCommandOutput = DescribeBuildOutput & __MetadataBearer;

/**
 * <p>Retrieves properties for a custom game build. To request a build resource, specify a
 *             build ID. If successful, an object containing the build properties is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">
 *             Upload a Custom Server Build</a>
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
export class DescribeBuildCommand extends $Command<
  DescribeBuildCommandInput,
  DescribeBuildCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBuildCommandInput) {
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
  ): Handler<DescribeBuildCommandInput, DescribeBuildCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeBuildCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBuildInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBuildOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBuildCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBuildCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBuildCommandOutput> {
    return deserializeAws_json1_1DescribeBuildCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
