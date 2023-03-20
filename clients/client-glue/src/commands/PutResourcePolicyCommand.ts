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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_2";
import {
  deserializeAws_json1_1PutResourcePolicyCommand,
  serializeAws_json1_1PutResourcePolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the Data Catalog resource policy for access control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConditionCheckFailureException} (client fault)
 *  <p>A specified condition was not satisfied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class PutResourcePolicyCommand extends $Command<
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: PutResourcePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutResourcePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "PutResourcePolicyCommand";
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
  private serialize(input: PutResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutResourcePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourcePolicyCommandOutput> {
    return deserializeAws_json1_1PutResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
