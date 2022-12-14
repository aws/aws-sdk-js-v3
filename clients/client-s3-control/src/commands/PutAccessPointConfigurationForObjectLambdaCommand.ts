// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import {
  PutAccessPointConfigurationForObjectLambdaRequest,
  PutAccessPointConfigurationForObjectLambdaRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand,
  serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface PutAccessPointConfigurationForObjectLambdaCommandInput
  extends PutAccessPointConfigurationForObjectLambdaRequest {}
export interface PutAccessPointConfigurationForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * <p>Replaces configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to
 *             <code>PutAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class PutAccessPointConfigurationForObjectLambdaCommand extends $Command<
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutAccessPointConfigurationForObjectLambdaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutAccessPointConfigurationForObjectLambdaCommandInput,
    PutAccessPointConfigurationForObjectLambdaCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutAccessPointConfigurationForObjectLambdaCommand.getEndpointParameterInstructions()
      )
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutAccessPointConfigurationForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccessPointConfigurationForObjectLambdaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAccessPointConfigurationForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> {
    return deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
