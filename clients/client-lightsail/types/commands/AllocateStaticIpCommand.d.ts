import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AllocateStaticIpRequest, AllocateStaticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateStaticIpCommandInput = AllocateStaticIpRequest;
export declare type AllocateStaticIpCommandOutput = AllocateStaticIpResult & __MetadataBearer;
export declare class AllocateStaticIpCommand extends $Command<AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AllocateStaticIpCommandInput;
    constructor(input: AllocateStaticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
