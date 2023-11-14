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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateTemplateSyncConfigInput, UpdateTemplateSyncConfigOutput } from "../models/models_0";
import { de_UpdateTemplateSyncConfigCommand, se_UpdateTemplateSyncConfigCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateSyncConfigCommand}.
 */
export interface UpdateTemplateSyncConfigCommandInput extends UpdateTemplateSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateSyncConfigCommand}.
 */
export interface UpdateTemplateSyncConfigCommandOutput extends UpdateTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details
 *    (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For
 *    more information, see <a>CreateRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateTemplateSyncConfigInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   branch: "STRING_VALUE", // required
 *   subdirectory: "STRING_VALUE",
 * };
 * const command = new UpdateTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplateSyncConfigOutput
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
 * @param UpdateTemplateSyncConfigCommandInput - {@link UpdateTemplateSyncConfigCommandInput}
 * @returns {@link UpdateTemplateSyncConfigCommandOutput}
 * @see {@link UpdateTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateSyncConfigCommandOutput} for command's `response` shape.
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
export class UpdateTemplateSyncConfigCommand extends $Command<
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
  ProtonClientResolvedConfig
> {
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
  constructor(readonly input: UpdateTemplateSyncConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTemplateSyncConfigCommandInput, UpdateTemplateSyncConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTemplateSyncConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateTemplateSyncConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "UpdateTemplateSyncConfig",
      },
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
  private serialize(input: UpdateTemplateSyncConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTemplateSyncConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTemplateSyncConfigCommandOutput> {
    return de_UpdateTemplateSyncConfigCommand(output, context);
  }
}
