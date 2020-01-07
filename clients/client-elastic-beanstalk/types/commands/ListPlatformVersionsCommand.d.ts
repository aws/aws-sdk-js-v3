import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPlatformVersionsCommandInput = ListPlatformVersionsRequest;
export declare type ListPlatformVersionsCommandOutput = ListPlatformVersionsResult & __MetadataBearer;
export declare class ListPlatformVersionsCommand extends $Command<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ListPlatformVersionsCommandInput;
    constructor(input: ListPlatformVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
