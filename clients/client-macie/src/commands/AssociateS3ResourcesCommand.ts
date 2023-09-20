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
import { AssociateS3ResourcesRequest, AssociateS3ResourcesResult } from "../models/models_0";
import { de_AssociateS3ResourcesCommand, se_AssociateS3ResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateS3ResourcesCommand}.
 */
export interface AssociateS3ResourcesCommandInput extends AssociateS3ResourcesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateS3ResourcesCommand}.
 */
export interface AssociateS3ResourcesCommandOutput extends AssociateS3ResourcesResult, __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Associates specified S3 resources with Amazon Macie Classic for
 *       monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates
 *       specified S3 resources with Macie Classic for the current Macie Classic administrator account.
 *       If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie
 *       Classic for the specified member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = { // AssociateS3ResourcesRequest
 *   memberAccountId: "STRING_VALUE",
 *   s3Resources: [ // S3ResourcesClassification // required
 *     { // S3ResourceClassification
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *       classificationType: { // ClassificationType
 *         oneTime: "FULL" || "NONE", // required
 *         continuous: "FULL", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new AssociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateS3ResourcesResult
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
 * @param AssociateS3ResourcesCommandInput - {@link AssociateS3ResourcesCommandInput}
 * @returns {@link AssociateS3ResourcesCommandOutput}
 * @see {@link AssociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link AssociateS3ResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>(Discontinued) The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account quotas. The error code describes the quota exceeded.</p>
 *
 * @throws {@link MacieServiceException}
 * <p>Base exception class for all service exceptions from Macie service.</p>
 *
 */
export class AssociateS3ResourcesCommand extends $Command<
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput,
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
  constructor(readonly input: AssociateS3ResourcesCommandInput) {
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
  ): Handler<AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "AssociateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MacieService",
        operation: "AssociateS3Resources",
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
  private serialize(input: AssociateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateS3ResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateS3ResourcesCommandOutput> {
    return de_AssociateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
