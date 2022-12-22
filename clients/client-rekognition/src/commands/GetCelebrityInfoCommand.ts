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

import {
  GetCelebrityInfoRequest,
  GetCelebrityInfoRequestFilterSensitiveLog,
  GetCelebrityInfoResponse,
  GetCelebrityInfoResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCelebrityInfoCommand,
  serializeAws_json1_1GetCelebrityInfoCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface GetCelebrityInfoCommandInput extends GetCelebrityInfoRequest {}
export interface GetCelebrityInfoCommandOutput extends GetCelebrityInfoResponse, __MetadataBearer {}

/**
 * <p>Gets the name and additional information about a celebrity based on their Amazon Rekognition ID.
 *       The additional information is returned as an array of URLs. If there is no additional
 *       information about the celebrity, this list is empty.</p>
 *          <p>For more information, see Getting information about a celebrity in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:GetCelebrityInfo</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetCelebrityInfoCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetCelebrityInfoCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetCelebrityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCelebrityInfoCommandInput} for command's `input` shape.
 * @see {@link GetCelebrityInfoCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetCelebrityInfoCommand extends $Command<
  GetCelebrityInfoCommandInput,
  GetCelebrityInfoCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: GetCelebrityInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCelebrityInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetCelebrityInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCelebrityInfoRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCelebrityInfoResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCelebrityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCelebrityInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCelebrityInfoCommandOutput> {
    return deserializeAws_json1_1GetCelebrityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
