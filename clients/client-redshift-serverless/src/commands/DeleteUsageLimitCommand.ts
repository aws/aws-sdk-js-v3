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

import { DeleteUsageLimitRequest, DeleteUsageLimitResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteUsageLimitCommand,
  serializeAws_json1_1DeleteUsageLimitCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 *
 * The input for {@link DeleteUsageLimitCommand}.
 */
export interface DeleteUsageLimitCommandInput extends DeleteUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsageLimitCommand}.
 */
export interface DeleteUsageLimitCommandOutput extends DeleteUsageLimitResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a usage limit from Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, DeleteUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, DeleteUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // DeleteUsageLimitRequest
 *   usageLimitId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteUsageLimitCommandInput - {@link DeleteUsageLimitCommandInput}
 * @returns {@link DeleteUsageLimitCommandOutput}
 * @see {@link DeleteUsageLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
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
export class DeleteUsageLimitCommand extends $Command<
  DeleteUsageLimitCommandInput,
  DeleteUsageLimitCommandOutput,
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
  constructor(readonly input: DeleteUsageLimitCommandInput) {
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
  ): Handler<DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteUsageLimitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "DeleteUsageLimitCommand";
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
  private serialize(input: DeleteUsageLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteUsageLimitCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUsageLimitCommandOutput> {
    return deserializeAws_json1_1DeleteUsageLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
