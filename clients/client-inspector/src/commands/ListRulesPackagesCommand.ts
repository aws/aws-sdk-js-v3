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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import { de_ListRulesPackagesCommand, se_ListRulesPackagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRulesPackagesCommand}.
 */
export interface ListRulesPackagesCommandInput extends ListRulesPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesPackagesCommand}.
 */
export interface ListRulesPackagesCommandOutput extends ListRulesPackagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all available Amazon Inspector rules packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListRulesPackagesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesPackagesResponse
 * //   rulesPackageArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesPackagesCommandInput - {@link ListRulesPackagesCommandInput}
 * @returns {@link ListRulesPackagesCommandOutput}
 * @see {@link ListRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link ListRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example List rules packages
 * ```javascript
 * // Lists all available Amazon Inspector rules packages.
 * const input = {
 *   "maxResults": 123
 * };
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "1",
 *   "rulesPackageArns": [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-9hgA516p",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-H5hpSawc",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-vg5GGHSD"
 *   ]
 * }
 * *\/
 * // example id: list-rules-packages-1481066954883
 * ```
 *
 */
export class ListRulesPackagesCommand extends $Command<
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: ListRulesPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRulesPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListRulesPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "ListRulesPackages",
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
  private serialize(input: ListRulesPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRulesPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesPackagesCommandOutput> {
    return de_ListRulesPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
