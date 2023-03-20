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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateNamedQueryInput, UpdateNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNamedQueryCommand,
  serializeAws_json1_1UpdateNamedQueryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateNamedQueryCommand}.
 */
export interface UpdateNamedQueryCommandInput extends UpdateNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link UpdateNamedQueryCommand}.
 */
export interface UpdateNamedQueryCommandOutput extends UpdateNamedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a <a>NamedQuery</a> object. The database or workgroup cannot be
 *             updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateNamedQueryCommandInput - {@link UpdateNamedQueryCommandInput}
 * @returns {@link UpdateNamedQueryCommandOutput}
 * @see {@link UpdateNamedQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 *
 */
export class UpdateNamedQueryCommand extends $Command<
  UpdateNamedQueryCommandInput,
  UpdateNamedQueryCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: UpdateNamedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNamedQueryCommandInput, UpdateNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNamedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdateNamedQueryCommand";
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
  private serialize(input: UpdateNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNamedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNamedQueryCommandOutput> {
    return deserializeAws_json1_1UpdateNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
