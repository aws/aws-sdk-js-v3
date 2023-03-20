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

import { CreateWorkgroupRequest, CreateWorkgroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkgroupCommand,
  serializeAws_json1_1CreateWorkgroupCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 *
 * The input for {@link CreateWorkgroupCommand}.
 */
export interface CreateWorkgroupCommandInput extends CreateWorkgroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkgroupCommand}.
 */
export interface CreateWorkgroupCommandOutput extends CreateWorkgroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an workgroup in Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateWorkgroupCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateWorkgroupCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new CreateWorkgroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateWorkgroupCommandInput - {@link CreateWorkgroupCommandInput}
 * @returns {@link CreateWorkgroupCommandOutput}
 * @see {@link CreateWorkgroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkgroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InsufficientCapacityException} (client fault)
 *  <p>There is an insufficient capacity to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request exceeded the number of tags allowed for a resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 *
 */
export class CreateWorkgroupCommand extends $Command<
  CreateWorkgroupCommandInput,
  CreateWorkgroupCommandOutput,
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
  constructor(readonly input: CreateWorkgroupCommandInput) {
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
  ): Handler<CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkgroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "CreateWorkgroupCommand";
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
  private serialize(input: CreateWorkgroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkgroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkgroupCommandOutput> {
    return deserializeAws_json1_1CreateWorkgroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
