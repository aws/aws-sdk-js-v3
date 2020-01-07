import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointsRequest, GetDevEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDevEndpointsCommandInput = GetDevEndpointsRequest;
export declare type GetDevEndpointsCommandOutput = GetDevEndpointsResponse & __MetadataBearer;
export declare class GetDevEndpointsCommand extends $Command<GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDevEndpointsCommandInput;
    constructor(input: GetDevEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
