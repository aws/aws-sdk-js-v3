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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { GetFeatureRequest, GetFeatureResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFeatureCommand,
  serializeAws_restJson1GetFeatureCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandInput extends GetFeatureRequest {}
/**
 * @public
 *
 * The output of {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandOutput extends GetFeatureResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details about one feature. You must already know the feature name. To
 *       retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new GetFeatureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFeatureCommandInput - {@link GetFeatureCommandInput}
 * @returns {@link GetFeatureCommandOutput}
 * @see {@link GetFeatureCommandInput} for command's `input` shape.
 * @see {@link GetFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 *
 */
export class GetFeatureCommand extends $Command<
  GetFeatureCommandInput,
  GetFeatureCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: GetFeatureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFeatureCommandInput, GetFeatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFeatureCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "GetFeatureCommand";
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
  private serialize(input: GetFeatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFeatureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFeatureCommandOutput> {
    return deserializeAws_restJson1GetFeatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
