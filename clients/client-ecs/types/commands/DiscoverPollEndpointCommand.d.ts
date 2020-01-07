import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DiscoverPollEndpointRequest, DiscoverPollEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DiscoverPollEndpointCommandInput = DiscoverPollEndpointRequest;
export declare type DiscoverPollEndpointCommandOutput = DiscoverPollEndpointResponse & __MetadataBearer;
export declare class DiscoverPollEndpointCommand extends $Command<DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput, ECSClientResolvedConfig> {
    readonly input: DiscoverPollEndpointCommandInput;
    constructor(input: DiscoverPollEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
