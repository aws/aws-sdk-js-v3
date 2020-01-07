import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualNodesInput, ListVirtualNodesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVirtualNodesCommandInput = ListVirtualNodesInput;
export declare type ListVirtualNodesCommandOutput = ListVirtualNodesOutput & __MetadataBearer;
export declare class ListVirtualNodesCommand extends $Command<ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: ListVirtualNodesCommandInput;
    constructor(input: ListVirtualNodesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput>;
    private serialize;
    private deserialize;
}
