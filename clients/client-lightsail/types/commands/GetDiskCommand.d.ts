import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskRequest, GetDiskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDiskCommandInput = GetDiskRequest;
export declare type GetDiskCommandOutput = GetDiskResult & __MetadataBearer;
export declare class GetDiskCommand extends $Command<GetDiskCommandInput, GetDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDiskCommandInput;
    constructor(input: GetDiskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiskCommandInput, GetDiskCommandOutput>;
    private serialize;
    private deserialize;
}
