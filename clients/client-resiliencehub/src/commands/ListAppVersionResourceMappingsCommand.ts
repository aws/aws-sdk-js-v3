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

import { ListAppVersionResourceMappingsRequest, ListAppVersionResourceMappingsResponse } from "../models/models_0";
import {
  de_ListAppVersionResourceMappingsCommand,
  se_ListAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionResourceMappingsCommand}.
 */
export interface ListAppVersionResourceMappingsCommandInput extends ListAppVersionResourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionResourceMappingsCommand}.
 */
export interface ListAppVersionResourceMappingsCommandOutput
  extends ListAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists how the resources in an application version are mapped/sourced from. Mappings can be
 *       physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 *       app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionResourceMappingsRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionResourceMappingsResponse
 * //   resourceMappings: [ // ResourceMappingList // required
 * //     { // ResourceMapping
 * //       resourceName: "STRING_VALUE",
 * //       logicalStackName: "STRING_VALUE",
 * //       appRegistryAppName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       mappingType: "STRING_VALUE", // required
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionResourceMappingsCommandInput - {@link ListAppVersionResourceMappingsCommandInput}
 * @returns {@link ListAppVersionResourceMappingsCommandOutput}
 * @see {@link ListAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionResourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class ListAppVersionResourceMappingsCommand extends $Command<
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: ListAppVersionResourceMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppVersionResourceMappingsCommandInput, ListAppVersionResourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppVersionResourceMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppVersionResourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "ListAppVersionResourceMappings",
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
  private serialize(
    input: ListAppVersionResourceMappingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAppVersionResourceMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppVersionResourceMappingsCommandOutput> {
    return de_ListAppVersionResourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
