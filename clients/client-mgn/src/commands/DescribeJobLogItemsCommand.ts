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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DescribeJobLogItemsRequest, DescribeJobLogItemsResponse } from "../models/models_0";
import { de_DescribeJobLogItemsCommand, se_DescribeJobLogItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandInput extends DescribeJobLogItemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandOutput extends DescribeJobLogItemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves detailed job log items with paging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeJobLogItemsRequest
 *   jobID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobLogItemsResponse
 * //   items: [ // JobLogs
 * //     { // JobLog
 * //       logDateTime: "STRING_VALUE",
 * //       event: "STRING_VALUE",
 * //       eventData: { // JobLogEventData
 * //         sourceServerID: "STRING_VALUE",
 * //         conversionServerID: "STRING_VALUE",
 * //         targetInstanceID: "STRING_VALUE",
 * //         rawError: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobLogItemsCommandInput - {@link DescribeJobLogItemsCommandInput}
 * @returns {@link DescribeJobLogItemsCommandOutput}
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class DescribeJobLogItemsCommand extends $Command<
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: DescribeJobLogItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobLogItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeJobLogItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "DescribeJobLogItems",
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
  private serialize(input: DescribeJobLogItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobLogItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobLogItemsCommandOutput> {
    return de_DescribeJobLogItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
