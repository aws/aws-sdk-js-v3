import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualServicesInput, ListVirtualServicesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVirtualServicesCommandInput = ListVirtualServicesInput;
export declare type ListVirtualServicesCommandOutput = ListVirtualServicesOutput & __MetadataBearer;
export declare class ListVirtualServicesCommand extends $Command<ListVirtualServicesCommandInput, ListVirtualServicesCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: ListVirtualServicesCommandInput;
    constructor(input: ListVirtualServicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVirtualServicesCommandInput, ListVirtualServicesCommandOutput>;
    private serialize;
    private deserialize;
}
