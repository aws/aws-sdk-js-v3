import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListInstanceProfilesRequest, ListInstanceProfilesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstanceProfilesCommandInput = ListInstanceProfilesRequest;
export declare type ListInstanceProfilesCommandOutput = ListInstanceProfilesResult & __MetadataBearer;
export declare class ListInstanceProfilesCommand extends $Command<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListInstanceProfilesCommandInput;
    constructor(input: ListInstanceProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
