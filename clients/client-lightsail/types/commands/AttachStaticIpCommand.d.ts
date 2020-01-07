import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachStaticIpRequest, AttachStaticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachStaticIpCommandInput = AttachStaticIpRequest;
export declare type AttachStaticIpCommandOutput = AttachStaticIpResult & __MetadataBearer;
export declare class AttachStaticIpCommand extends $Command<AttachStaticIpCommandInput, AttachStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachStaticIpCommandInput;
    constructor(input: AttachStaticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachStaticIpCommandInput, AttachStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
