// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { UpdateS3ResourcesRequest, UpdateS3ResourcesResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateS3ResourcesCommand,
  serializeAws_json1_1UpdateS3ResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateS3ResourcesCommand}.
 */
export interface UpdateS3ResourcesCommandInput extends UpdateS3ResourcesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateS3ResourcesCommand}.
 */
export interface UpdateS3ResourcesCommandOutput extends UpdateS3ResourcesResult, __MetadataBearer {}

/**
 * @public
 * <p>(Discontinued) Updates the classification types for the specified S3 resources. If
 *       <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3
 *       resources associated with Amazon Macie Classic for the current Macie Classic administrator
 *       account. If <code>memberAccountId</code> is specified, the action updates the classification types of the
 *       S3 resources associated with Macie Classic for the specified member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, UpdateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, UpdateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const input = {
 *   memberAccountId: "STRING_VALUE",
 *   s3ResourcesUpdate: [ // required
 *     {
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *       classificationTypeUpdate: {
 *         oneTime: "STRING_VALUE",
 *         continuous: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateS3ResourcesCommandInput - {@link UpdateS3ResourcesCommandInput}
 * @returns {@link UpdateS3ResourcesCommandOutput}
 * @see {@link UpdateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateS3ResourcesCommandOutput} for command's `response` shape.
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
 *
 */
export class UpdateS3ResourcesCommand extends $Command<
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput,
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
  constructor(readonly input: UpdateS3ResourcesCommandInput) {
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
  ): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "UpdateS3ResourcesCommand";
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
  private serialize(input: UpdateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateS3ResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1UpdateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
