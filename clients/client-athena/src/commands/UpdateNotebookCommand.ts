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
import { UpdateNotebookInput, UpdateNotebookOutput } from "../models/models_0";
import { de_UpdateNotebookCommand, se_UpdateNotebookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandInput extends UpdateNotebookInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandOutput extends UpdateNotebookOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the contents of a Spark notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // UpdateNotebookInput
 *   NotebookId: "STRING_VALUE", // required
 *   Payload: "STRING_VALUE", // required
 *   Type: "IPYNB", // required
 *   SessionId: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateNotebookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotebookCommandInput - {@link UpdateNotebookCommandInput}
 * @returns {@link UpdateNotebookCommandOutput}
 * @see {@link UpdateNotebookCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class UpdateNotebookCommand extends $Command<
  UpdateNotebookCommandInput,
  UpdateNotebookCommandOutput,
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
  constructor(readonly input: UpdateNotebookCommandInput) {
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
  ): Handler<UpdateNotebookCommandInput, UpdateNotebookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNotebookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdateNotebookCommand";
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
  private serialize(input: UpdateNotebookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNotebookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNotebookCommandOutput> {
    return de_UpdateNotebookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
