import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConfigurationAggregatorRequest, PutConfigurationAggregatorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConfigurationAggregatorCommandInput = PutConfigurationAggregatorRequest;
export declare type PutConfigurationAggregatorCommandOutput = PutConfigurationAggregatorResponse & __MetadataBearer;
export declare class PutConfigurationAggregatorCommand extends $Command<PutConfigurationAggregatorCommandInput, PutConfigurationAggregatorCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutConfigurationAggregatorCommandInput;
    constructor(input: PutConfigurationAggregatorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationAggregatorCommandInput, PutConfigurationAggregatorCommandOutput>;
    private serialize;
    private deserialize;
}
