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

import { ListOutpostsWithS3Request, ListOutpostsWithS3Result } from "../models/models_0";
import { de_ListOutpostsWithS3Command, se_ListOutpostsWithS3Command } from "../protocols/Aws_restJson1";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOutpostsWithS3Command}.
 */
export interface ListOutpostsWithS3CommandInput extends ListOutpostsWithS3Request {}
/**
 * @public
 *
 * The output of {@link ListOutpostsWithS3Command}.
 */
export interface ListOutpostsWithS3CommandOutput extends ListOutpostsWithS3Result, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account.
 *             Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user
 *             from Resource Access Manager (RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListOutpostsWithS3Command } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListOutpostsWithS3Command } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const input = { // ListOutpostsWithS3Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOutpostsWithS3Command(input);
 * const response = await client.send(command);
 * // { // ListOutpostsWithS3Result
 * //   Outposts: [ // Outposts
 * //     { // Outpost
 * //       OutpostArn: "STRING_VALUE",
 * //       OutpostId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       CapacityInBytes: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutpostsWithS3CommandInput - {@link ListOutpostsWithS3CommandInput}
 * @returns {@link ListOutpostsWithS3CommandOutput}
 * @see {@link ListOutpostsWithS3CommandInput} for command's `input` shape.
 * @see {@link ListOutpostsWithS3CommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access was denied for this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an exception with the internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this data.</p>
 *
 * @throws {@link S3OutpostsServiceException}
 * <p>Base exception class for all service exceptions from S3Outposts service.</p>
 *
 */
export class ListOutpostsWithS3Command extends $Command<
  ListOutpostsWithS3CommandInput,
  ListOutpostsWithS3CommandOutput,
  S3OutpostsClientResolvedConfig
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
  constructor(readonly input: ListOutpostsWithS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOutpostsWithS3CommandInput, ListOutpostsWithS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOutpostsWithS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3OutpostsClient";
    const commandName = "ListOutpostsWithS3Command";
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
  private serialize(input: ListOutpostsWithS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOutpostsWithS3Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutpostsWithS3CommandOutput> {
    return de_ListOutpostsWithS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
