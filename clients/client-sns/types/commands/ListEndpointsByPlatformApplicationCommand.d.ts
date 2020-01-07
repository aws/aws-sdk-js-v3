import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListEndpointsByPlatformApplicationInput, ListEndpointsByPlatformApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEndpointsByPlatformApplicationCommandInput = ListEndpointsByPlatformApplicationInput;
export declare type ListEndpointsByPlatformApplicationCommandOutput = ListEndpointsByPlatformApplicationResponse & __MetadataBearer;
export declare class ListEndpointsByPlatformApplicationCommand extends $Command<ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListEndpointsByPlatformApplicationCommandInput;
    constructor(input: ListEndpointsByPlatformApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
