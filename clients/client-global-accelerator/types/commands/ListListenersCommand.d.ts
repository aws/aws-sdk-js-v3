import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListListenersRequest, ListListenersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListListenersCommandInput = ListListenersRequest;
export declare type ListListenersCommandOutput = ListListenersResponse & __MetadataBearer;
export declare class ListListenersCommand extends $Command<ListListenersCommandInput, ListListenersCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListListenersCommandInput;
    constructor(input: ListListenersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListListenersCommandInput, ListListenersCommandOutput>;
    private serialize;
    private deserialize;
}
