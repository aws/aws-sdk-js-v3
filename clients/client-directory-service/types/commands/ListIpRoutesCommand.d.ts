import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListIpRoutesRequest, ListIpRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIpRoutesCommandInput = ListIpRoutesRequest;
export declare type ListIpRoutesCommandOutput = ListIpRoutesResult & __MetadataBearer;
export declare class ListIpRoutesCommand extends $Command<ListIpRoutesCommandInput, ListIpRoutesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListIpRoutesCommandInput;
    constructor(input: ListIpRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIpRoutesCommandInput, ListIpRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
