import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAcceleratorsCommandInput = ListAcceleratorsRequest;
export declare type ListAcceleratorsCommandOutput = ListAcceleratorsResponse & __MetadataBearer;
export declare class ListAcceleratorsCommand extends $Command<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListAcceleratorsCommandInput;
    constructor(input: ListAcceleratorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput>;
    private serialize;
    private deserialize;
}
