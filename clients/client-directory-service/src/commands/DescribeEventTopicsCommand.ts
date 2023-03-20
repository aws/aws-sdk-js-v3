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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventTopicsCommand,
  serializeAws_json1_1DescribeEventTopicsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeEventTopicsCommand}.
 */
export interface DescribeEventTopicsCommandInput extends DescribeEventTopicsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTopicsCommand}.
 */
export interface DescribeEventTopicsCommandOutput extends DescribeEventTopicsResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains information about which Amazon SNS topics receive status messages from the specified
 *       directory.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request
 *       describes all of the associations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeEventTopicsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeEventTopicsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeEventTopicsCommandInput - {@link DescribeEventTopicsCommandInput}
 * @returns {@link DescribeEventTopicsCommandOutput}
 * @see {@link DescribeEventTopicsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTopicsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 *
 */
export class DescribeEventTopicsCommand extends $Command<
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeEventTopicsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventTopicsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeEventTopicsCommand";
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
  private serialize(input: DescribeEventTopicsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventTopicsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventTopicsCommandOutput> {
    return deserializeAws_json1_1DescribeEventTopicsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
