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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import {
  CreateUploadUrlRequest,
  CreateUploadUrlResponse,
  CreateUploadUrlResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateUploadUrlCommand, se_CreateUploadUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateUploadUrlCommand}.
 */
export interface CreateUploadUrlCommandInput extends CreateUploadUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateUploadUrlCommand}.
 */
export interface CreateUploadUrlCommandOutput extends CreateUploadUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates a pre-signed URL and request headers used to upload a code resource.</p>
 *          <p>You can upload your code resource to the URL and add the request headers using any HTTP
 *       client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, CreateUploadUrlCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, CreateUploadUrlCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // CreateUploadUrlRequest
 *   scanName: "STRING_VALUE", // required
 * };
 * const command = new CreateUploadUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateUploadUrlResponse
 * //   s3Url: "STRING_VALUE", // required
 * //   requestHeaders: { // RequestHeaderMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   codeArtifactId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateUploadUrlCommandInput - {@link CreateUploadUrlCommandInput}
 * @returns {@link CreateUploadUrlCommandOutput}
 * @see {@link CreateUploadUrlCommandInput} for command's `input` shape.
 * @see {@link CreateUploadUrlCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class CreateUploadUrlCommand extends $Command<
  CreateUploadUrlCommandInput,
  CreateUploadUrlCommandOutput,
  CodeGuruSecurityClientResolvedConfig
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
  constructor(readonly input: CreateUploadUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruSecurityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUploadUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "CreateUploadUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateUploadUrlResponseFilterSensitiveLog,
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
  private serialize(input: CreateUploadUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateUploadUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUploadUrlCommandOutput> {
    return de_CreateUploadUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
