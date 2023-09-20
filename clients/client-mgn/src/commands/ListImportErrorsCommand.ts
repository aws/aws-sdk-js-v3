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
import { ListImportErrorsRequest, ListImportErrorsResponse } from "../models/models_0";
import { de_ListImportErrorsCommand, se_ListImportErrorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImportErrorsCommand}.
 */
export interface ListImportErrorsCommandInput extends ListImportErrorsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportErrorsCommand}.
 */
export interface ListImportErrorsCommandOutput extends ListImportErrorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List import errors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListImportErrorsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListImportErrorsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListImportErrorsRequest
 *   importID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImportErrorsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportErrorsResponse
 * //   items: [ // ImportErrors
 * //     { // ImportTaskError
 * //       errorDateTime: "STRING_VALUE",
 * //       errorType: "STRING_VALUE",
 * //       errorData: { // ImportErrorData
 * //         sourceServerID: "STRING_VALUE",
 * //         applicationID: "STRING_VALUE",
 * //         waveID: "STRING_VALUE",
 * //         ec2LaunchTemplateID: "STRING_VALUE",
 * //         rowNumber: Number("long"),
 * //         rawError: "STRING_VALUE",
 * //         accountID: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportErrorsCommandInput - {@link ListImportErrorsCommandInput}
 * @returns {@link ListImportErrorsCommandOutput}
 * @see {@link ListImportErrorsCommandInput} for command's `input` shape.
 * @see {@link ListImportErrorsCommandOutput} for command's `response` shape.
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
export class ListImportErrorsCommand extends $Command<
  ListImportErrorsCommandInput,
  ListImportErrorsCommandOutput,
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
  constructor(readonly input: ListImportErrorsCommandInput) {
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
  ): Handler<ListImportErrorsCommandInput, ListImportErrorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImportErrorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ListImportErrorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "ListImportErrors",
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
  private serialize(input: ListImportErrorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImportErrorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportErrorsCommandOutput> {
    return de_ListImportErrorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
