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

import {
  UpdateContentRequest,
  UpdateContentResponse,
  UpdateContentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateContentCommand, se_UpdateContentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContentCommand}.
 */
export interface UpdateContentCommandInput extends UpdateContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContentCommand}.
 */
export interface UpdateContentCommandOutput extends UpdateContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates information about the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, UpdateContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, UpdateContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // UpdateContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE",
 *   title: "STRING_VALUE",
 *   overrideLinkOutUri: "STRING_VALUE",
 *   removeOverrideLinkOutUri: true || false,
 *   metadata: { // ContentMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   uploadId: "STRING_VALUE",
 * };
 * const command = new UpdateContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContentResponse
 * //   content: { // ContentData
 * //     contentArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     metadata: { // ContentMetadata // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     linkOutUri: "STRING_VALUE",
 * //     url: "STRING_VALUE", // required
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateContentCommandInput - {@link UpdateContentCommandInput}
 * @returns {@link UpdateContentCommandOutput}
 * @see {@link UpdateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContentCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class UpdateContentCommand extends $Command<
  UpdateContentCommandInput,
  UpdateContentCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: UpdateContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContentCommandInput, UpdateContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateContentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "UpdateContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateContentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "UpdateContent",
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
  private serialize(input: UpdateContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContentCommandOutput> {
    return de_UpdateContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
