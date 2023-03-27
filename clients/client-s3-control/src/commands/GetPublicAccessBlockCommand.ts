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

import { GetPublicAccessBlockOutput, GetPublicAccessBlockRequest } from "../models/models_0";
import {
  deserializeAws_restXmlGetPublicAccessBlockCommand,
  serializeAws_restXmlGetPublicAccessBlockCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 *
 * The input for {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandInput extends GetPublicAccessBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandOutput extends GetPublicAccessBlockOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
 *             public access</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetPublicAccessBlockCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetPublicAccessBlockCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetPublicAccessBlockRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPublicAccessBlockCommandInput - {@link GetPublicAccessBlockCommandInput}
 * @returns {@link GetPublicAccessBlockCommandOutput}
 * @see {@link GetPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link GetPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link NoSuchPublicAccessBlockConfiguration} (client fault)
 *  <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *          against an account that doesn't have a <code>PublicAccessBlockConfiguration</code>
 *          set.</p>
 *
 *
 */
export class GetPublicAccessBlockCommand extends $Command<
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetPublicAccessBlockCommandInput) {
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
  ): Handler<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPublicAccessBlockCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetPublicAccessBlockCommand";
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
  private serialize(input: GetPublicAccessBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetPublicAccessBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicAccessBlockCommandOutput> {
    return deserializeAws_restXmlGetPublicAccessBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
