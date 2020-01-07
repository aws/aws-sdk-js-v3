import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateResourceConfigRequest, GetAggregateResourceConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAggregateResourceConfigCommandInput = GetAggregateResourceConfigRequest;
export declare type GetAggregateResourceConfigCommandOutput = GetAggregateResourceConfigResponse & __MetadataBearer;
export declare class GetAggregateResourceConfigCommand extends $Command<GetAggregateResourceConfigCommandInput, GetAggregateResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateResourceConfigCommandInput;
    constructor(input: GetAggregateResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateResourceConfigCommandInput, GetAggregateResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
