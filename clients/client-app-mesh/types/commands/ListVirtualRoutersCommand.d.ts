import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualRoutersInput, ListVirtualRoutersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVirtualRoutersCommandInput = ListVirtualRoutersInput;
export declare type ListVirtualRoutersCommandOutput = ListVirtualRoutersOutput & __MetadataBearer;
export declare class ListVirtualRoutersCommand extends $Command<ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: ListVirtualRoutersCommandInput;
    constructor(input: ListVirtualRoutersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput>;
    private serialize;
    private deserialize;
}
