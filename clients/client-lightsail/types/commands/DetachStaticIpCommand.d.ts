import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachStaticIpRequest, DetachStaticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachStaticIpCommandInput = DetachStaticIpRequest;
export declare type DetachStaticIpCommandOutput = DetachStaticIpResult & __MetadataBearer;
export declare class DetachStaticIpCommand extends $Command<DetachStaticIpCommandInput, DetachStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DetachStaticIpCommandInput;
    constructor(input: DetachStaticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachStaticIpCommandInput, DetachStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
