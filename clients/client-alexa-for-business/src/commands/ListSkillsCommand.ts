// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsRequest, ListSkillsResponse } from "../models/models_0";
import { de_ListSkillsCommand, se_ListSkillsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListSkillsCommand}.
 */
export interface ListSkillsCommandInput extends ListSkillsRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsCommand}.
 */
export interface ListSkillsCommandOutput extends ListSkillsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all enabled skills in a specific skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSkillsRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   EnablementType: "STRING_VALUE",
 *   SkillType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsCommand(input);
 * const response = await client.send(command);
 * // { // ListSkillsResponse
 * //   SkillSummaries: [ // SkillSummaryList
 * //     { // SkillSummary
 * //       SkillId: "STRING_VALUE",
 * //       SkillName: "STRING_VALUE",
 * //       SupportsLinking: true || false,
 * //       EnablementType: "STRING_VALUE",
 * //       SkillType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSkillsCommandInput - {@link ListSkillsCommandInput}
 * @returns {@link ListSkillsCommandOutput}
 * @see {@link ListSkillsCommandInput} for command's `input` shape.
 * @see {@link ListSkillsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSkillsCommand extends $Command<
  ListSkillsCommandInput,
  ListSkillsCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ListSkillsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsCommandInput, ListSkillsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSkillsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSkillsCommand";
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
  private serialize(input: ListSkillsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSkillsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSkillsCommandOutput> {
    return de_ListSkillsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
