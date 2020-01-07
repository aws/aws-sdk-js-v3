import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetStaticIpRequest, GetStaticIpResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetStaticIpCommandInput = GetStaticIpRequest;
export declare type GetStaticIpCommandOutput = GetStaticIpResult & __MetadataBearer;
export declare class GetStaticIpCommand extends $Command<GetStaticIpCommandInput, GetStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetStaticIpCommandInput;
    constructor(input: GetStaticIpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStaticIpCommandInput, GetStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
