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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetClassificationScopeRequest, GetClassificationScopeResponse } from "../models/models_0";
import { de_GetClassificationScopeCommand, se_GetClassificationScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClassificationScopeCommand}.
 */
export interface GetClassificationScopeCommandInput extends GetClassificationScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetClassificationScopeCommand}.
 */
export interface GetClassificationScopeCommandOutput extends GetClassificationScopeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the classification scope settings for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationScopeCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationScopeCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetClassificationScopeRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetClassificationScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetClassificationScopeResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   s3: { // S3ClassificationScope
 * //     excludes: { // S3ClassificationScopeExclusion
 * //       bucketNames: [ // __listOfS3BucketName // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClassificationScopeCommandInput - {@link GetClassificationScopeCommandInput}
 * @returns {@link GetClassificationScopeCommandOutput}
 * @see {@link GetClassificationScopeCommandInput} for command's `input` shape.
 * @see {@link GetClassificationScopeCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetClassificationScopeCommand extends $Command<
  GetClassificationScopeCommandInput,
  GetClassificationScopeCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: GetClassificationScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClassificationScopeCommandInput, GetClassificationScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClassificationScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetClassificationScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "GetClassificationScope",
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
  private serialize(input: GetClassificationScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClassificationScopeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassificationScopeCommandOutput> {
    return de_GetClassificationScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
