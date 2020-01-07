import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDisksRequest, GetDisksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDisksCommandInput = GetDisksRequest;
export declare type GetDisksCommandOutput = GetDisksResult & __MetadataBearer;
export declare class GetDisksCommand extends $Command<GetDisksCommandInput, GetDisksCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDisksCommandInput;
    constructor(input: GetDisksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDisksCommandInput, GetDisksCommandOutput>;
    private serialize;
    private deserialize;
}
