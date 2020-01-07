import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AddIpRoutesRequest, AddIpRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddIpRoutesCommandInput = AddIpRoutesRequest;
export declare type AddIpRoutesCommandOutput = AddIpRoutesResult & __MetadataBearer;
export declare class AddIpRoutesCommand extends $Command<AddIpRoutesCommandInput, AddIpRoutesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: AddIpRoutesCommandInput;
    constructor(input: AddIpRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddIpRoutesCommandInput, AddIpRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
