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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListTestSetsRequest, ListTestSetsResponse } from "../models/models_1";
import { de_ListTestSetsCommand, se_ListTestSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestSetsCommand}.
 */
export interface ListTestSetsCommandInput extends ListTestSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSetsCommand}.
 */
export interface ListTestSetsCommandOutput extends ListTestSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>The list of the test sets</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestSetsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestSetsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestSetsRequest
 *   sortBy: { // TestSetSortBy
 *     attribute: "TestSetName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSetsResponse
 * //   testSets: [ // TestSetSummaryList
 * //     { // TestSetSummary
 * //       testSetId: "STRING_VALUE",
 * //       testSetName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       modality: "Text" || "Audio",
 * //       status: "Importing" || "PendingAnnotation" || "Deleting" || "ValidationError" || "Ready",
 * //       roleArn: "STRING_VALUE",
 * //       numTurns: Number("int"),
 * //       storageLocation: { // TestSetStorageLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSetsCommandInput - {@link ListTestSetsCommandInput}
 * @returns {@link ListTestSetsCommandOutput}
 * @see {@link ListTestSetsCommandInput} for command's `input` shape.
 * @see {@link ListTestSetsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class ListTestSetsCommand extends $Command<
  ListTestSetsCommandInput,
  ListTestSetsCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: ListTestSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestSetsCommandInput, ListTestSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTestSetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListTestSetsCommand";
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
  private serialize(input: ListTestSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestSetsCommandOutput> {
    return de_ListTestSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
