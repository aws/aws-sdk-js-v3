import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationsForResourceRequest, GetOperationsForResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOperationsForResourceCommandInput = GetOperationsForResourceRequest;
export declare type GetOperationsForResourceCommandOutput = GetOperationsForResourceResult & __MetadataBearer;
export declare class GetOperationsForResourceCommand extends $Command<GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetOperationsForResourceCommandInput;
    constructor(input: GetOperationsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
