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

import { GetNamespaceRequest, GetNamespaceResponse, GetNamespaceResponseFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1GetNamespaceCommand,
  serializeAws_json1_1GetNamespaceCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 *
 * The input for {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandInput extends GetNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandOutput extends GetNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a namespace in Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetNamespaceCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetNamespaceCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetNamespaceCommandInput - {@link GetNamespaceCommandInput}
 * @returns {@link GetNamespaceCommandOutput}
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 *
 */
export class GetNamespaceCommand extends $Command<
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: GetNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNamespaceCommandInput, GetNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetNamespaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetNamespaceResponseFilterSensitiveLog,
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
  private serialize(input: GetNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNamespaceCommandOutput> {
    return deserializeAws_json1_1GetNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
