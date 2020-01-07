import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListUploadsRequest, ListUploadsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUploadsCommandInput = ListUploadsRequest;
export declare type ListUploadsCommandOutput = ListUploadsResult & __MetadataBearer;
export declare class ListUploadsCommand extends $Command<ListUploadsCommandInput, ListUploadsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListUploadsCommandInput;
    constructor(input: ListUploadsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUploadsCommandInput, ListUploadsCommandOutput>;
    private serialize;
    private deserialize;
}
