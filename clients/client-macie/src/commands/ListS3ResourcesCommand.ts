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
import { ListS3ResourcesRequest, ListS3ResourcesResult } from "../models/models_0";
import { de_ListS3ResourcesCommand, se_ListS3ResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListS3ResourcesCommand}.
 */
export interface ListS3ResourcesCommandInput extends ListS3ResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListS3ResourcesCommand}.
 */
export interface ListS3ResourcesCommandOutput extends ListS3ResourcesResult, __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If
 *       <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie
 *       Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified,
 *       the action lists the S3 resources associated with Macie Classic for the specified member
 *       account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = { // ListS3ResourcesRequest
 *   memberAccountId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListS3ResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListS3ResourcesResult
 * //   s3Resources: [ // S3ResourcesClassification
 * //     { // S3ResourceClassification
 * //       bucketName: "STRING_VALUE", // required
 * //       prefix: "STRING_VALUE",
 * //       classificationType: { // ClassificationType
 * //         oneTime: "FULL" || "NONE", // required
 * //         continuous: "FULL", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListS3ResourcesCommandInput - {@link ListS3ResourcesCommandInput}
 * @returns {@link ListS3ResourcesCommandOutput}
 * @see {@link ListS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link ListS3ResourcesCommandOutput} for command's `response` shape.
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
export class ListS3ResourcesCommand extends $Command<
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
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
  constructor(readonly input: ListS3ResourcesCommandInput) {
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
  ): Handler<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "ListS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MacieService",
        operation: "ListS3Resources",
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
  private serialize(input: ListS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListS3ResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListS3ResourcesCommandOutput> {
    return de_ListS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
