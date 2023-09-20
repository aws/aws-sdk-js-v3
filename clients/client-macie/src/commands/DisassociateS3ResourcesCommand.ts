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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateS3ResourcesRequest, DisassociateS3ResourcesResult } from "../models/models_0";
import { de_DisassociateS3ResourcesCommand, se_DisassociateS3ResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateS3ResourcesCommand}.
 */
export interface DisassociateS3ResourcesCommandInput extends DisassociateS3ResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateS3ResourcesCommand}.
 */
export interface DisassociateS3ResourcesCommandOutput extends DisassociateS3ResourcesResult, __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie
 *       Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from
 *       Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is
 *       specified, the action removes specified S3 resources from Macie Classic for the specified
 *       member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = { // DisassociateS3ResourcesRequest
 *   memberAccountId: "STRING_VALUE",
 *   associatedS3Resources: [ // S3Resources // required
 *     { // S3Resource
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DisassociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateS3ResourcesResult
 * //   failedS3Resources: [ // FailedS3Resources
 * //     { // FailedS3Resource
 * //       failedItem: { // S3Resource
 * //         bucketName: "STRING_VALUE", // required
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateS3ResourcesCommandInput - {@link DisassociateS3ResourcesCommandInput}
 * @returns {@link DisassociateS3ResourcesCommandOutput}
 * @see {@link DisassociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link DisassociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>(Discontinued) You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>(Discontinued) Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>(Discontinued) The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link MacieServiceException}
 * <p>Base exception class for all service exceptions from Macie service.</p>
 *
 */
export class DisassociateS3ResourcesCommand extends $Command<
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
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
  constructor(readonly input: DisassociateS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "DisassociateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MacieService",
        operation: "DisassociateS3Resources",
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
  private serialize(input: DisassociateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateS3ResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateS3ResourcesCommandOutput> {
    return de_DisassociateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
