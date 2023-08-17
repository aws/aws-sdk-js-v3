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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListManagedJobTemplatesRequest, ListManagedJobTemplatesResponse } from "../models/models_1";
import { de_ListManagedJobTemplatesCommand, se_ListManagedJobTemplatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListManagedJobTemplatesCommand}.
 */
export interface ListManagedJobTemplatesCommandInput extends ListManagedJobTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedJobTemplatesCommand}.
 */
export interface ListManagedJobTemplatesCommandOutput extends ListManagedJobTemplatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of managed job templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListManagedJobTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListManagedJobTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListManagedJobTemplatesRequest
 *   templateName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedJobTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedJobTemplatesResponse
 * //   managedJobTemplates: [ // ManagedJobTemplatesSummaryList
 * //     { // ManagedJobTemplateSummary
 * //       templateArn: "STRING_VALUE",
 * //       templateName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       environments: [ // Environments
 * //         "STRING_VALUE",
 * //       ],
 * //       templateVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedJobTemplatesCommandInput - {@link ListManagedJobTemplatesCommandInput}
 * @returns {@link ListManagedJobTemplatesCommandOutput}
 * @see {@link ListManagedJobTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListManagedJobTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListManagedJobTemplatesCommand extends $Command<
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListManagedJobTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListManagedJobTemplatesCommandInput, ListManagedJobTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListManagedJobTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListManagedJobTemplatesCommand";
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
  private serialize(input: ListManagedJobTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListManagedJobTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListManagedJobTemplatesCommandOutput> {
    return de_ListManagedJobTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
