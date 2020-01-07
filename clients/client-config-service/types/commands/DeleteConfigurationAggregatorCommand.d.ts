import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigurationAggregatorRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationAggregatorCommandInput = DeleteConfigurationAggregatorRequest;
export declare type DeleteConfigurationAggregatorCommandOutput = __MetadataBearer;
export declare class DeleteConfigurationAggregatorCommand extends $Command<DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConfigurationAggregatorCommandInput;
    constructor(input: DeleteConfigurationAggregatorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput>;
    private serialize;
    private deserialize;
}
