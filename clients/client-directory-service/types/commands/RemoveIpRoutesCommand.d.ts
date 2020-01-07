import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RemoveIpRoutesRequest, RemoveIpRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveIpRoutesCommandInput = RemoveIpRoutesRequest;
export declare type RemoveIpRoutesCommandOutput = RemoveIpRoutesResult & __MetadataBearer;
export declare class RemoveIpRoutesCommand extends $Command<RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RemoveIpRoutesCommandInput;
    constructor(input: RemoveIpRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
