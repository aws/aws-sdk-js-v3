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

import { DeleteTemplateSyncConfigInput, DeleteTemplateSyncConfigOutput } from "../models/models_0";
import { de_DeleteTemplateSyncConfigCommand, se_DeleteTemplateSyncConfigCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTemplateSyncConfigCommand}.
 */
export interface DeleteTemplateSyncConfigCommandInput extends DeleteTemplateSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateSyncConfigCommand}.
 */
export interface DeleteTemplateSyncConfigCommandOutput extends DeleteTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * @public
 * <p>Delete a template sync configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteTemplateSyncConfigInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTemplateSyncConfigOutput
 * //   templateSyncConfig: { // TemplateSyncConfig
 * //     templateName: "STRING_VALUE", // required
 * //     templateType: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     subdirectory: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTemplateSyncConfigCommandInput - {@link DeleteTemplateSyncConfigCommandInput}
 * @returns {@link DeleteTemplateSyncConfigCommandOutput}
 * @see {@link DeleteTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class DeleteTemplateSyncConfigCommand extends $Command<
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: DeleteTemplateSyncConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTemplateSyncConfigCommandInput, DeleteTemplateSyncConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTemplateSyncConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "DeleteTemplateSyncConfigCommand";
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
  private serialize(input: DeleteTemplateSyncConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTemplateSyncConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTemplateSyncConfigCommandOutput> {
    return de_DeleteTemplateSyncConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
