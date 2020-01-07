import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListDevEndpointsRequest, ListDevEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDevEndpointsCommandInput = ListDevEndpointsRequest;
export declare type ListDevEndpointsCommandOutput = ListDevEndpointsResponse & __MetadataBearer;
export declare class ListDevEndpointsCommand extends $Command<ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListDevEndpointsCommandInput;
    constructor(input: ListDevEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
