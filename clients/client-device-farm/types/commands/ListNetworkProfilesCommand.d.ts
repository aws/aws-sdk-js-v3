import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListNetworkProfilesRequest, ListNetworkProfilesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListNetworkProfilesCommandInput = ListNetworkProfilesRequest;
export declare type ListNetworkProfilesCommandOutput = ListNetworkProfilesResult & __MetadataBearer;
export declare class ListNetworkProfilesCommand extends $Command<ListNetworkProfilesCommandInput, ListNetworkProfilesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListNetworkProfilesCommandInput;
    constructor(input: ListNetworkProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNetworkProfilesCommandInput, ListNetworkProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
