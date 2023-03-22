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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListDecoderManifestSignalsRequest,
  ListDecoderManifestSignalsRequestFilterSensitiveLog,
  ListDecoderManifestSignalsResponse,
  ListDecoderManifestSignalsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListDecoderManifestSignalsCommand,
  serializeAws_json1_0ListDecoderManifestSignalsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ListDecoderManifestSignalsCommand}.
 */
export interface ListDecoderManifestSignalsCommandInput extends ListDecoderManifestSignalsRequest {}
/**
 * @public
 *
 * The output of {@link ListDecoderManifestSignalsCommand}.
 */
export interface ListDecoderManifestSignalsCommandOutput extends ListDecoderManifestSignalsResponse, __MetadataBearer {}

/**
 * @public
 * <p> A list of information about signal decoders specified in a decoder manifest. </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestSignalsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestSignalsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new ListDecoderManifestSignalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListDecoderManifestSignalsCommandInput - {@link ListDecoderManifestSignalsCommandInput}
 * @returns {@link ListDecoderManifestSignalsCommandOutput}
 * @see {@link ListDecoderManifestSignalsCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestSignalsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 *
 */
export class ListDecoderManifestSignalsCommand extends $Command<
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: ListDecoderManifestSignalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDecoderManifestSignalsCommandInput, ListDecoderManifestSignalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDecoderManifestSignalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListDecoderManifestSignalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDecoderManifestSignalsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDecoderManifestSignalsResponseFilterSensitiveLog,
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
  private serialize(input: ListDecoderManifestSignalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListDecoderManifestSignalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDecoderManifestSignalsCommandOutput> {
    return deserializeAws_json1_0ListDecoderManifestSignalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
