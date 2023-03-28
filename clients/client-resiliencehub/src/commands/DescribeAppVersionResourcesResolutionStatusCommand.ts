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
  DescribeAppVersionResourcesResolutionStatusRequest,
  DescribeAppVersionResourcesResolutionStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand,
  serializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 *
 * The input for {@link DescribeAppVersionResourcesResolutionStatusCommand}.
 */
export interface DescribeAppVersionResourcesResolutionStatusCommandInput
  extends DescribeAppVersionResourcesResolutionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionResourcesResolutionStatusCommand}.
 */
export interface DescribeAppVersionResourcesResolutionStatusCommandOutput
  extends DescribeAppVersionResourcesResolutionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the resolution status for the specified resolution identifier for an application
 *       version. If <code>resolutionId</code> is not specified, the current resolution status is
 *       returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionResourcesResolutionStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionResourcesResolutionStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionResourcesResolutionStatusRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 * };
 * const command = new DescribeAppVersionResourcesResolutionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAppVersionResourcesResolutionStatusCommandInput - {@link DescribeAppVersionResourcesResolutionStatusCommandInput}
 * @returns {@link DescribeAppVersionResourcesResolutionStatusCommandOutput}
 * @see {@link DescribeAppVersionResourcesResolutionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionResourcesResolutionStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 *
 */
export class DescribeAppVersionResourcesResolutionStatusCommand extends $Command<
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: DescribeAppVersionResourcesResolutionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAppVersionResourcesResolutionStatusCommandInput,
    DescribeAppVersionResourcesResolutionStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAppVersionResourcesResolutionStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeAppVersionResourcesResolutionStatusCommand";
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
  private serialize(
    input: DescribeAppVersionResourcesResolutionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> {
    return deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
