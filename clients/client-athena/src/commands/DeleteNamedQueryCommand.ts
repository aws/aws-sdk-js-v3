// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeleteNamedQueryInput, DeleteNamedQueryOutput } from "../models/models_0";
import { de_DeleteNamedQueryCommand, se_DeleteNamedQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNamedQueryCommand}.
 */
export interface DeleteNamedQueryCommandInput extends DeleteNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link DeleteNamedQueryCommand}.
 */
export interface DeleteNamedQueryCommandOutput extends DeleteNamedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the named query if you have access to the workgroup in which the query was
 *             saved.</p>
 *          <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // DeleteNamedQueryInput
 *   NamedQueryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNamedQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNamedQueryCommandInput - {@link DeleteNamedQueryCommandInput}
 * @returns {@link DeleteNamedQueryCommandOutput}
 * @see {@link DeleteNamedQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteNamedQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class DeleteNamedQueryCommand extends $Command<
  DeleteNamedQueryCommandInput,
  DeleteNamedQueryCommandOutput,
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
  constructor(readonly input: DeleteNamedQueryCommandInput) {
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
  ): Handler<DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNamedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "DeleteNamedQueryCommand";
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
  private serialize(input: DeleteNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNamedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNamedQueryCommandOutput> {
    return de_DeleteNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
