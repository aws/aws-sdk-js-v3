import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ReleaseStaticIpRequest, ReleaseStaticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReleaseStaticIpCommandInput = ReleaseStaticIpRequest;
export declare type ReleaseStaticIpCommandOutput = ReleaseStaticIpResult & __MetadataBearer;
export declare class ReleaseStaticIpCommand extends $Command<ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ReleaseStaticIpCommandInput;
    constructor(input: ReleaseStaticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
