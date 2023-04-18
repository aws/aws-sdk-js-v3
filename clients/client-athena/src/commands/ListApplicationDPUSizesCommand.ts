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
import { ListApplicationDPUSizesInput, ListApplicationDPUSizesOutput } from "../models/models_0";
import { de_ListApplicationDPUSizesCommand, se_ListApplicationDPUSizesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListApplicationDPUSizesCommand}.
 */
export interface ListApplicationDPUSizesCommandInput extends ListApplicationDPUSizesInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationDPUSizesCommand}.
 */
export interface ListApplicationDPUSizesCommandOutput extends ListApplicationDPUSizesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the supported DPU sizes for the supported application runtimes (for example,
 *                 <code>Athena notebook version 1</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListApplicationDPUSizesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListApplicationDPUSizesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListApplicationDPUSizesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationDPUSizesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListApplicationDPUSizesCommandInput - {@link ListApplicationDPUSizesCommandInput}
 * @returns {@link ListApplicationDPUSizesCommandOutput}
 * @see {@link ListApplicationDPUSizesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDPUSizesCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 *
 */
export class ListApplicationDPUSizesCommand extends $Command<
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
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
  constructor(readonly input: ListApplicationDPUSizesCommandInput) {
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
  ): Handler<ListApplicationDPUSizesCommandInput, ListApplicationDPUSizesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationDPUSizesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListApplicationDPUSizesCommand";
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
  private serialize(input: ListApplicationDPUSizesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationDPUSizesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationDPUSizesCommandOutput> {
    return de_ListApplicationDPUSizesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
