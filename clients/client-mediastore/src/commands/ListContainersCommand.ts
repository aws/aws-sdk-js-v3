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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { ListContainersInput, ListContainersOutput } from "../models/models_0";
import { de_ListContainersCommand, se_ListContainersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContainersCommand}.
 */
export interface ListContainersCommandInput extends ListContainersInput {}
/**
 * @public
 *
 * The output of {@link ListContainersCommand}.
 */
export interface ListContainersCommandOutput extends ListContainersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p>
 *          <p>You can query to receive all the containers in one response. Or you can include the
 *             <code>MaxResults</code> parameter to receive a limited number of containers in each
 *          response. In this case, the response includes a token. To get the next set of containers,
 *          send the command again, this time with the <code>NextToken</code> parameter (with the
 *          returned token as its value). The next set of responses appears, with a token if there are
 *          still more containers to receive. </p>
 *          <p>See also <a>DescribeContainer</a>, which gets the properties of one
 *          container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, ListContainersCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, ListContainersCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // ListContainersInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContainersCommand(input);
 * const response = await client.send(command);
 * // { // ListContainersOutput
 * //   Containers: [ // ContainerList // required
 * //     { // Container
 * //       Endpoint: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING" || "DELETING",
 * //       AccessLoggingEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainersCommandInput - {@link ListContainersCommandInput}
 * @returns {@link ListContainersCommandOutput}
 * @see {@link ListContainersCommandInput} for command's `input` shape.
 * @see {@link ListContainersCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 */
export class ListContainersCommand extends $Command<
  ListContainersCommandInput,
  ListContainersCommandOutput,
  MediaStoreClientResolvedConfig
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
  constructor(readonly input: ListContainersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContainersCommandInput, ListContainersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContainersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "ListContainersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaStore_20170901",
        operation: "ListContainers",
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
  private serialize(input: ListContainersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListContainersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContainersCommandOutput> {
    return de_ListContainersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
