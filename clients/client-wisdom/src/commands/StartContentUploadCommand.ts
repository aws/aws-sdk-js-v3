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

import {
  StartContentUploadRequest,
  StartContentUploadResponse,
  StartContentUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartContentUploadCommand, se_StartContentUploadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandInput extends StartContentUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandOutput extends StartContentUploadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get a URL to upload content to a knowledge base. To upload content, first make a PUT
 *       request to the returned URL with your file, making sure to include the required headers. Then
 *       use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a
 *       knowledge base of type CUSTOM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, StartContentUploadCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, StartContentUploadCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // StartContentUploadRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE", // required
 * };
 * const command = new StartContentUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartContentUploadResponse
 * //   uploadId: "STRING_VALUE", // required
 * //   url: "STRING_VALUE", // required
 * //   urlExpiry: new Date("TIMESTAMP"), // required
 * //   headersToInclude: { // Headers // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartContentUploadCommandInput - {@link StartContentUploadCommandInput}
 * @returns {@link StartContentUploadCommandOutput}
 * @see {@link StartContentUploadCommandInput} for command's `input` shape.
 * @see {@link StartContentUploadCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class StartContentUploadCommand extends $Command<
  StartContentUploadCommandInput,
  StartContentUploadCommandOutput,
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
  constructor(readonly input: StartContentUploadCommandInput) {
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
  ): Handler<StartContentUploadCommandInput, StartContentUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartContentUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "StartContentUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StartContentUploadResponseFilterSensitiveLog,
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
  private serialize(input: StartContentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartContentUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContentUploadCommandOutput> {
    return de_StartContentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
