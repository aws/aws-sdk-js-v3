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

import { ListServiceVersionsRequest, ListServiceVersionsResult } from "../models/models_0";
import { de_ListServiceVersionsCommand, se_ListServiceVersionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceVersionsCommand}.
 */
export interface ListServiceVersionsCommandInput extends ListServiceVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceVersionsCommand}.
 */
export interface ListServiceVersionsCommandOutput extends ListServiceVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all supported versions for Snow on-device services. Returns an
 *       array of <code>ServiceVersion</code> object containing the supported versions for a particular service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListServiceVersionsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListServiceVersionsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListServiceVersionsRequest
 *   ServiceName: "KUBERNETES" || "EKS_ANYWHERE", // required
 *   DependentServices: [ // DependentServiceList
 *     { // DependentService
 *       ServiceName: "KUBERNETES" || "EKS_ANYWHERE",
 *       ServiceVersion: { // ServiceVersion
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceVersionsResult
 * //   ServiceVersions: [ // ServiceVersionList // required
 * //     { // ServiceVersion
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ServiceName: "KUBERNETES" || "EKS_ANYWHERE", // required
 * //   DependentServices: [ // DependentServiceList
 * //     { // DependentService
 * //       ServiceName: "KUBERNETES" || "EKS_ANYWHERE",
 * //       ServiceVersion: {
 * //         Version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceVersionsCommandInput - {@link ListServiceVersionsCommandInput}
 * @returns {@link ListServiceVersionsCommandOutput}
 * @see {@link ListServiceVersionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceVersionsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 */
export class ListServiceVersionsCommand extends $Command<
  ListServiceVersionsCommandInput,
  ListServiceVersionsCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: ListServiceVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServiceVersionsCommandInput, ListServiceVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListServiceVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "ListServiceVersions",
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
  private serialize(input: ListServiceVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServiceVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceVersionsCommandOutput> {
    return de_ListServiceVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
