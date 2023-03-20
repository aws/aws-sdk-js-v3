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

import { GetResourceMetadataRequest, GetResourceMetadataResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  deserializeAws_json1_1GetResourceMetadataCommand,
  serializeAws_json1_1GetResourceMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetResourceMetadataCommand}.
 */
export interface GetResourceMetadataCommandInput extends GetResourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceMetadataCommand}.
 */
export interface GetResourceMetadataCommandOutput extends GetResourceMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the metadata for different features. For example, the metadata might indicate
 *             that a feature is turned on or off on a specific DB instance.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetadataCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetadataCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetResourceMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetResourceMetadataCommandInput - {@link GetResourceMetadataCommandInput}
 * @returns {@link GetResourceMetadataCommandOutput}
 * @see {@link GetResourceMetadataCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetadataCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 *
 */
export class GetResourceMetadataCommand extends $Command<
  GetResourceMetadataCommandInput,
  GetResourceMetadataCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: GetResourceMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceMetadataCommandInput, GetResourceMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetResourceMetadataCommand";
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
  private serialize(input: GetResourceMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetadataCommandOutput> {
    return deserializeAws_json1_1GetResourceMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
