import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { ListInstancesRequest, ListInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstancesCommandInput = ListInstancesRequest;
export declare type ListInstancesCommandOutput = ListInstancesResponse & __MetadataBearer;
export declare class ListInstancesCommand extends $Command<ListInstancesCommandInput, ListInstancesCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: ListInstancesCommandInput;
    constructor(input: ListInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstancesCommandInput, ListInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
